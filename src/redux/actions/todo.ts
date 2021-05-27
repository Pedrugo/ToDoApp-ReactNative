import { Todo } from '../../interfaces/todo';
import { addTodo, deleteTodo, queryAllTodos, changeStatus, queyUpdateTodo } from '../../database/services/todo.service';

export const newTodo = () => {
    return {
        type: 'ADD_TODO',
    };
};

export const addNewTodo = (todo: Todo) => async (dispatch: any) => {
    try {
        const response = await addTodo(todo);
        console.log('agregado ', response)
    } catch (error) {
        console.log(error);
    };
};

export const updateStatus = (uuid: string) => async (dispath: any) => {
    try {
        await changeStatus(uuid);
        console.log('Actualizado')
    } catch (error) {
        console.log(error);
    };
};

export const updateTodo = (todo: Todo) => async (dispatch: any) => {
    try {
        await queyUpdateTodo(todo);
    } catch (error) {
        console.log(error)
    };
};

export const removeTodo = (uuid: string) => async (dispatch: any) => {
    try {
        await deleteTodo(uuid);
        console.log('Eliminado');
    } catch (error) {
        console.log(error);
    };
};

export const todoList = (todoList: any) => {
    return {
        type: 'TODO_LIST',
        payload: todoList
    };
};

export const getAllTodos = () => async (dispatch: any) => {
    try {
        const response = await queryAllTodos();
        dispatch(todoList(response))
    } catch (error) {
        console.log(error);
    };
};

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { styles } from '../styles/styles';
import { TodoCard } from '../components/TodoCard';
import { getAllTodos } from '../redux/actions/todo';
import { Todo } from '../interfaces/todo';
import { EditTodoForm } from '../components/EditTodoForm';

export const PeindingTodo = () => {

    const dispatch = useDispatch();
    const { TodoReducer, OverlayReducer } = useSelector((store): any => store);
    const { todoList } = TodoReducer;
    const { isOverlayOpen } = OverlayReducer;

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    return (
        <>
            <AppHeader />

            <ScrollView style={styles.container}>
                {
                    todoList.map((todo: Todo) => !todo.done && <TodoCard key={todo.uuid} todo={todo} />)
                }
                {
                    isOverlayOpen && (
                        <EditTodoForm />
                    )
                }
            </ScrollView>

        </>
    );
};

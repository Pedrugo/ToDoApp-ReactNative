import {Todo} from '../../interfaces/todo';

export type TodoActions = {type: 'TODO_LIST'; payload: any};

interface TodoState {
  todoList: any;
}

const todoInitialSate: TodoState = {
  todoList: [],
};

export const TodoReducer = (
  state = todoInitialSate,
  action: TodoActions,
): TodoState => {
  switch (action.type) {
    case 'TODO_LIST':
      return {
        ...state,
        todoList: action.payload,
      };

    default:
      return state;
  }
};

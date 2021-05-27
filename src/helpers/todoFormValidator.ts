import * as yup from 'yup';
import { Todo } from "../interfaces/todo";

export const todoFormValidator = (todo: Todo) => {
    let TodoSchema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });

    return TodoSchema;
};
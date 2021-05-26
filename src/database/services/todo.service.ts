import Realm from 'realm';
import { Todo } from '../../interfaces/todo';
import { TODO_SCHEMA } from '../models/todo.model';
import { realmConfig } from '../realmConfig';

export const addTodo = (todo: Todo) => new Promise((resolve, reject) => {
    Realm.open(realmConfig).then(realm => {
        realm.write(() => {
            realm.create(TODO_SCHEMA, todo);
            resolve(true);
        });
    }).catch(error => reject(error));
});

export const changeStatus = (uuid: string) => new Promise((resolve, reject) => {
    Realm.open(realmConfig).then(realm => {
        realm.write(() => {
            let updatingTodo: any = realm.objectForPrimaryKey(TODO_SCHEMA, uuid);
            updatingTodo.done = true;
            resolve(true);
        })
    }).catch(error => reject(error));
});

export const queyUpdateTodo = (todo: Todo) => new Promise((resolve, reject) => {
    Realm.open(realmConfig).then(realm => {
        realm.write(() => {
            let updatingTodo: any = realm.objectForPrimaryKey(TODO_SCHEMA, todo.uuid);
            updatingTodo.title = todo.title;
            updatingTodo.description = todo.description;
            updatingTodo.deadline = todo.deadline;
            updatingTodo.modificationDate = todo.modificationDate;

            resolve(true);
        })
    }).catch(error => reject(error));
});

export const deleteTodo = (uuid: string) => new Promise((resolve, reject) => {
    Realm.open(realmConfig).then(realm => {
        realm.write(() => {
            let deletingTodo = realm.objectForPrimaryKey(TODO_SCHEMA, uuid);
            realm.delete(deletingTodo);
            resolve(true);
        });
    }).catch(error => reject(error));
});

export const queryAllTodos = () => new Promise((resolve, reject) => {
    Realm.open(realmConfig).then(realm => {
        let allTodos = realm.objects(TODO_SCHEMA);
        resolve(allTodos);
    }).catch(error => reject(error));
});
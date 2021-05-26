import Realm from 'realm';
import { TodoSchema } from './models/todo.model';


export const realmConfig = {
    path: 'TodoRealm',
    schema: [TodoSchema]
};

export default new Realm(realmConfig);

export const TODO_SCHEMA = 'Todo';

export const TodoSchema = {
    name: TODO_SCHEMA,
    primaryKey: 'uuid',
    properties: {
        uuid: 'string',
        title: { type: 'string' },
        description: { type: 'string' },
        creationDate: { type: 'string' },
        deadline: { type: 'string' },
        modificationDate: { type: 'string' },
        phrase: { type: 'string' },
        done: { type: 'bool' }
    },
};
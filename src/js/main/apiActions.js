// import { createRequest } from 'lp-redux-api'

// API actions go here.

// Example:

// export const fetchUser = createRequest('FETCH_USER', (id) => ({
//    url: '/users/' + id,
// }))

import { createStubRequest } from '@launchpadlab/lp-redux-api'

import todos from '../../../fixtures/todos.json'

export const fetchTodos = createStubRequest('FETCH_TODOS', todos, { delay: 1500 });
export const addTodo = createStubRequest('ADD_TODO', ({ title }) => {
    if (title.toLowerCase().includes('nap')) {
        throw new Error("There's no time for naps!");
    }
    return { title, description: "", completed: false, id: 6 }
}
);
export const fetchTodo = createStubRequest('FETCH_TODO', (id) => {
    const singleTodo = todos.find((todo) => todo.id == id);

    if (!singleTodo) {
        throw new Error('not found');
    }

    return singleTodo;
}, { delay: 1500 });
export const udpateTodoStatus = createStubRequest('UPDATE_TODO', (id, completed) => {
    const todo = todos.find((todo) => todo.id == id);

    if (!todo) {
        throw new Error('not found');
    }

    return {
        ...todo,
        completed
    }
})
export const editTodo = createStubRequest('EDIT_TODO', (newTodo) => newTodo);
export const deleteTodo = createStubRequest('DELETE_TODO', (id) => {
    return {
        id,
        status: 200,
    }
}, { delay: 1000 })
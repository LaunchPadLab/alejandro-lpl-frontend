// import { createRequest } from 'lp-redux-api'

// API actions go here.

// Example:

// export const fetchUser = createRequest('FETCH_USER', (id) => ({
//    url: '/users/' + id,
// }))

import { createDeleteRequest, createPostRequest, createPutRequest, createRequest } from '@launchpadlab/lp-redux-api'

import todos from '../../../fixtures/todos.json'

export const fetchTodos = createRequest('FETCH_TODOS', () => {
    return {
        url: '/todos'
    }
});
export const addTodo = createPostRequest('ADD_TODO', (params) => {
    return {
        url: '/todos',
        body: params
    }
});
export const fetchTodo = createRequest('FETCH_TODO', (id) => {
    return {
        url: `/todos/${id}`
    }
});
export const udpateTodoStatus = createPutRequest('UPDATE_TODO', (id, completed) => {
    return {
        url: `/todos/${id}`,
        body: {
            completed
        }
    }
})
export const editTodo = createPutRequest('EDIT_TODO', (newTodo) => {
    return {
        url: `/todos/${newTodo.id}`,
        body: newTodo
    }
});
export const deleteTodo = createDeleteRequest('DELETE_TODO', (id) => {
    return {
        url: `/todos/${id}`
    }
})
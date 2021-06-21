// import { createRequest } from 'lp-redux-api'

// API actions go here.

// Example:

// export const fetchUser = createRequest('FETCH_USER', (id) => ({
//    url: '/users/' + id,
// }))

import { createStubRequest } from '@launchpadlab/lp-redux-api'

import todos from '../../../fixtures/todos.json'

export const fetchTodos = createStubRequest('FETCH_TODOS', todos);
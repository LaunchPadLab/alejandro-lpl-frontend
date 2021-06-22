import PropTypes from 'prop-types'

// Type declarations go here.



// Example:

export const todo = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    descripction: PropTypes.string,
    completed: PropTypes.bool
})

export const Actions = {
    EDIT: 'edit'
}
// export const user = PropTypes.shape({
//    id: PropTypes.string.isRequired,
//    name: PropTypes.string.isRequired,
// })

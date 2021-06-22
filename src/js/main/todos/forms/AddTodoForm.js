import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { lpForm } from 'lp-form'
import { SubmitButton, Input } from 'lp-components'
import { Field } from 'redux-form'
// import { Field } from 'redux-form'

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
}

const defaultProps = {}

function MyFormComponent ({ handleSubmit, submitting }) {
    return (
        <form className='add-todo' onSubmit={ handleSubmit } noValidate>
            <Field name='title' component={Input} />
            <SubmitButton {...{ submitting }}>
                Add todo
            </SubmitButton>
        </form>
    )
}

MyFormComponent.propTypes = propTypes
MyFormComponent.defaultProps = defaultProps

export default compose(
    lpForm({
        name: 'MyFormComponent',
        constraints: {
            title: {
                presence: true,
                length: {
                    maximum: 20,
                }
            }
        },
}),
)(MyFormComponent)
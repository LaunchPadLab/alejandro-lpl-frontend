import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { lpForm } from 'lp-form'
import { SubmitButton, Input, Textarea, Checkbox } from 'lp-components'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'

const propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    referrer: PropTypes.string.isRequired
}

const defaultProps = {}

function MyFormComponent({ handleSubmit, submitting, referrer }) {
    return (
        <form onSubmit={handleSubmit} noValidate>
            <Field name="Title" component={Input} />
            <Field name="Description" component={Textarea} />
            <Field name="Completed" component={Checkbox} />
            <SubmitButton submitting={submitting}>
                Save
            </SubmitButton>
            <Link
                className="button-secondary-outline"
                to={referrer}
            >
                Cancel
            </Link>
        </form>
    )
}

MyFormComponent.propTypes = propTypes
MyFormComponent.defaultProps = defaultProps

export default compose(
    lpForm({
        name: 'MyFormComponent',
        initialValuesFilter: { reject: ['id'] },
        constraints: {
            title: {
                presence: true,
            },
            description: {
                length: {
                    maximum: 500
                }
            }
        },
    }),
)(MyFormComponent)
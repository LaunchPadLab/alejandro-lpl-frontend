import React from 'react'
import PropTypes from 'prop-types'
import exact from 'prop-types-exact'
import { pure } from 'recompose'
import { Button, Modal } from 'lp-components'


const propTypes = {
    onClose: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
}

const defaultProps = {}

function AlertModal({ onClose, onDelete, loading }) {
    return (
        <Modal
            onClose={onClose}
            role="alertdialog"
            contentLabel="Delete Todo Confirmation"
        >
            <h2>Are you sure you want to delete this todo?</h2>
            <p>This action cannot be undone.</p>
            <Button className="button-warn" onClick={onDelete} submitting={loading}>
                Yes, Delete
            </Button>
            <button
                type="button"
                className="button-secondary-outline"
                onClick={onClose}
            >
                No, Nevermind
            </button>
        </Modal>
    )
}

AlertModal.propTypes = exact(propTypes)
AlertModal.defaultProps = defaultProps

export default pure(AlertModal)
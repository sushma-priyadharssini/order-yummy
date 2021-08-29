import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onClose.bind(this, false)}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById('overlays'))}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    )
}

export default Modal;
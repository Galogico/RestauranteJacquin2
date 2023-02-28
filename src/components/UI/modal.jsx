import classes from './Modal.module.css'
import ReactDOM from 'react';

const Backdrop = props =>{
    return <div className={classes.Backdrop}/>
}
const ModalOverlay = props=>{
return(
    <div className={classes.modal}>
        <div className={classes.children}>
            {props.children}
        </div>
    </div>
)
}
const portalElement = document.getElementById('overlays');

const Modal = props =>{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>
                {props.children}
            </ModalOverlay>
            )
        }
        </>
    )

}

export default Modal;
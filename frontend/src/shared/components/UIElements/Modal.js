import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";
import classes from "./Modal.module.scss";
import "./ModalAnimation.scss";

const ModalOverlay = (props) => {
  const content = (
    <div
      ref={props.referenceAnimation}
      className={`${classes.modal} ${props.className}`}
      style={props.style}
    >
      <header className={`${classes.modal__header} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={` ${classes.modal__content} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${classes.modal__footer} ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  return createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const nodeRef = useRef(null);
  console.log(nodeRef);
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        nodeRef={nodeRef}
        in={props.show}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames="modal1"
      >
        <ModalOverlay {...props} referenceAnimation={nodeRef} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;

import React, {useRef} from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import classes from "./SideDrawer.module.scss";

const SideDrawer = (props) => {
  const nodeRef = useRef(null)
  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
        <aside ref={nodeRef} className={classes.sideDrawer} onClick={props.onClick}>
          {props.children}
        </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};
export default SideDrawer;

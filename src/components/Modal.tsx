import React, { FC, useLayoutEffect, useState } from "react";
import classnames from "classnames";
import ReactDOM from "react-dom";
import { X } from "react-feather";

export interface ModalProps {
  closeModal: () => void;
  size?: string;
}

const Modal: FC<ModalProps> = (props) => {
  const [el, setEl] = useState<HTMLDivElement>(document.createElement("div"));

  useLayoutEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      modalRoot.appendChild(el);
      return () => {
        modalRoot.removeChild(el);
      };
    }
  }, []);

  return ReactDOM.createPortal(<ModalContainer {...props} />, el);
};

export default Modal;

const ModalContainer: FC<ModalProps> = (props) => {
  const { children, closeModal, size } = props;

  return (
    <div
      className="z-40 fixed flex w-screen h-screen bg-black left-0 bg-opacity-50 top-0 cursor-pointer"
      onClick={closeModal}
    >
      <div
        className={classnames(
          "cursor-default overflow-ellipsis overflow-y-auto",
          "m-auto bg-gray-lighter blur-xl dark:bg-gray-dark p-6 sm:rounded-lg",
          "max-w-full max-h-screen h-screen sm:h-auto shadow-xl w-full",
          `sm:max-w-${size} w-full`,
          "block relative"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <X
          className="fill-current absolute right-4 top-4 cursor-pointer opacity-50"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  );
};

ModalContainer.defaultProps = {
  size: "xl",
};

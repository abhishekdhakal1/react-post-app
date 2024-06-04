import classes from "./Modal.module.css";
function Modal({ children, onExecute }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onExecute} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
export default Modal;

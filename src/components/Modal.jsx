import classes from "./Modal.module.css";
function Modal(props) {
  const { onExecute, children } = props;
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

import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
  return (
  <button
    className="CreateTodoButton" 
    onClick={
      () => {
        setOpenModal(state => !state);
}
}
>
    ➕ Anime</button>
  );
}

export { CreateTodoButton };

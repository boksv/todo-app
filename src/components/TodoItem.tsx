import { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <li>
      {todo.text}
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

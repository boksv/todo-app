import TodoItem from "./TodoItem";
import { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: number) => void;
};

function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="empty-message">No TODOs! Add one above.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}


export default TodoList;

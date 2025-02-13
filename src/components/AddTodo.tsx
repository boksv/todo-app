import { useState } from "react";

type AddTodoProps = {
  onAdd: (text: string) => void;
};

function AddTodo({ onAdd }: AddTodoProps) {
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new TODO"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;

import React, { useState } from "react";

const ListItem = ({ todo, id, checkComplete, handleEditTodos }) => {
	const [onEdit, setOnEdit] = useState(false);
	const [editValue, setEditValue] = useState(todo.name);

	const handleOnEdit = () => {
		setOnEdit(true);
	};
	const handleOnSave = () => {
      setOnEdit(false);
      if (editValue) {
         handleEditTodos(editValue,id)
      } else {
         setEditValue(todo.name)
      }
	};
	if (onEdit) {
		return (
			<li>
				<input
					type="text"
					value={editValue}
					id={id}
					onChange={(e) => setEditValue(e.target.value.toLowerCase())}
				/>
				<button disabled={todo.complete} onClick={handleOnSave}>
					Save
				</button>
			</li>
		);
	} else {
		return (
			<li>
				<label htmlFor={id} className={todo.complete ? "avtive" : ""}>
					<input
						type="checkbox"
						id={id}
						checked={todo.complete}
						onChange={() => checkComplete(id)}
					/>
					{todo.name}
				</label>
				<button disabled={todo.complete} onClick={handleOnEdit}>
					Edit
				</button>
			</li>
		);
	}
};

export default ListItem;

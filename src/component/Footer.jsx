import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

const Footer = () => {
	const [checkAll, setChackAll] = useState(false);
	const [todos, setTodos] = useContext(DataContext);

	function handleCheckAll() {
		const newtodos = [...todos];
		newtodos.forEach((todo) => {
			todo.complete = !checkAll;
		});
		setTodos(newtodos);
		setChackAll((prev) => !prev);
	}
	function newTodosComplite() {
		return todos.filter((todo) => todo.complete === false);
	}
	function onDelete() {
		setTodos(newTodosComplite());
		setChackAll(false);
	}
	return (
		<>
			{todos.length === 0 ? (
				<h2>Congratullations! Nothings To Do</h2>
			) : (
				<div className="row">
					<label htmlFor="all">
						<input
							type="checkbox"
							name=""
							id="all"
							checked={checkAll}
							onChange={handleCheckAll}
						/>
						All
					</label>
					<p>You have {newTodosComplite().length } to do</p>
					<button id="delete" onClick={onDelete}>
						Delete
					</button>
				</div>
			)}
		</>
	);
};

export default Footer;

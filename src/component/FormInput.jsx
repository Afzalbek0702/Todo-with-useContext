import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "./DataProvider";

const FormInput = () => {
	const [todos, setTodos] = useContext(DataContext);
	const [todoName, setTodoName] = useState("");
   const todoInput = useRef()
	function addTodo(e) {
		e.preventDefault();
		setTodos([...todos, { name: todoName, complete: false }]);
		setTodoName("");
      todoInput.current.focus();
   }
   useEffect(() => {
      todoInput.current.focus();
   },[])
	return (
		<form onSubmit={addTodo}>
         <input
            ref={todoInput}
				type="text"
				placeholder="Enter To Do"
				value={todoName}
				required
				onChange={(e) => setTodoName(e.target.value.toLowerCase())}
			/>
			<button className="" type="submit">
				Create
			</button>
		</form>
	);
};

export default FormInput;

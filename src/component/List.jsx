import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

const List = () => {
	const [todos, setTodos] = useContext(DataContext);
	const switchComplite = (id) => {
		const newTodos = [...todos];
		newTodos.forEach((todo, index) => {
			if (index === id) {
				todo.complete = !todo.complete;
			}
		});
		setTodos(newTodos);
   };
   const handleEditTodos = (editvalue, id) => {
      const newtodos = [...todos]
      newtodos.map((todo, index) => {
         if (index === id) {
            todo.name = editvalue
         }
      })
      setTodos(newtodos)
   }
	return (
		<ul>
			{todos.map((todo, index) => (
				<ListItem
					todo={todo}
					key={index}
					id={index}
					checkComplete={switchComplite}
					handleEditTodos={handleEditTodos}
				/>
			))}
		</ul>
	);
};

export default List;

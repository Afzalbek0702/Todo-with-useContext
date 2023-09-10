import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	
   useEffect(() => {
      const todoStore = JSON.parse(localStorage.getItem("todoStore"));
		if (todoStore){ setTodos(todoStore)}
	},[]);
	
   useEffect(() => {
		localStorage.setItem("todoStore", JSON.stringify(todos));
	}, [todos]);
	
   return (
		<DataContext.Provider value={[todos, setTodos]}>
			{children}
		</DataContext.Provider>
	);
};

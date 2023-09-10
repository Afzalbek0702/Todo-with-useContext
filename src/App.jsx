import React from "react";
import FormInput from "./component/FormInput";
import List from "./component/List";
import Footer from "./component/Footer";
import { DataProvider } from "./component/DataProvider";

const App = () => {
	return (
		<DataProvider>
			<div className="app">
				<h1>To do list</h1>
				<FormInput />
				<List />
				<Footer />
			</div>
		</DataProvider>
	);
};

export default App;

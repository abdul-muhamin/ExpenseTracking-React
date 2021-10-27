import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import { NewExpense } from "./Components/NewExpense/NewExpense";

const Dummy_Expenses = [
	{ id: "e1", title: "Toilet Paper", amount: 50, date: new Date(2022, 5, 15) },
	{ id: "e2", title: "Toilet Paper", amount: 50, date: new Date(2022, 5, 15) },
	{ id: "e3", title: "Fruits", amount: 200, date: new Date(2021, 6, 15) },
	{ id: "e4", title: "Fruits", amount: 200, date: new Date(2021, 6, 15) },
	{ id: "e5", title: "Grocery", amount: 500, date: new Date(2020, 5, 25) },
	{ id: "e6", title: "Grocery", amount: 500, date: new Date(2020, 5, 25) },
	{ id: "e7", title: "Car Insurance", amount: 300, date: new Date(2022, 7, 10) },
	{ id: "e8", title: "Car Insurance", amount: 300, date: new Date(2022, 7, 10) },
];
function App(props) {
	const [expenses, setExpenses] = useState(Dummy_Expenses);
	// const expenses = [
	// 	{ id: "e1", title: "Toilet Paper", amount: 50, date: new Date(2021, 5, 15) },
	// 	{ id: "e2", title: "Grocery", amount: 500, date: new Date(2021, 5, 25) },
	// 	{ id: "e3", title: "Fruits", amount: 200, date: new Date(2021, 6, 15) },
	// 	{ id: "e4", title: "Car Insurance", amount: 300, date: new Date(2021, 7, 10) },
	// ];
	// const [expenses, ]
	const onExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Working with React</h2>
			<NewExpense onAddExpense={onExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;

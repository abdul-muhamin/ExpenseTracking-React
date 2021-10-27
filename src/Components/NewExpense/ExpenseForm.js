import React, { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
	//#region Hooks
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	//#endregion Hooks

	//#region handlers
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// console.log(enter/edTitle);
	};
	const dateChangeHandler = (event) => {
		// console.log(enteredDate);
		setEnteredDate(event.target.value);
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// console.log(enteredAmount);
	};

	const SubmitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		props.onSaveExpenseHandler(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	//#endregion handlers

	return (
		<form onSubmit={SubmitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
				</div>

				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.1"
						step="0.1"
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2020-01-01"
						max="2021-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

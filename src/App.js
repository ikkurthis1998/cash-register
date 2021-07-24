import React, { useState } from "react";
import "./App.css";
import ChangeTable from "./ChangeTable";

const App = () => {
	const [billAmount, setBillAmount] = useState("");
	const [cashGiven, setCashGiven] = useState("");

	const [nextClicked, setNextClicked] = useState(false);
	const [showChange, setShowChange] = useState(false);

	const [billAmountError, setBillAmountError] = useState("");
	const [cashGivenError, setCashGivenError] = useState("");

	const enterCashGiven = () => {
		if (billAmount === "") {
			setBillAmountError("Please enter Bill Amount");
		}
		if (billAmount !== "") {
			setBillAmountError("");
			setNextClicked(true);
		}
	};

	const getChange = () => {
		if (cashGiven === "") {
			setCashGivenError("Please enter Cash Given");
		}
		if (cashGiven !== "" && cashGiven < billAmount) {
			setCashGivenError("Cash Given should be greater than Bill Amount");
		}
		if (cashGiven !== "" && cashGiven > billAmount) {
			setCashGivenError("");
			setShowChange(true);
		}
	};

	return (
		<div className="app-container">
			<h1 className="main-heading">Cash Register Manager</h1>
			<p className="sub-heading">
				Enter the bill and cash given to get the number of notes/coins as change
			</p>
			<h1 className="amount-heading">Bill Amount:</h1>
			<input
				type="number"
				className="amount-input"
				onChange={(e) => setBillAmount(parseInt(e.target.value))}
			/>
			{!nextClicked && (
				<button className="button" onClick={() => enterCashGiven()}>
					Next
				</button>
			)}
			{billAmountError && <p className="error-message">{billAmountError}</p>}
			{nextClicked && (
				<>
					<h1 className="amount-heading">Cash Given:</h1>
					<input
						type="number"
						className="amount-input"
						onChange={(e) => setCashGiven(parseInt(e.target.value))}
					/>
					<button className="button" onClick={() => getChange()}>
						Check
					</button>
				</>
			)}
			{cashGivenError && <p className="error-message">{cashGivenError}</p>}
			{showChange && (
				<>
					<h1 className="amount-heading">Change:</h1>
					<ChangeTable billAmount={billAmount} cashGiven={cashGiven} />
				</>
			)}
			<p>Made with ❤️ by Sree</p>
		</div>
	);
};

export default App;

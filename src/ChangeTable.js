import React, { useState } from "react";
import "./ChangeTable.css";

const ChangeTable = ({ billAmount, cashGiven }) => {
	var change = cashGiven - billAmount;

	const calNotes = (note) => {
		const noOfNotes = Math.floor(change / note);
		change = change - noOfNotes * note;
		return noOfNotes;
	};

	return (
		<div className="change-table-container">
			<div className="change-table-row-container">
				<div className="change-table-row-element">
					<b>No. of Notes</b>
				</div>
				<div className="change-table-row-element">{calNotes(2000)}</div>
				<div className="change-table-row-element">{calNotes(500)}</div>
				<div className="change-table-row-element">{calNotes(200)}</div>
				<div className="change-table-row-element">{calNotes(100)}</div>
				<div className="change-table-row-element">{calNotes(50)}</div>
				<div className="change-table-row-element">{calNotes(20)}</div>
				<div className="change-table-row-element">{calNotes(10)}</div>
				<div className="change-table-row-element">{calNotes(5)}</div>
				<div className="change-table-row-element">{calNotes(1)}</div>
			</div>
			<div className="change-table-row-container">
				<div className="change-table-row-element">
					<b>Notes</b>
				</div>
				<div className="change-table-row-element">2000</div>
				<div className="change-table-row-element">500</div>
				<div className="change-table-row-element">200</div>
				<div className="change-table-row-element">100</div>
				<div className="change-table-row-element">50</div>
				<div className="change-table-row-element">20</div>
				<div className="change-table-row-element">10</div>
				<div className="change-table-row-element">5</div>
				<div className="change-table-row-element">1</div>
			</div>
		</div>
	);
};

export default ChangeTable;

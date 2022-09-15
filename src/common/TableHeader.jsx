import React from "react";

function TableHeader({ columns, onSort, sortColumn }) {
	const raiseSort = (path) => {
		const selectedColumn = { ...sortColumn };
		if (selectedColumn.path === path)
			selectedColumn.order = selectedColumn.order === "asc" ? "desc" : "asc";
		else {
			selectedColumn.path = path;
			selectedColumn.order = "asc";
		}
		onSort(selectedColumn);
	};

	const renderSortIcon = (column) => {
		if (column.path !== sortColumn.path) return null;
		if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
		return <i className="fa fa-sort-desc" />;
	};

	return (
		<thead>
			<tr>
				{columns.map((column) => (
					<th
						className="clickable"
						key={column.path || column.key}
						onClick={() => raiseSort(column.path)}>
						{column.label} {renderSortIcon(column)}
					</th>
				))}
			</tr>
		</thead>

		// <thead>
		// 	<tr>
		// 		<th onClick={() => raiseSort("title")}>Title</th>
		// 		<th onClick={() => raiseSort("genre.name")}>Genre</th>
		// 		<th onClick={() => raiseSort("numberInStock")}>Stock</th>
		// 		<th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
		// 		<th></th>
		// 		<th></th>
		// 	</tr>
		// </thead>
	);
}

export default TableHeader;

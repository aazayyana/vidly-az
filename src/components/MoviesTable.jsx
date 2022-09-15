import React from "react";
import Like from "../common/Like";
import Table from "../common/Table";

const MoviesTable = ({ movies, onDelete, onLike, sortColumn, onSort }) => {
	const columns = [
		{ path: "title", label: "Title" },
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{
			key: "like",
			content: (movie) => (
				<Like
					liked={movie.liked}
					onClick={() => onLike(movie)}
				/>
			),
		},
		{
			key: "delete",
			content: (movie) => (
				<button
					onClick={() => onDelete(movie)}
					className="btn btn-danger btm-sm">
					Delete
				</button>
			),
		},
	];

	return (
		<Table
			columns={columns}
			data={movies}
			sortColumn={sortColumn}
			onSort={onSort}
		/>
	);
};

export default MoviesTable;

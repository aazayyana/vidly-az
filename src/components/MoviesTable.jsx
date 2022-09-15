import React from "react";
import Like from "../common/Like";
import TableBody from "../common/TableBody";
import TableHeader from "../common/TableHeader";

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
		<table className="table">
			<TableHeader
				columns={columns}
				sortColumn={sortColumn}
				onSort={onSort}
			/>
			<TableBody
				data={movies}
				columns={columns}
			/>
		</table>
	);
};

export default MoviesTable;

import React from "react";
import Like from "../common/Like";
import TableHeader from "../common/TableHeader";

const MoviesTable = ({ movies, onDelete, onLike, sortColumn, onSort }) => {
	const columns = [
		{ path: "title", label: "Title" },
		{ path: "genre.name", label: "Genre" },
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		{ key: "like" },
		{ key: "delete" },
	];

	return (
		<table className="table">
			<TableHeader
				columns={columns}
				sortColumn={sortColumn}
				onSort={onSort}
			/>
			<tbody>
				{movies.map((movie) => (
					<tr key={movie._id}>
						<td>{movie.title}</td>
						<td>{movie.genre.name}</td>
						<td>{movie.numberInStock}</td>
						<td>{movie.dailyRentalRate}</td>
						<td>
							<Like
								liked={movie.liked}
								onClick={() => onLike(movie)}
							/>
						</td>
						<td>
							<button
								onClick={() => onDelete(movie)}
								className="btn btn-danger btm-sm">
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MoviesTable;

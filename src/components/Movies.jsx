import React, { useState, useEffect } from "react";
import ListGroup from "../common/ListGroup";
import Pagination from "./../common/Pagination";
import { Paginate } from "./../utils/Paginate";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

function Movies() {
	useEffect(() => {
		const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
		setMovies(getMovies());
		setGenres(genres);
	}, []);

	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState(...genres);
	const [pageSize] = useState(4);
	const [currentPage, setCurrentPage] = useState(1);
	const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

	const handleDelete = (movie) => {
		const newMovies = movies.filter((m) => m._id !== movie._id);
		setMovies(newMovies);
	};

	const handleLike = (movie) => {
		const newMovies = [...movies];
		const index = newMovies.indexOf(movie);
		newMovies[index] = { ...newMovies[index] };
		newMovies[index].liked = !newMovies[index].liked;
		setMovies(newMovies);
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const handleGenreSelect = (genre) => {
		setSelectedGenre(genre);
		setCurrentPage(1);
	};

	const handleSort = (selectedColumn) => {
		setSortColumn(selectedColumn);
	};

	const showMoviesInfo = () => {
		return movies.length === 0 ? (
			<p>There are no movies in the database</p>
		) : (
			<p>Showing {count} movies in the database</p>
		);
	};

	const filteredMovies =
		selectedGenre && selectedGenre._id
			? movies.filter((m) => m.genre._id === selectedGenre._id)
			: movies;

	const sortedMovies = _.orderBy(
		filteredMovies,
		[sortColumn.path],
		[sortColumn.order]
	);

	const paginatedMovies = Paginate(sortedMovies, currentPage, pageSize);

	const { length: count } = filteredMovies;

	return (
		<div className="row">
			<div className="col-3">
				<ListGroup
					items={genres}
					selectedItem={selectedGenre}
					onItemSelect={handleGenreSelect}
				/>
			</div>
			<div className="col">
				{showMoviesInfo()}
				<MoviesTable
					movies={paginatedMovies}
					sortColumn={sortColumn}
					onDelete={handleDelete}
					onLike={handleLike}
					onSort={handleSort}
				/>
				<Pagination
					itemCount={filteredMovies.length}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={handlePageChange}
				/>
			</div>
		</div>
	);
}

export default Movies;

import { Movie} from "@/types/movie";
import {TMDBMovie} from "@/features/movies/types/tmdb";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const mapTMDBMovie = (movie: TMDBMovie): Movie => ({
    id: movie.id,
    title: movie.title,
    description: movie.overview ?? "Sin descripcion disponible",
    releaseDate: movie.release_date ? new Date(movie.release_date) : null,
    poster: movie.poster_path ? `${IMAGE_BASE_URL}/w500${movie.poster_path}` : "",
    backdrop: movie.backdrop_path ? `{IMAGE_BASE_URL}/w780${movie.backdrop_path}` : "",
    rating: movie.vote_average
});


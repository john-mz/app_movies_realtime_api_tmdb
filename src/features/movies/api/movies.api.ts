
import { movieApi } from "@/features/services/api/movie-api";
import {Movie} from "@/features/types/movie"
// import { CastMember, CompleteMovie, Movie } from "@/types/movie";
import {
    TMDBMovie,
    TMDBMoviesResponse
} from "@/features/movies/types/tmdb";
import { mapTMDBMovie } from "./movie.mapper";

export type MovieCategory = "now_playing" | "popular" | "top_rated" | "upcoming";

export const getMoviesByCategory = async (category: MovieCategory): Promise<Movie[]> => {
    const { data } = await movieApi.get<TMDBMoviesResponse>(`/${category}`, {params: {language: "es-MX" }});
    return data.results.map(mapTMDBMovie);
};

export const getMovieById = async (id: number): Promise<Movie> => {
    const { data } = await movieApi.get<TMDBMovie>(`/${id}`, { params: {language: "es-MX"}})
    return mapTMDBMovie(data);
}
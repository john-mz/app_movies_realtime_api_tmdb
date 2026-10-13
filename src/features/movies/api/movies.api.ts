import { movieApi } from "@/services/api/movie–api";
import { CastMember, CompleteMovie, Movie } from "@/types/movie";
import {
    TMDBCreditsResponse,
    TMDBMovieDetail,
    TMDBMoviesResponse
} from "@/features/movies/types/tmdb";
import { mapTMDBCastMember, mapTMDBMovie } from "./movie.mapper";

export type MovieCategory = "now_playing" | "popular" | "top_rated" | "upcoming";

export const getMoviesByCategory = async (category: MovieCategory): Promise<Movie[]> => {
    const { data } = await movieApi.get<TMDBMoviesResponse>(`/${category}`, {params: {language: "es-MX" }});
    return data.results.map(mapTMDBMovie);
};

export const getMovieById = async (id: number): Promise<CompleteMovie> => {
    const { data } = await movieApi.get<TMDBMovieDetail>(`/${id}`, { params: {language: "es-MX"}})
    return mapTMDBMovie(data);
}
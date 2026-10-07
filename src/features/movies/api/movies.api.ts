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
    const { data } = await movieApi.get<TMDBMovieDetail>(`/${category}`, {params: {language: "es-MX" }});
    return data.results.map(mapTMDBMovie);
};

export const getMovieById = async (id: number): Promise<CompleteMovie> => {
    const { data } = await movieApi.get<TMDBMovieDetail>(`/${id}/credits`, { params: {language: "es-MX"}})
    return data.cast
    .slice()
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .slice(0,20)
    .map(mapTMDBCastMember)
}
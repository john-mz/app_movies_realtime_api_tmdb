import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategory } from "../api/movies.api";

const oneDay = 1000 * 60 * 60 * 24;

export const useMovies = () => {
    const nowPlayingQuery = useQuery({
        queryKey: ["movies", "now-playing"],
        queryFn: () => getMoviesByCategory("now_playing"),
        staleTime: oneDay
    });

    const popularQuery = useQuery({
        queryKey: ["movies", "popular"],
        queryFn: () => getMoviesByCategory("popular"),
        staleTime: oneDay
    });

    const topRatedQuery = useQuery({
        queryKey: ["movies", "top-rated"],
        queryFn: () => getMoviesByCategory("top_rated"),
        staleTime: oneDay
    });

    const upcomingQuery = useQuery({
        queryKey: ["movies", "upcoming"],
        queryFn: () => getMoviesByCategory("upcoming"),
        staleTime: oneDay
    });

    return { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery};

}

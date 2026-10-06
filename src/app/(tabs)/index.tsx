import { useMovies } from "@/features/movies/hooks/useMovies";

export default function HomeScreen(){
    const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isPending){
        return (
            <Screen>
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#a855f7"></ActivityIndicator>
                    <Text className="mt-3 text-zinc-400">Cargando peliculas...</Text>
                </View>
            </Screen>
        )
    }

    if (nowPlayingQuery.isError){
        return (
            <Screen>
                <View className="flex-1 items-center justify-center px-8">
                    <Text className="text-center text-lg text-white">No pudimos cargar las peliculas.</Text>
                    <Text className="mt-2 text-center text-zinc-400">Revisa tu conexion y la configuracion de TMDB</Text>
                </View>
            </Screen>
        )
    }

    return (
        <Screen scroll>
            <Text className="mb-2 mt-5 px-4 text-3xl font-bold text-white">Peliculas App</Text>
            <MainSlideshow movies={nowPlayingQuery.data ?? []}></MainSlideshow>
            <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []}></MovieHorizontalList>
            <MovieHorizontalList title="Mejor calificadas" movies={popularQuery.data ?? []}></MovieHorizontalList>
            <MovieHorizontalList title="Proximamente" movies={popularQuery.data ?? []}></MovieHorizontalList>
        </Screen>
    )
}
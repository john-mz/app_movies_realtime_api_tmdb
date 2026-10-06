import { useRouter, type Href } from "expo-router";
import { ScrollView, View } from "react-native";

import { MoviePoster } from "@/components/movies/MoviePoster";
import type { Movie } from "@/features/movies/types";

type Props = {
  movies: Movie[];
};

export function MainSlideshow({ movies }: Props) {
  const router = useRouter();

  if (!movies.length) return null;

  return (
    <View className="mb-5 w-full">
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {movies.slice(0, 8).map((movie) => (
          <View
            key={movie.id}
            className="items-center justify-center pr-2"
          >
            <MoviePoster
              movie={movie}
              onPress={() =>
                router.push(`/movie/${movie.id}` as Href)
              }
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

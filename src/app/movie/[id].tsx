import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
} from "react-native";

import { Screen } from "@/components/ui/Screen";
import { useMovie } from "@/features/movies/hooks/useMovie";

export default function MovieDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const movieId = Number(id);
  const { data: movie, isPending, isError } = useMovie(movieId);

  if (isPending) {
    return (
      <Screen>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#a855f7" />
        </View>
      </Screen>
    );
  }

  if (isError || !movie) {
    return (
      <Screen>
        <View className="flex-1 items-center justify-center px-8">
          <Text className="text-center text-white">
            No se pudo cargar la pelicula
          </Text>
          <Pressable
            onPress={() => router.back()}
            className="mt-5 rounded-xl bg-purple-600 px-5 py-3"
          >
            <Text className="font-semibold text-white">Volver</Text>
          </Pressable>
        </View>
      </Screen>
    );
  }

  return (
    <Screen scroll>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="relative">
        <Image
          source={movie.backdrop || movie.poster}
          contentFit="cover"
          transition={250}
          style={{ width: "100%", height: 250 }}
        />
        <Pressable
          onPress={() => router.back()}
          className="absolute left-4 top-12 rounded-full bg-black/60 p-2"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      </View>
      <View className="mt-16 px-5">
        <Image
          source={movie.poster}
          contentFit="cover"
          transition={250}
          style={{ width: 120, height: 180, borderRadius: 16 }}
        />
        <Text className="mt-4 text-3xl font-bold text-white">
          {movie.title}
        </Text>
        <Text className="mt-2 text-purple-400">
          ⭐ {movie.rating.toFixed(1)}
        </Text>
        <Text className="mt-5 text-lg font-semibold text-white">Sinopsis</Text>
        <Text className="mt-2 leading-6 text-zinc-300">
          {movie.description}
        </Text>
      </View>
    </Screen>
  );
}

import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Movie } from "@/types/movie";

type Props = {
    movie: Pick<Movie, "id" | "poster" | "title">;
    smallPoster?: boolean;
    onPress?: () => void;
};

export function MoviePoster({ movie, smallPoster = false, onPress }: Props ) {
    const width = smallPoster ? 95 : 170;
    const height = smallPoster ? 140 : 250;

    return (
        <Pressable accesibilityRole="button" accesibilityLabel={`Abrir ${movie.title}`} onPress={onPress} className="px-2 active:opacity-80">
            <View className="overflow-hidden rounded-2xl bg-zinc-800 shadow-lg">
                <Image source={movie.poster} placeholder={require("../../../assets/images/icon.png")} contentFit="cover" transition={250} style={{width, height}}/>
            </View>
        </Pressable>
    )
}
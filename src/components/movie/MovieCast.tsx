import { ScrollView, Text, View} from "react-native";
import { CastMember } from "@/types/movie";
import { ActorCard } from "./ActorCard";

interface Props {
    cast: CastMember[];
    isLoading?: boolean;
}

export function MovieCast({cast, isLoading = false }: Props ) {
    if (isLoading){
        return <Text className="mt-2 text-zinc-400">Cargando reparto...</Text>;
    }

    if (!cast.length) {
        return <Text className="mt-2 text-zinc-400">No hay reparto disponible</Text>;
    }

    return (
        <View className="mt-3">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {cast.map((actor) => (
                    <ActorCard key={`${actor.id}-${actor.character}`} actor={actor}></ActorCard>
                ))}
            </ScrollView>
        </View>
    )
}
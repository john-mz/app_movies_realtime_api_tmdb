import {Text, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@/expo/vector-icons";
import { CastMember } from "@/types/movies";

interface Props {
    actor: CastMember;
}

export function ActorCard({ actor }: Props) {
    return(
        <View className="mr-4 w-28">
            {actor.avatar ? (
                <Image source={actor.avatar} 
                contentFit="cover" 
                transition={200} 
                style={{width: 112, height: 160, borderRadius: 16}} 
                />
            ) : (
                <View className="h-40 w-28 items-center justify-center rounded-2xl bg-zinc-800">
                    <Ionicons name="person" size={42} color="#71717a"></Ionicons>
                </View>
            ) }
            <Text numberOfLines={2} className="mt-2 font-semibold text-white">
                {actor.name}
            </Text>
            <Text numberOfLines={2} className="mt-1 text-xs text-zinc-400">
                {actor.character}
            </Text>
        </View>
    )
}
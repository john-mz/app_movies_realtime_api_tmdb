import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";

type props = PropsWithChildren<{scroll?: boolean}>;

export function Screen({children, scroll = false }: Props ){
    if (scroll){
        return (
            <ScrollView className="flex-1 bg-zinc-950" contentContainerStyle={{paddingButton: 32}}>
                {children}
            </ScrollView>
        )
    }
    return <View className="flex-1 bg-zinc-950">{children}</View>
}
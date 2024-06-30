import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

import tw from "@/styles/tailwind";
import { stories } from "@/mocks/stories";

function StoriesHolder() {
  return (
    <ScrollView
      horizontal
      keyboardShouldPersistTaps="handled"
      style={tw`flex-1`}
      contentContainerStyle={tw`px-5 gap-3`}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`relative w-[4rem] h-[4rem] rounded-full bg-neutral-200`}
      >
        <Image
          style={tw`flex-1 rounded-full`}
          source="https://pbs.twimg.com/profile_images/1684901541915025408/ZrMDm0Nk_400x400.jpg"
          contentFit="cover"
          transition={1000}
        />
        <View
          style={tw`absolute bottom-0 right-0.5 z-10 flex-row items-center justify-center w-[1.2rem] h-[1.2rem] rounded-full border border-white bg-accent-4`}
        >
          <Ionicons name="add" size={14} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
      {stories.map((story, i: number) => (
        <TouchableOpacity
          key={i}
          activeOpacity={0.5}
          style={tw.style(
            "relative w-[4rem] h-[4rem] overflow-hidden rounded-full p-0.5 bg-white",
            story.isRead ? "border-0" : "border-2 border-accent-4"
          )}
        >
          <Image
            style={tw`flex-1 rounded-full bg-neutral-200`}
            source={story.avatar}
            contentFit="cover"
            transition={1000}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default StoriesHolder;

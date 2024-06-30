import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";

import tw from "@/styles/tailwind";

function SearchAndFilter() {
  return (
    <View style={tw`flex-row items-center justify-between px-5 gap-2`}>
      <View
        style={tw`flex-1 flex-row items-center px-3 py-2 rounded-md border border-neutral-200 bg-neutral-50`}
      >
        <Octicons name="search" size={25} color="#A8A8A8" />
        <TextInput
          style={tw`w-full px-3 font-poppins text-sm text-accent-2`}
          placeholder="What do you want to order?"
          placeholderTextColor="#A8A8A8"
        />
      </View>
      <TouchableOpacity style={tw`p-2 rounded-md bg-accent-4`}>
        <Ionicons name="options-outline" size={25} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

export default SearchAndFilter;

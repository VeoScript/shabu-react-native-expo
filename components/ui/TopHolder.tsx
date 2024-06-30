import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";

import tw from "@/styles/tailwind";

function TopHolder() {
  return (
    <View style={tw`flex-1 flex-row items-center justify-between px-5 py-3`}>
      <View style={tw`flex-row items-center justify-start gap-5`}>
        <Octicons name="location" size={30} color="#ED3737" />
        <View style={tw`flex-col`}>
          <Text style={tw`font-poppins text-xs text-accent-3`}>
            Delivery to
          </Text>
          <TouchableOpacity style={tw`flex-row items-center gap-2`}>
            <Text style={tw`font-poppins-bold text-sm text-accent-2`}>
              928 A. Bonifacio Street
            </Text>
            <Octicons name="triangle-down" size={24} color="#ED3737" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={tw`relative`}>
        <View style={tw`absolute bottom-0 -right-1 z-10`}>
          <Text style={tw`text-[2.5rem] text-accent-4`}>&bull;</Text>
        </View>
        <Octicons name="bell" size={25} color="#A8A8A8" />
      </TouchableOpacity>
    </View>
  );
}

export default TopHolder;

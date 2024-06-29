import React from "react";
import { SafeAreaView } from "react-native";

import tw from "@/styles/tailwind";
import { StatusBar } from "expo-status-bar";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <StatusBar animated={false} backgroundColor="#E9C46A" style="dark" />
      <SafeAreaView style={tw`flex-1 bg-accent-3 pt-10`}>
        {children}
      </SafeAreaView>
    </>
  );
}

export default MainLayout;

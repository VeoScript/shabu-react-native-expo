import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import tw from "@/styles/tailwind";
import { StatusBar } from "expo-status-bar";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <StatusBar animated={false} backgroundColor="#FFFFFF" style="dark" />
      <SafeAreaView style={tw`flex-1 bg-accent-1 pt-10`}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`pb-5`}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default MainLayout;

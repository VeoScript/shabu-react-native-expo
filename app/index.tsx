import React from "react";
import { View } from "react-native";

import tw from "@/styles/tailwind";
import { bannerImages } from "@/mocks/banners";

import MainLayout from "@/components/layouts/MainLayout";
import TopHolder from "@/components/ui/TopHolder";
import SearchAndFilter from "@/components/ui/SearchAndFilter";
import StoriesHolder from "@/components/ui/StoriesHolder";
import SlideBanners from "@/components/ui/SlideBanners";

function HomeScreen() {
  return (
    <MainLayout>
      <View style={tw`flex-1 gap-5`}>
        <TopHolder />
        <SearchAndFilter />
        <StoriesHolder />
        <SlideBanners images={bannerImages} />
      </View>
    </MainLayout>
  );
}

export default HomeScreen;

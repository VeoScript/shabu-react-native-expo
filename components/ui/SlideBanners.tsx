import tw from "@/styles/tailwind";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { Image } from "expo-image";

interface Props {
  images: string[];
}

function SlideBanners({ images }: Props) {
  const { width } = Dimensions.get("window");
  const height = width * 0.7;

  const [active, setActive] = useState(0);

  const onChangeSlide = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View>
      <View style={tw`relative rounded-xl overflow-hidden mx-5`}>
        <View style={tw`w-full h-auto`}>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={onChangeSlide}
            showsHorizontalScrollIndicator={false}
            style={{ width, height }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                style={{ width, height, resizeMode: "cover" }}
                source={image}
                contentFit="cover"
                transition={1000}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={tw`absolute bottom-5 flex-row items-center self-center px-3 py-1 gap-2 rounded-full bg-white bg-opacity-80`}
      >
        {images.map((_, i) => (
          <View
            key={i}
            style={tw.style(
              i === active
                ? "p-2 rounded-full bg-accent-4"
                : "p-1 rounded-full bg-accent-4 opacity-50"
            )}
          />
        ))}
      </View>
    </View>
  );
}

export default SlideBanners;

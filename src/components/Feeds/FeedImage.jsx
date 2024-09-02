import React from "react";
import { Image, View } from "react-native";

function FeedImage({ post }) {
  return (
    <View>
      <Image
        source={{ uri: post.image }}
        style={{ width: "100%", height: 325, marginTop: 10 }}
      ></Image>
    </View>
  );
}

export default FeedImage;

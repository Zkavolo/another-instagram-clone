import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "tamagui";
import { FlatList, Image, Text, Touchable, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function FeedHeader({ post }) {
  return (
    <>
      <View
        style={{
          marginBottom: 20,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: post.profImage }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <Text>username</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.2}>
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default FeedHeader;

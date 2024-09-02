import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { View } from "tamagui";

const getStoryFrameWidth = (size) => (6 / 60) * size;

const HasActiveStory = ({
  hasAlreadyViewed,
  storyFrameWidth,
  size,
  imageUrl,
}) =>
  hasAlreadyViewed ? (
    <View
      style={{
        width: storyFrameWidth + size + 1,
        height: storyFrameWidth + size + 1,
        borderRadius: size + storyFrameWidth / 2,
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: "gray",
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: size,
          height: size,
          borderRadius: size + (storyFrameWidth * 2) / 2,
        }}
      />
    </View>
  ) : (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["yellow", "darkviolet"]}
      style={{
        width: storyFrameWidth * 2 + size,
        height: storyFrameWidth * 2 + size,
        borderRadius: size + (storyFrameWidth * 2) / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: storyFrameWidth + size,
          height: storyFrameWidth + size,
          borderRadius: size + storyFrameWidth / 2,
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
        />
      </View>
    </LinearGradient>
  );

const ReusableStoryAvatar = (props) => {
  const storyFrameWidth = getStoryFrameWidth(props.size);

  return props.hasActiveStory ? (
    <HasActiveStory
      size={props.size}
      imageUrl={props.imageUrl}
      hasAlreadyViewed={props.hasAlreadyViewed}
      storyFrameWidth={storyFrameWidth}
    />
  ) : (
    <Image
      source={{ uri: props.imageUrl }}
      style={{
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
      }}
    />
  );
};

export default ReusableStoryAvatar;

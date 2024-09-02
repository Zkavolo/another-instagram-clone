import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import ReusableStoryAvatar from "./ReusableStoryAvatar";

const StoryAvatar = ({ item }) => (
  <ReusableStoryAvatar
    size={60}
    imageUrl={item.imageUrl}
    hasAlreadyViewed={item.hasAlreadyViewed}
    hasActiveStory={item.hasActiveStory}
  />
);

const StoryAvatarWithName = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ alignItems: "center", maxWidth: 80 }}
    >
      <StoryAvatar item={item} />
      <Text ellipsizeMode="tail" numberOfLines={1}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

function Stories() {
  return (
    <FlatList
      horizontal
      showHorizontalScrollIndicator={false}
      data={storiesData.filter((story) => story.hasActiveStory)}
      contentContainerStyle={{
        alignItems: "center",
        padding: 10,
        backgroundColor: "	#F0F0F0",
        gap: 8,
      }}
      keyExtractor={(item) => item.id}
      renderItem={StoryAvatarWithName}
    />
  );
}

const storiesData = [
  {
    id: "a-1",
    name: "Your Story",
    imageUrl:
      "https://i.pinimg.com/originals/97/2f/1b/972f1b8aca65479e3c401b800a4bd76a.jpg",
    hasActiveStory: true,
    hasAlreadyViewed: false,
  },
  {
    id: "b-2",
    name: "Tomski",
    imageUrl:
      "https://ih1.redbubble.net/image.618880200.0955/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg",
    hasActiveStory: true,
    hasAlreadyViewed: true,
  },
  {
    id: "c-3",
    name: "Ichad",
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
    hasActiveStory: true,
    hasAlreadyViewed: false,
  },
  {
    id: "d-4",
    name: "Levi",
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
    hasActiveStory: true,
    hasAlreadyViewed: false,
  },
  {
    id: "e-5",
    name: "Randy Randy",
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
    hasActiveStory: false,
    hasAlreadyViewed: false,
  },
  {
    id: "f-6",
    name: "Okkie",
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
    hasActiveStory: true,
    hasAlreadyViewed: false,
  },
  {
    id: "g-7",
    name: "Nudros",
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
    hasActiveStory: true,
    hasAlreadyViewed: false,
  },
  {
    id: "h-8",
    name: "Ipin",
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
    hasActiveStory: true,
    hasAlreadyViewed: false,
  },
];

export default Stories;

import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  Button,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

const emojis = ["❤️", "🙌", "🔥", "👏", "😢", "😍", "😲", "😂"];

function FeedPost({ post }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ gap: 15, flexDirection: "row" }}>
          <AntDesign name="hearto" size={24} color="black" />
          <Pressable onPress={() => setModalVisibility(true)}>
            <Feather
              style={{ transform: "rotate180deg", fontSize: 26 }}
              name="message-circle"
              size={24}
              color="black"
            />
          </Pressable>
          <Feather name="send" size={24} color="black" />
        </View>
        <Feather name="bookmark" size={24} color="black" />
      </View>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>
        {`${post.likes} likes`}
      </Text>
      <Text style={{ marginTop: 10 }}>{post.caption}</Text>
      <Pressable onPress={() => setModalVisibility(!modalVisibility)}>
        <Text style={{ color: "gray", marginTop: 5 }}>
          {`${post.comments} comments`}
        </Text>
      </Pressable>

      {/* Modal only */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisibility(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  maxHeight: "80%",
                  backgroundColor: "white",
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  paddingHorizontal: 20,
                  paddingTop: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "space-between",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    <Pressable onPress={() => setModalVisibility(false)}>
                      <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                    <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                      Comments
                    </Text>
                  </View>
                  <Feather name="send" size={24} color="black" />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                  {post.friendComments.map((comment, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 15,
                      }}
                    >
                      <Image
                        source={{ uri: comment.imageUrl }}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          marginRight: 10,
                        }}
                      />
                      <View>
                        <Text style={{ fontWeight: "bold" }}>
                          {comment.name}
                        </Text>
                        <Text>{comment.comment}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                    borderTopWidth: 1,
                    borderTopColor: "#ddd",
                    // gap: 10,
                  }}
                >
                  <View
                    style={{
                      gap: 15,
                      flexDirection: "row",
                      marginRight: 10,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {emojis.map((comment, index) => (
                      <Text style={{ fontSize: 30 }}>{emojis[index]}</Text>
                    ))}
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                    borderTopWidth: 1,
                    borderTopColor: "#ddd",
                  }}
                >
                  <TextInput
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: "#ddd",
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                    placeholder="Add a comment..."
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

export default FeedPost;

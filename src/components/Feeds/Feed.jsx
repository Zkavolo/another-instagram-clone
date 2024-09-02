import React from "react";
import { ScrollView, Text, View } from "react-native";
import FeedHeader from "./FeedHeader";
import FeedImage from "./FeedImage";
import FeedPost from "./FeedPost";

function Feed() {
  return (
    <ScrollView>
      {FeedData.map((post, index) => (
        <View key={index}>
          <FeedHeader post={post} />
          <FeedImage post={post} />
          <FeedPost post={post} />
        </View>
      ))}
    </ScrollView>
  );
}

const FeedData = [
  {
    name: "username1",
    caption: "Hello World",
    profImage:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    image:
      "https://i.pinimg.com/736x/22/8c/a4/228ca4e9d0944c1838c99972bdf4e428.jpg",
    likes: 7,
    comments: 3,
    friendComments: [
      {
        name: "Dhandi",
        imageUrl:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        comment: "Hello",
      },
      {
        name: "Yudha",
        imageUrl:
          "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        comment: "Hello",
      },
      {
        name: "Wibi",
        imageUrl:
          "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        comment: "Hello",
      },
    ],
  },
  {
    name: "username2",
    caption: "Exploring the mountains!",
    profImage:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    image:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    likes: 20,
    comments: 3,

    friendComments: [
      {
        name: "Dhandi",
        imageUrl:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        comment: "Hello",
      },
      {
        name: "Yudha",
        imageUrl:
          "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        comment: "Hello",
      },
      {
        name: "Wibi",
        imageUrl:
          "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        comment: "Hello",
      },
    ],
  },
  {
    name: "username2",
    caption: "Exploring the mountains!",
    profImage:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    image:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    likes: 20,
    comments: 3,

    friendComments: [
      {
        name: "Dhandi",
        imageUrl:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        comment: "Hello",
      },
      {
        name: "Yudha",
        imageUrl:
          "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        comment: "Hello",
      },
      {
        name: "Wibi",
        imageUrl:
          "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        comment: "Hello",
      },
    ],
  },
  {
    name: "username2",
    caption: "Exploring the mountains!",
    profImage:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    image:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    likes: 20,
    comments: 3,

    friendComments: [
      {
        name: "Dhandi",
        imageUrl:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        comment: "Hello",
      },
      {
        name: "Yudha",
        imageUrl:
          "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        comment: "Hello",
      },
      {
        name: "Wibi",
        imageUrl:
          "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        comment: "Hello",
      },
    ],
  },
  {
    name: "username2",
    caption: "Exploring the mountains!",
    profImage:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    image:
      "https://i.pinimg.com/736x/26/60/ef/2660ef691c59d1e0e3f2628eaec4adcf.jpg",
    likes: 20,
    comments: 3,

    friendComments: [
      {
        name: "Dhandi",
        imageUrl:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        comment: "Hello",
      },
      {
        name: "Yudha",
        imageUrl:
          "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        comment: "Hello",
      },
      {
        name: "Wibi",
        imageUrl:
          "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        comment: "Hello",
      },
    ],
  },
];

export default Feed;

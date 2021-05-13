import React from "react";
import { View } from "react-native";
import Video from "react-native-video";

const VideoDetailsScreen = (props) => {
  console.log(props.route);
  console.log(props.route.params);
  const { video } = props.route.params.item.item;
  return (
    <View>
      <Video
        source={{ uri: video }}
        style={{ width: "100%", height: 300 }}
        controls={true}
      />
    </View>
  );
};

export default VideoDetailsScreen;

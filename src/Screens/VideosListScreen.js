import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, connect, useSelector } from "react-redux";
import { fetchVideos, bookmarkVideo } from "../store/actions/videosAction";
import ListCell from "../Components/ListCell";
import ListComponent from "../Components/ListComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { inactiveTintColor } from "../Constants/Colors";

const mapStateToProps = (state) => {
  console.log("mapStateToProps videos - " + state.videoList.videos);
  console.log("mapStateToProps bookmarks - " + state.videoList.bookmarks);
  return state;
};

const VideosListScreen = (props) => {
  const bookmarkedVideos = useSelector((state) => state.videoList.bookmarks);

  const dispatch = useDispatch();
  const fetchHandler = useCallback(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const bookmarkHandler = useCallback(
    (id) => {
      dispatch(bookmarkVideo(id));
    },
    [dispatch]
  );

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const renderListItem = (item) => {
    const isBookmarked = bookmarkedVideos.some(
      (video) => item.item.id == video.id
    );
    return (
      <ListCell
        item={item}
        isBookmarked={isBookmarked}
        onPress={() => {
          props.navigation.navigate("Details", { item: item });
        }}
        onBookmark={bookmarkHandler}
      />
    );
  };

  return props.videoList.videos.length <= 0 ? (
    <View style={styles.container}>
      <MaterialIcons name={"article"} size={55} color={inactiveTintColor} />
      <Text style={{ color: inactiveTintColor, margin: 10, fontSize: 16 }}>
        No article available
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <ListComponent
        data={props.videoList.videos}
        renderListItem={renderListItem}
        styles={{ flex: 1, width: "90%", padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default connect(mapStateToProps)(VideosListScreen);

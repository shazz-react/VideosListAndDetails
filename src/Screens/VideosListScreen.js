import React, { useCallback, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, connect, useSelector } from "react-redux";
import { fetchVideos, bookmarkVideo } from "../store/actions/videosAction";
import ListCell from "../Components/ListCell";

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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        style={{ flex: 1, width: "100%", padding: 10 }}
        data={props.videoList.videos}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default connect(mapStateToProps)(VideosListScreen);

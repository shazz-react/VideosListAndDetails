import React, { useCallback, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, connect, useSelector } from "react-redux";
import { fetchVideos, bookmarkVideo } from "../store/actions/videosAction";
import ListCell from "../Components/ListCell";

const mapStateToProps = (state) => {
  console.log("mapStateToProps bookmarks - " + state.videoList.bookmarks);
  return state;
};

const BookmarkScreen = (props) => {
  const bookmarkedVideos = useSelector((state) => state.videoList.bookmarks);
  console.log(bookmarkedVideos);
  const dispatch = useDispatch();

  const bookmarkHandler = useCallback(
    (id) => {
      dispatch(bookmarkVideo(id));
    },
    [dispatch]
  );

  const renderListItem = (item) => {
    console.log("renderListItem - " + item);
    return (
      <ListCell
        item={item}
        isBookmarked={true}
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
        data={bookmarkedVideos}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default connect(mapStateToProps)(BookmarkScreen);

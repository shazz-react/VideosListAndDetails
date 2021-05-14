import React, { useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, connect, useSelector } from "react-redux";
import { bookmarkVideo } from "../store/actions/videosAction";
import BookmarkCell from "../Components/BookmarkCell";
import ListComponent from "../Components/ListComponent";
import Octicon from "react-native-vector-icons/Octicons";
import { inactiveTintColor } from "../Constants/Colors";

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
      <BookmarkCell
        item={item}
        isBookmarked={true}
        onPress={() => {
          props.navigation.navigate("Details", { item: item });
        }}
        onBookmark={bookmarkHandler}
      />
    );
  };

  return bookmarkedVideos.length <= 0 ? (
    <View style={styles.container}>
      <Octicon name={"bookmark"} size={55} color={inactiveTintColor} />
      <Text style={{ color: inactiveTintColor, margin: 10, fontSize: 16 }}>
        Add some bookmarks
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <ListComponent
        data={bookmarkedVideos}
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

export default connect(mapStateToProps)(BookmarkScreen);

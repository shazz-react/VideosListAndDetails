import React, { useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, connect, useSelector } from "react-redux";
import { bookmarkVideo } from "../store/actions/videosAction";
import BookmarkCell from "../Components/BookmarkCell";
import ListComponent from "../Components/ListComponent";
import Octicon from "react-native-vector-icons/Octicons";
import styled from "styled-components/native";

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
    <Container>
      <NoBookmarkIcon name={"bookmark"} size={55} />
      <NoBookmarkText>Add some bookmarks</NoBookmarkText>
    </Container>
  ) : (
    <Container>
      <ListComponent data={bookmarkedVideos} renderListItem={renderListItem} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const NoBookmarkIcon = styled(Octicon)`
  color: ${(props) => props.theme.noDataColor};
`;

const NoBookmarkText = styled.Text`
  margin: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.noDataColor};
`;

export default connect(mapStateToProps)(BookmarkScreen);

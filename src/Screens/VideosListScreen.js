import React, { useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { useDispatch, connect, useSelector } from "react-redux";
import { fetchVideos, bookmarkVideo } from "../store/actions/videosAction";
import ListCell from "../Components/ListCell";
import ListComponent from "../Components/ListComponent";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
    <Container>
      <NoArticleIcon name={"article"} size={55} />
      <NoArticleText>No article available</NoArticleText>
    </Container>
  ) : (
    <Container>
      <ListComponent
        data={props.videoList.videos}
        renderListItem={renderListItem}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const NoArticleIcon = styled(MaterialIcons)`
  color: ${(props) => props.theme.noDataColor};
`;

const NoArticleText = styled.Text`
  margin: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.noDataColor};
`;

export default connect(mapStateToProps)(VideosListScreen);

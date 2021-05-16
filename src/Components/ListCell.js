import React from "react";
import {
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { primaryColor, goldenColor } from "../Constants/Colors";

const ListCell = (props) => {
  const { title, videoThumbnail, description, viewCount, authorName, id } =
    props.item.item;
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <TouchableComponent onPress={props.onPress}>
      <Container>
        <VideoThumbnail source={{ uri: videoThumbnail }} resizeMode="cover" />
        <TitleRowContainer>
          <Title>{title.toUpperCase()}</Title>
          <Bookmark>
            <TouchableOpacity
              onPress={() => {
                props.onBookmark(id);
              }}
            >
              <Fontisto
                name={props.isBookmarked ? "bookmark-alt" : "bookmark"}
                size={25}
                color={primaryColor}
              />
            </TouchableOpacity>
          </Bookmark>
        </TitleRowContainer>
        <AuthorContainer>
          <MaterialCommunityIcons name={"pen"} size={15} color={"white"} />
          <AutherText>{authorName}</AutherText>
        </AuthorContainer>
        <ViewsContainer>
          <Icon name={"eye"} size={15} color={goldenColor} />
          <ViewsCount>{viewCount}</ViewsCount>
        </ViewsContainer>
        <Description>{description}</Description>
      </Container>
    </TouchableComponent>
  );
};

const Container = styled.View`
  flex: 1 auto;
  justify-content: center;
  align-items: center;
  height: 340px;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  shadow-color: ${(props) => props.theme.shadowColor};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 3px;
  elevation: 2;
`;

const VideoThumbnail = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding-bottom: 5px;
  shadow-color: black;
  shadow-offset: 3px 3px;
  shadow-opacity: 0.4;
  shadow-radius: 4px;
  elevation: 4;
`;

const TitleRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.titleColor};
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 8px;
  padding-horizontal: 5px;
  align-self: flex-start;
  width: 90%;
`;

const Bookmark = styled.View`
  width: 10%;
  align-items: flex-end;
  padding-right: 3px;
`;

const AuthorContainer = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.primaryColor};
  height: 20px;
  margin-horizontal: 5px;
  padding-horizontal: 10px;
  align-self: flex-start;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const AutherText = styled.Text`
  color: ${(props) => props.theme.authorName};
  font-size: 13px;
  font-weight: 600;
  margin-left: 4px;
`;

const ViewsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
  margin-left: 5px;
`;

const ViewsCount = styled.Text`
  color: ${(props) => props.theme.viewsColor};
  font-size: 12px;
  padding-vertical: 10px;
  padding-horizontal: 5px;
`;

const Description = styled.Text`
  color: ${(props) => props.theme.descriptionColor};
  padding-horizontal: 5px;
  padding-bottom: 10px;
  padding-top: 1px;
  font-size: 12px;
  align-self: flex-start;
`;

export default ListCell;

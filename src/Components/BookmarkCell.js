import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Entypo";
import { goldenColor } from "../Constants/Colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Platform } from "react-native";

const BookmarkCell = (props) => {
  const { title, videoThumbnail, viewCount, authorName, id } = props.item.item;

  let TouchableComponent = TouchableOpacityView;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableFeedbackView;
  }

  return (
    <Container>
      <TouchableComponent onPress={props.onPress}>
        <SubContainer>
          <VideoThumbnail source={{ uri: videoThumbnail }} resizeMode="cover" />
          <InfoContainer>
            <Title>{title.toUpperCase()}</Title>
            <AuthorContainer>
              <MaterialCommunityIcons name={"pen"} size={13} color={"white"} />
              <AutherText>{authorName}</AutherText>
            </AuthorContainer>
            <ViewsContainer>
              <Icon name={"eye"} size={15} color={goldenColor} />
              <ViewsCount>{viewCount}</ViewsCount>
            </ViewsContainer>
          </InfoContainer>
        </SubContainer>
      </TouchableComponent>
    </Container>
  );
};

const Container = styled.View`
  flex: 1 auto;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  padding: 5px;
  margin-bottom: 25px;
  shadow-color: ${(props) => props.theme.shadowColor};
  shadow-offset: 1px 2px;
  shadow-opacity: 0.4;
  shadow-radius: 3px;
  elevation: 4;
`;

const TouchableOpacityView = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
`;

const TouchableFeedbackView = styled.TouchableNativeFeedback`
  height: 100%;
  width: 100%;
`;

const SubContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
`;

const VideoThumbnail = styled.ImageBackground`
  flex: 1;
  height: 90px;
`;

const InfoContainer = styled.View`
  flex: 1;
  margin-left: 5px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.titleColor}
  font-size: 12px
  font-weight: 600
  align-self: flex-start
  margin: 5px
`;

const AuthorContainer = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 15px;
  margin-horizontal: 5px;
  margin-bottom: 5px;
  padding-horizontal: 5px;
  align-self: flex-start;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const AutherText = styled.Text`
  color: ${(props) => props.theme.authorName};
  font-size: 12px;
  font-weight: 500;
  margin-left: 4px;
`;

const ViewsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;

const ViewsCount = styled.Text`
  color: ${(props) => props.theme.viewsColor};
  font-size: 11px;
  font-weight: 500
  padding-vertical: 2px;
  margin-horizontal: 3px;
`;

export default BookmarkCell;

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Fontisto from "react-native-vector-icons/Fontisto";
import Icon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  primaryColor,
  goldenColor,
  titleColor,
  subtitleColor,
} from "../Constants/Colors";

const ListCell = (props) => {
  const { title, videoThumbnail, description, viewCount, authorName, id } =
    props.item.item;
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableComponent onPress={props.onPress}>
        <ImageBackground
          style={styles.image}
          source={{ uri: videoThumbnail }}
          resizeMode="cover"
        />
        <View style={styles.titleRowContainer}>
          <Text style={styles.titleText}>{title.toUpperCase()}</Text>
          <View style={styles.bookmarkContainer}>
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
          </View>
        </View>
        <View style={styles.autherTextContainer}>
          <MaterialCommunityIcons name={"pen"} size={15} color={"white"} />
          <Text style={styles.autherText}>{authorName}</Text>
        </View>
        <View style={styles.viewsContainer}>
          <Icon name={"eye"} size={15} color={goldenColor} />
          <Text style={styles.viewsText}>{viewCount}</Text>
        </View>
        <Text style={styles.descriptionText}>{description}</Text>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 340,
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    paddingBottom: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  titleRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 10,
  },
  titleText: {
    color: titleColor,
    fontSize: 15,
    fontWeight: "600",
    paddingBottom: 8,
    paddingHorizontal: 5,
    alignSelf: "flex-start",
    width: "90%",
  },
  bookmarkContainer: {
    width: "10%",
    alignItems: "flex-end",
    paddingRight: 3,
  },
  textContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: 100,
    width: "100%",
  },
  autherTextContainer: {
    flexDirection: "row",
    backgroundColor: primaryColor,
    height: 20,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  autherText: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 4,
  },
  viewsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 5,
  },
  viewsText: {
    color: goldenColor,
    fontSize: 12,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  descriptionText: {
    color: subtitleColor,
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 1,
    fontSize: 12,
    alignSelf: "flex-start",
  },
});

export default ListCell;

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
              <Icon
                name={
                  props.isBookmarked ? "bookmark-check" : "bookmark-outline"
                }
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.autherTextContainer}>
          <Text style={styles.autherText}>By: {authorName}</Text>
        </View>
        <Text style={styles.viewsText}>{viewCount} views</Text>
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
    marginBottom: 10,
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
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
  },
  titleRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 10,
  },
  titleText: {
    color: "#53354a",
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
    backgroundColor: "#ff577f",
    height: 20,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    justifyContent: "center",
    alignContent: "center",
  },
  autherText: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  viewsText: {
    color: "#f0a500",
    fontSize: 12,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  descriptionText: {
    color: "#8e7f7f",
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 1,
    fontSize: 12,
    alignSelf: "flex-start",
  },
});

export default ListCell;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PostList from "./views/PostList";
import CommentsList from "./views/CommentsList";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostList,
    navigationOptions: () => ({
      title: "Posts"
    })
  },
  CommentsList: {
    screen: CommentsList,
    navigationOptions: () => ({
      title: "Comentarios"
    })
  }
});

export default createAppContainer(AppNavigator);

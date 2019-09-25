import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//screens
import Main from "../src/pages/Main";
import Detail from "../src/pages/detail";

const MainNav = createStackNavigator(
  {
    Main: {
      screen: Main,

    }, Detail:
    {
      screen: Detail,
    }

  }
);

export default createAppContainer(MainNav);
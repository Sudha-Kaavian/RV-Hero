// import build in packages
import React, { useState, useEffect } from "react";
import { View, Text, Image, KeyboardAvoidingView, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import needed files from my location
import NotifyIcon from "../footerpages/notifyIcon";
import PreviousIcon from "../footerpages/previousIcon";
import SettingIcon from "../footerpages/settingsIcon";
import styles from "./footerstyle";
import RvOwnerHomePage from '../rvownerhomepage/rvownerhomepage';
import { loadCustomFonts } from '../Custom_Font/Custom_Font_Component';

// assign the icontext to some variables
const newName = "New";
const notifyName = "Notifications";
const previousName = "Previous";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

// The MainFooter component  element.
export default function Mainfooter() {

  // set a set variable
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {

    // setting a custom font
    const loadFonts = async () => {
      await loadCustomFonts();
      setFontLoaded(true);
    }
    loadFonts()

  }, [])

  return (
    // <KeyboardAvoidingView>
    // Set the four icons into same Tab Navigator
    <Tab.Navigator
      initialRouteName={RvOwnerHomePage}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          paddingBottom: 15,
          fontSize: 12,
          fontFamily: 'UberMove-Regular'
        },
        tabBarStyle: [
          {
            height: 80,
            // position: 'absolute',
            // top: 0,
            // zIndex: 0
          },
        ],

        tabBarIcon: () => {
          let iconImage;
          let routeName = route.name;

          if (routeName === "New") {
            iconImage = require("../../assets/news.png");
          } else if (routeName === "Notifications") {
            iconImage = require("../../assets/notify.png");
          } else if (routeName === "Previous") {
            iconImage = require("../../assets/showback.png");
          } else if (routeName === "Settings") {
            iconImage = require("../../assets/settings.png");
          }

          return (

            // set the images into the footer
            <Image source={iconImage} style={styles.icons} />
          );
        },
      })}
    >

      {/* Set the footer page files to navigate into the singlepage */}
      <Tab.Screen
        name={newName}
        options={{ headerShown: false }}
        component={RvOwnerHomePage}
      />
      <Tab.Screen
        name={notifyName}
        options={{ headerShown: false }}
        component={NotifyIcon}
      />
      <Tab.Screen
        name={previousName}
        options={{ headerShown: false }}
        component={PreviousIcon}
      />
      <Tab.Screen
        name={settingsName}
        options={{ headerShown: false }}
        component={SettingIcon}
      />
    </Tab.Navigator>
    // </KeyboardAvoidingView>
  );
}

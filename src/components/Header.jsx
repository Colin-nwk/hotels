import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        // backgroundColor: "#0edded",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        // borderTopColor: "transparent",
        // ShadowColor: "transparent",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 10,
          padding: 6,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 4,
          }}
        >
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
        }}
      >
        <Ionicons name="ios-airplane-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 4,
          }}
        >
          Flights
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
        }}
      >
        <Ionicons name="car-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 4,
          }}
        >
          Car rent
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          padding: 6,
        }}
      >
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 4,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import HomeForm from "../components/HomeForm";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Hotels.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        // borderColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12 }}
        />
      ),
    });
  }, []);
  console.log(route.params);
  return (
    <SafeAreaView>
      <Header />

      <HomeForm inputSearch={route?.params?.input} />
      <View>
        <Text style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}>
          Travel More Spend Less
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: "#003580",
              borderRadius: 10,
              padding: 20,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              Genius
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                // marginVertical: 20,
              }}
            >
              You are at genius level one in our loyalty program
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              // backgroundColor: "#003580",
              borderColor: "#e0e0e0",
              borderWidth: 1,
              borderRadius: 10,
              padding: 20,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              10% Discount
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                // marginVertical: 20,
              }}
            >
              Complete 5 days to unlock level 2
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: "#003580",
              borderRadius: 10,
              padding: 20,
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              15% for 3 persons
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
                // marginVertical: 20,
              }}
            >
              You are at genius level one in our loyalty program
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

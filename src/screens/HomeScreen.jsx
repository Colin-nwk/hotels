import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import HomeForm from "../components/HomeForm";
import HomeModal from "../components/HomeModal";

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
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
  return (
    <View>
      <Header />

      <HomeForm
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
      <HomeModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

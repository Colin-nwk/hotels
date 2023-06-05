import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges-picker";
import HomeModal from "./HomeModal";

import { useNavigation } from "@react-navigation/native";

const customButton = (onConfirm) => {
  return (
    <Button
      onPress={onConfirm}
      style={{
        container: { width: "80%", marginHorizontal: "3%" },
        text: { fontSize: 20 },
      }}
      primary
      title="submit"
    />
  );
};

const HomeForm = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState({});
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  console.log(selectedDate);
  return (
    <>
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: "#ffc72c",
            borderWidth: 3,
            borderRadius: 6,
          }}
        >
          <Pressable
            style={styles.formInput}
            onPress={() => navigation.navigate("Search")}
          >
            {/* TODO: destination*/}
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Enter your destination"
              placeholderTextColor="black"
            />
          </Pressable>
          <Pressable style={styles.formInput}>
            {/* TODO: selected dates*/}
            <Feather name="calendar" size={24} color="black" />

            <DatePicker
              style={{
                width: 350,
                height: 30,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: "transparent",
              }}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
                headerStyle: {
                  backgroundColor: "#0047AB",
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "auto",
                },
              }}
              customButton={(onConfirm) => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDate(startDate, endDate)
              }
              selectedBgColor="#0047AB"
              allowfontScaling={false}
              mode={"range"}
              placeholder={"Apr 27, 2023 - jul 3, 2023"}
            />
          </Pressable>
          <Pressable
            style={styles.formInput}
            onPress={() => {
              setIsModalVisible(!isModalVisible);
            }}
          >
            {/* TODO: rooms and guests*/}
            <Ionicons name="person" size={24} color="#003580" />
            <TextInput
              placeholder={`${rooms} room * ${adults} adults * ${children} children`}
              placeholderTextColor="red"
            />
          </Pressable>
          <Pressable
            style={{
              alignItems: "center",
              paddingHorizontal: 10,
              borderColor: "#ffc72c",
              // borderColor: "transparent",
              backgroundColor: "#2a52be",
              borderWidth: 1,
              paddingVertical: 15,
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
            }}
          >
            {/* TODO: search*/}
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Search
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <HomeModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        rooms={rooms}
        setRooms={setRooms}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
      />
    </>
  );
};

export default HomeForm;

const styles = StyleSheet.create({
  formInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#ffc72c",
    borderWidth: 1,
    paddingVertical: 15,
  },
});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { data, filters, services } from "../db/data";
import SearchResult from "../components/SearchResult";

const SearchScreen = () => {
  const [input, setInput] = useState("");

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          marginHorizontal: 10,
          marginVertical: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#ffc72c",
          borderWidth: 1,
          borderRadius: 10,
        }}
      >
        {/* <Text>Hello</Text> */}
        <TextInput
          placeholder="Enter your destination"
          value={input}
          name="search"
          onChangeText={(text) => setInput(text)}
        />
        <Feather name="search" size={24} color="black" />
      </View>
      <SearchResult data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});

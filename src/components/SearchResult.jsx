import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResult = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") return null;
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate("Home", {
                    input: item.place,
                  });
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View style={{ marginLeft: 10 }}>
                  <Image
                    source={{ uri: item.placeImage }}
                    style={{
                      width: 200,
                      height: 50,
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 15 }}>
                    {item.properties.length}
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { data } from "../db/data";
import PropertyCard from "../components/PropertyCard";

const Places = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Place",
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
    });
  }, []);
  //   console.log(route.params);
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable style={styles.sort}>
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={styles.text}>Sort</Text>
        </Pressable>
        <Pressable style={styles.sort}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={styles.text}>Filter</Text>
        </Pressable>
        <Pressable style={styles.sort}>
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={styles.text}>Map</Text>
        </Pressable>
      </Pressable>
      <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
        {data
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                params={route.params}
              />
            ))
          )}
      </ScrollView>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  sort: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 8,
  },
});

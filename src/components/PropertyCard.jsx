import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const PropertyCard = ({ property, params }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Pressable
        style={{ margin: 15, flexDirection: "row", backgroundColor: "white" }}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <MaterialIcons name="stars" size={24} color="red" />
            <Text>{property.rating}</Text>
            <View
              style={{
                width: 100,
                backgroundColor: "#6cb4ee",
                padding: 4,
                paddingVertical: 3,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Genius Level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>
          <Text
            style={{
              //   width: 210,
              marginTop: 6,
              fontSize: 15,
              fontWeight: "500",
              //   color: "gray",
              //   fontWeight: "bold",
            }}
          >
            Price for 1 Night and {params.adults} adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 12,
                textDecorationLine: "line-through",
              }}
            >
              {" "}
              N {property.oldPrice * params.adults}
            </Text>
            <Text> N {property.newPrice * params.adults}</Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: "gray" }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: "gray" }}>
              Hotel Room : 1 bed
            </Text>
          </View>
          <View
            style={{
              width: 150,
              backgroundColor: "#6082b6",
              padding: 4,
              paddingVertical: 3,
              borderRadius: 5,
              marginTop: 5,
              paddingHorizontal: 8,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Limited Time Deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});

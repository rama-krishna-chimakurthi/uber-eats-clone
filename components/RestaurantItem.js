import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

const RestaurantItem = (props) => {
  return (
    <View>
      {props.restarantsData.map((rest, index) => {
        return (
          <TouchableOpacity key={index}>
            <View
              style={{
                padding: 15,
                backgroundColor: "#fff",
                marginTop: 5,
                borderRadius: 20,
              }}
            >
              <RestaurantImage rest={rest} />
              <RestaurantInfo rest={rest} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const RestaurantImage = (props) => {
  return (
    <View>
      <Image
        source={{
          uri: props.rest.image_url,
        }}
        style={{
          width: "100%",
          height: 180,
          borderRadius: 20,
        }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 10 }}>
        <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontWeight: "900", fontSize: 16 }}>
          {props.rest.name}
        </Text>
        <Text style={{ color: "gray" }}>30-45 mins</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          padding: 7,
          borderRadius: 50,
        }}
      >
        <Text>{props.rest.rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItem;

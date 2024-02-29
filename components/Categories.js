import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast-food",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drink",
  },
];

const Categories = () => {
  return (
    <View style={{ backgroundColor: "white", paddingVertical: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{ alignItems: "center", marginHorizontal: 20 }}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

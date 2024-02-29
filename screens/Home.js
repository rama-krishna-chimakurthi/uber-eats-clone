import { View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import { ScrollView } from "react-native";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";

const YELP_API_KEY =
  "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRestaurantData(json.businesses);
      });
  };

  useEffect(() => {
    //getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ paddingTop: 25, backgroundColor: "#eee", flex: 1 }}>
      <View style={{ padding: 15, backgroundColor: "white" }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restarantsData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

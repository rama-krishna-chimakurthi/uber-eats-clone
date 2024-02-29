import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <SafeAreaView style={{paddingTop:35, backgroundColor:'#eee',flex:1}}>
      <View style={{padding:15, backgroundColor:'white'}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <Categories />
    </SafeAreaView>
  )
}

export default Home
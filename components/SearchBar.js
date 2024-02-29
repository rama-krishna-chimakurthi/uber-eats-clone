import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={{paddingTop:15, flexDirection:'row'}}>
        <GooglePlacesAutocomplete 
            placeholder='Search' 
            styles={{
                textInput :{
                    backgroundColor :'#eee',
                    borderRadius:20,
                    marginTop:7,
                    fontWeight:'700'
                },
                textInputContainer:{
                    backgroundColor: '#eee',
                    borderRadius:50,
                    flexDirection:'row',
                    alignItems:'center',
                    marginRight:10
                }
            }}
            renderLeftButton={()=> {
                return (
                    <View style={{marginLeft : 10}}>
                        <Ionicons name="location-sharp" size={25}/>
                    </View>
                )
            }}

            renderRightButton={()=>{
                return(
                    <View style={{flexDirection:'row', marginRight:10, gap:5, alignItems:'center',backgroundColor:'white', padding:10, borderRadius:20}}>
                        <AntDesign name='clockcircle' size={15}/>
                        <Text>Search</Text>    
                    </View>
                )
            }}
        />
    </View>
  )
}

export default SearchBar
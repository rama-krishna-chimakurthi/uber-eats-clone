import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
    const [active,setActive] = useState('Delivery');
  return (
    <View style={{flexDirection:'row', alignSelf:'center'}}>
        <HeaderButton text="Delivery" isActive={active === 'Delivery'} setActive={setActive}/>
        <HeaderButton text="Pickup" isActive={active === 'Pickup'} setActive={setActive}/>
    </View>
  )
}

const HeaderButton = (props)=>{
    return(
        <TouchableOpacity style={{
            paddingHorizontal:18,
            paddingVertical:8,
            backgroundColor: props.isActive ? 'black' : 'white',
            borderRadius:20
        }} onPress={()=>props.setActive(props.text)}>
            <Text style={{color:props.isActive ? 'white' : 'black'}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default HeaderTabs
import {Text, View,Image } from 'react-native'
import React from 'react'
import twrnc from 'tailwind-react-native-classnames';
import Icon_Ant from "react-native-vector-icons/AntDesign"




// trying to make this component a reusable component
// so that I won't repeat the same thing in the other components 
// i will find a way to merge so that I won't have to repeat these codes but 
// for now let me apply it like this 
const SecondCardSection = () => {
  return (
    <View style={twrnc`flex items-center justify-around bg-white h-36 flex-row mb-3 rounded-sm`}>
    <View style={twrnc`flex items-center justify-center  flex-col`}>
    <View style={twrnc` flex flex-col items-center justify-center h-20`}>
<Text style={twrnc`h-5 font-medium text-base`}>Online reservation</Text>
<Text style={twrnc`font-normal text-xs text-gray-600`}>Table booking</Text>
        </View>
        {/*** a touchable opacity may come here oneday for  navigation  */}
        <View style={twrnc`flex flex-row rounded-2xl h-7 border border-blue-400 items-center justify-center  w-44`}>
        <Icon_Ant name='calendar' size={15} color="#63b3ed" style={twrnc`mx-4`}/>
        <Text style={twrnc` text-blue-400 mr-3`}>Reserve a table </Text>
        </View>
    </View>
    <View style={twrnc` flex flex-col items-center justify-center`}>
        <View style={twrnc` flex flex-col items-center justify-center h-20`}>
        <Image source={require('../../assets/Image_3.png')} />
        </View>
        <View style={twrnc`flex flex-row rounded-2xl h-7 border border-blue-400 items-center justify-center w-32`}>
        <Text style={twrnc`mx-4 text-blue-400`}>My reservations</Text>
        </View>
    </View>
    </View>
  )
}

export default SecondCardSection;


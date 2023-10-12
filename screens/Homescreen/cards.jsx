import {Text, View,Image } from 'react-native'
import React from 'react'
import twrnc from 'tailwind-react-native-classnames';




// trying to make this component a reusable component
// so that I won't repeat the same thing in the other components 
const CardSection = () => {
  return (
    <View style={twrnc`flex items-center justify-around bg-white h-36 rounded-sm flex-row mb-3`}>
    <View style={twrnc`flex items-center justify-center  flex-col`}>
        <View>
        <Image source={require('../../assets/Image.png')} />
        </View>
        <View style={twrnc`flex flex-col items-center justify-center  h-12`}>
        <Text style={twrnc`h-5 font-medium text-base`}>Store Pickup</Text>
        <Text style={twrnc`font-normal text-xs text-gray-600`}>Best Quality</Text>
        </View>
        
    </View>
    <View style={twrnc`h-20 border-l border-gray-400 mx-2`}/>
    <View>
        <View>
        <Image source={require('../../assets/Image_2.png')} />
        </View>
        <View style={twrnc`flex flex-col items-center justify-center  h-12`}>
        <Text style={twrnc`h-5 font-medium text-base`}>Delivery</Text>
    <Text style={twrnc`font-normal text-xs text-gray-600`}>Always on time</Text>
        </View>
        {/** for the buttons that will be passed */}

    </View>
    </View>
  )
}

export default CardSection;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Icon_fontAwesome from 'react-native-vector-icons/FontAwesome';

const Stores = () => {
  return (
    <View className="h-full w-full  pt-6 px-3 bg-white">
      {/** this is where the heading is  */}
  <View className="flex flex-row align-center justify-between bg-white">
        <Text className="text-2xl font-bold">Store</Text>
        <View className="flex flex-row items-center bg-gray-200 justify-center w-14 h-4  rounded-md">
<Icon name="dots-three-horizontal"/>
<View className="h-3 border-l border-gray-400 mx-2"/>
<Icon_fontAwesome name="times-circle-o"/>
</View>
      </View>
    
   
    <View>
 {/** the search box  */}
    </View>

    

    </View>
  )
}

export default Stores;

const styles = StyleSheet.create({})
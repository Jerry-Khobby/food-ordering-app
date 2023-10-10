import {Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import twrnc from 'tailwind-react-native-classnames';
import {
    Avatar 
} from 'react-native-paper'

const NavigationBar = () => {
  return (
    <View style={twrnc`flex  flex-row items-center justify-between mx-2 `}>
<View style={twrnc`flex flex-row items-center justify-between`}>{/** left hand side  */}
<View style={twrnc`items-center mr-3`}>
<TouchableOpacity>
    <Avatar.Image   style={twrnc`h-12 w-12 rounded-full`}/>
</TouchableOpacity>
</View>
<View >
    <Text style={twrnc`text-sm font-normal text-black `}>Welcome to </Text>
    <Text style={twrnc`text-lg font-bold `}>Sample restuarant</Text>
</View>
</View>
<View style={twrnc`flex flex-row items-center bg-gray-200 justify-center w-14 h-4  rounded-md`}>
{/** right hand-side */}
<View>
    <Text>......</Text>
</View>
<View style={twrnc`h-3 border-l border-gray-400 mx-2`} />
<View><Text>***</Text></View>

</View>
    </View>
  )
}

export default NavigationBar;


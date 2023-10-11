import {Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import twrnc from 'tailwind-react-native-classnames';
import {
    Avatar 
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/Entypo'
import Icon_fontAwesome from 'react-native-vector-icons/FontAwesome';






const NavigationBar = () => {
  return (
<View style={twrnc`flex  flex-row items-center justify-between`}>
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



{/** right hand-side , this part involves the icons and the 3 dots */}
<View style={twrnc`flex flex-row items-center bg-gray-200 justify-center w-14 h-4  rounded-md`}>
<Icon name="dots-three-horizontal"/>
<View style={twrnc`h-3 border-l border-gray-400 mx-2`} />
<Icon_fontAwesome name="times-circle-o"/>
</View>
</View>
  )
}

export default NavigationBar;


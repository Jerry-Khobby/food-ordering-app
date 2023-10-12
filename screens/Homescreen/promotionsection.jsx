import {Text, View,Image } from 'react-native'
import React from 'react'
import data  from "../../data/promotion_data"
import twrnc from 'tailwind-react-native-classnames';

const PromotionSection = () => {
  return (
    <View style={twrnc`mt-4`}>
         <Text style={twrnc`text-lg font-bold`}>
        Promotion Campaigns
      </Text>
      {/** maybe on day this items that have been displayed like will be clickable of which I have to use the touchable opacity on them  */}
      
      <View style={twrnc`flex flex-wrap flex-row `}>
        {
            
            data.map((item)=>(
                <View key={item.id} style={twrnc`w-1/2 p-2`}>
                    <Image source={item.image}
                    style={twrnc` h-44 w-44 rounded-lg`}
                    resizeMode='cover'
                    />
                    <Text style={twrnc`text-base mt-2`}>
                        {item.description}
                    </Text>
                    <Text style={twrnc`text-sm text-gray-500 mt-1 `}>
                        {item.date}
                    </Text>

                </View>
            ))
        }
     </View>
    </View>
  )
}

export default PromotionSection;

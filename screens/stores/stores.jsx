import {Text, View,TextInput,FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo'
import Icon_fontAwesome from 'react-native-vector-icons/FontAwesome';
import storeData from '../../data/stores';
import Icon_Mat from 'react-native-vector-icons/MaterialCommunityIcons';

const Stores = () => {
// defining that can be rendered by the flatList 
const [searchQuery, setSearchQuery] = useState('');
const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
  // Function to filter data based on searchQuery
  const filterData = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = storeData.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  };

  filterData();
}, [searchQuery]);

const renderStoreItem=({item})=>(
  <View className="h-20 px-5 mt-3 flex flex-row bg-white mx-3 items-center rounded-lg">
  <Icon_Mat name="storefront-outline" size={25}
  color="gray"
  />
  <View className="pl-2 flex flex-col">
    {/** I want to display the name and the address in the form of a flatlist  */}
    <Text className="text-base font-medium">{item.name} </Text>
    <Text className="text-gray-600 text-sm">{item.location}</Text>
  </View>
    </View>
);

  return (
    <View className="h-full w-full  pt-6  bg-white">
      {/** this is where the heading is  */}
      <View className="h-28">
  <View className="flex flex-row items-center justify-between bg-white px-3">
        <Text className="text-2xl font-bold">Store</Text>
        <View className="flex flex-row items-center bg-gray-200 justify-center w-14 h-4  rounded-md">
<Icon name="dots-three-horizontal"/>
<View className="h-3 border-l border-gray-400 mx-2"/>
<Icon_fontAwesome name="times-circle-o"/>
</View>
      </View>
    

   {/** the search box  */}
    <View className="flex flex-row mt-4 border-2 h-10 items-center rounded-md border-gray-300 pr-10 mx-3">
    <Icon name="magnifying-glass"
    size={24}
    color="gray"
    style={{
      paddingLeft: 9,
    }}
    />
    <TextInput
          placeholder="Search Store"
          style={{
            paddingLeft: 10,
            fontSize:15,
            marginRight:10,
          }}
          placeholderTextColor="#A0A0A0"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
    </View>
    </View>


<View className="bg-gray-100 w-full h-full">
<FlatList
data={filteredData}
keyExtractor={(item)=>item.id.toString()}
renderItem={renderStoreItem}
/>

</View>
    

    </View>
  )
}

export default Stores;


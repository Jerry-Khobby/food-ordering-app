import {View} from 'react-native'
import React from 'react'
import NavigationBar from './navigationbar'
import twrnc from 'tailwind-react-native-classnames';
import CarouselSection from './carousel';

const MainHome = () => {
  return (
    <View style={twrnc`mx-4`}>
      <NavigationBar/>
      <CarouselSection />
    </View>
  )
}

export default MainHome;

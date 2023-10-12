import {View,ScrollView} from 'react-native'
import React from 'react'
import NavigationBar from './navigationbar'
import twrnc from 'tailwind-react-native-classnames';
import CarouselSection from './carousel';
import CardSection from './cards';
import SecondCardSection from './secondcard';
import PromotionSection from './promotionsection';

const MainHome = () => {
  return (
    <View style={twrnc`mx-3`}>
      <NavigationBar/>
      <ScrollView  showsVerticalScrollIndicator={false} >
      <CarouselSection />
      <CardSection />
      <SecondCardSection />
      <PromotionSection />
    </ScrollView>
    </View>
  )
}

export default MainHome;

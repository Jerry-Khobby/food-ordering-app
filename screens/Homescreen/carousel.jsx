import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import twrnc from 'tailwind-react-native-classnames';
import data from '../../data/carousel_data';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth - 150;

const CarouselSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => {
    return (
      <View style={twrnc`bg-blue-500 w-72 h-36 justify-center items-center rounded-lg`}>
        <Text style={twrnc`text-white text-center`}>{item.title}</Text>
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <View style={twrnc`-mt-4`}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={twrnc`bg-blue-500 w-6 h-0.5 `}
          inactiveDotStyle={twrnc`bg-gray-600 w-6 h-0.5`}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        layout="default"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        containerCustomStyle={twrnc`mt-4`}
        contentContainerCustomStyle={twrnc`flex-row items-center justify-center`}
        slideStyle={twrnc`mx-4`}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {renderPagination()}
    </View>
  );
};

export default CarouselSection;

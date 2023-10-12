import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import twrnc from 'tailwind-react-native-classnames';
import data from '../../data/carousel_data';





const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth - 150; // Adjust the width of your carousel items here (40 for each side margin)

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
        dotStyle={twrnc`bg-blue-500 w-6 h-0.5 `} // Adjust the negative margin-top here
        inactiveDotStyle={twrnc`bg-gray-600 w-6 h-0.5`} // Adjust the negative margin-top here
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
        itemWidth={itemWidth} // Adjusted width of each carousel item
        layout="default"
        loop={true}
        autoplay={true}
        autoplayInterval={5000} // Set the interval between each slide (in milliseconds) - adjusted to 5 seconds
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        containerCustomStyle={twrnc`mt-2`}
        contentContainerCustomStyle={twrnc`flex-row items-center justify-center`}
        slideStyle={twrnc`mx-4`} // Set the horizontal margin between items to 1rem
        onSnapToItem={(index) => setActiveSlide(index)} // Update active slide index
      />
      {renderPagination()}
    </View>
  );
};

export default CarouselSection;

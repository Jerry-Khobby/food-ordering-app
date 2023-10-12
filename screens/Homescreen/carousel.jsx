import React, { useState } from 'react';
import { View, Text, Dimensions,Image} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import twrnc from 'tailwind-react-native-classnames';
import data from '../../data/carousel_data';

const { width: screenWidth } = Dimensions.get('window');
const itemWidth = screenWidth - 150;

const CarouselSection = () => {
  {/** state management of the current item being shown  */}
  const [activeSlide, setActiveSlide] = useState(0);



{/** the items to be shown as carousel, this is an image gotten from the figma mockup  */}
  const renderItem = ({ item }) => {
    return (
      <View style={twrnc`w-72 h-32 justify-center items-center rounded-lg`}>
         <Image source={item.image} style={twrnc`w-full h-full`} resizeMode="contain" />
      </View>
    );
  };

  {/** creating a function for the pagination  */}

  const renderPagination = () => {
        {/** trying hard to push the pagination upwards */}
    return (
      <View style={twrnc`-mt-9`}>
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
        loop={true}
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

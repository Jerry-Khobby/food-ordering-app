import { StatusBar } from 'expo-status-bar';
import {View,SafeAreaView } from 'react-native';
import twrnc from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './routes/TabNavigation';



const App=()=> {
  return (
    <NavigationContainer>
    <View style={twrnc`bg-gray-100 pt-8`}>
    <StatusBar   style="light-content" />
    <SafeAreaView>
    </SafeAreaView>
    </View>
    <BottomNavigationBar/>
    </NavigationContainer>
  );
}


export default App;

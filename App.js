import { StatusBar } from 'expo-status-bar';
import {View,SafeAreaView } from 'react-native';
import twrnc from 'tailwind-react-native-classnames';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './routes/TabNavigation';



const App=()=> {
  return (
    <NavigationContainer>
    <SafeAreaView>
   <View style={twrnc`mt-1 flex-col`}>
    <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    <BottomNavigationBar/>
    </NavigationContainer>
  );
}


export default App;

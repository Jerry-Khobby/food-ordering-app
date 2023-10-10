import { StatusBar } from 'expo-status-bar';
import {View,SafeAreaView } from 'react-native';
import NavigationBar from './screens/Homescreen/navigationbar';
import twrnc from 'tailwind-react-native-classnames';

const App=()=> {
  return (
    <SafeAreaView>
   <View style={twrnc`mt-1 flex-col`}>
      <NavigationBar/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}


export default App;

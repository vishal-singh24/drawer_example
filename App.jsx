import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/homescreen';
import ProfileScreen from './src/screens/profilescreen';
import CustomDrawerNavigation from './src/navigations/CustomDrawerNavigation';
import articlescreen from './src/screens/articlescreen';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'
        // drawerContent={(props) => <CustomDrawerNavigation{...props} />}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Article" component={articlescreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import WelcomeScreen from './src/screen/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screen/SignIn';
import ForgotPassword from './src/screen/ForgotPassword';
import ForgotPassword2 from './src/screen/ForgotPassword2';
import SignUp from './src/screen/SignUp';
import SignUpCheckStatus from './src/screen/SignUpCheckStatus';
import SignUpPersonalInfo from './src/screen/SignUpPersonalInfo';
import SignUpProfessionalInfo from './src/screen/SignUpProfessionalInfo';
import SignUpInterestIn from './src/screen/SignUpInterestIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/bottomTabScreen/Home';
import Projects from './src/bottomTabScreen/Projects';
import Chat from './src/bottomTabScreen/Chat';
import Account from './src/bottomTabScreen/Account';
import { COLORS } from './src/constaints/theme';
import HomeIcon from './src/svgIcons/HomeIcon';
import ProjectIcon from './src/svgIcons/ProjectIcon';
import ChatIcon from './src/svgIcons/ChatIcon';
import AccountIcon from './src/svgIcons/AccountIcon';
import ProjectDetail from './src/screen/ProjectDetail';
import SessionsBooking from './src/screen/SessionsBooking';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {


  return(
    <Tab.Navigator initialRouteName={'Home'} screenOptions={{headerShown:false,
    tabBarActiveTintColor:COLORS.sharpGreen,
    tabBarInactiveTintColor:'white',
    
    tabBarLabelStyle:{marginBottom:5},
    tabBarStyle:{
      shadowColor: "#000000",
      backgroundColor:'black',
      height:60,
  
      shadowOffset: {
        width: 5,
        height: 2,
      },
      shadowOpacity: 0.50,
      shadowRadius: 3.84, 
      elevation: 5,
    },
    
    
    }} >
      <Tab.Screen  name="Home" component={Home} options={{tabBarIcon:({focused, color, size})=> <HomeIcon color={color} />,
    tabBarLabel:'Home',
    }}  />
      <Tab.Screen  name="Projects" component={Projects} options={{tabBarIcon:({focused, color, size})=><ProjectIcon color={color}/>,
    tabBarLabel:'Projects',
    }}

    
      
      />
      <Tab.Screen  name="Chat" component={Chat} options={{tabBarIcon:({focused, color, size})=><ChatIcon color={color}/>,
    tabBarLabel:'Chat'
    }}
      
      />
      <Tab.Screen  name="Account" component={Account} options={{tabBarIcon:({focused, color, size})=><AccountIcon color={color}/>,
    tabBarLabel:'Account'
    }}
      
      />
    </Tab.Navigator>
  )


}

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'WelcomeScreen'} screenOptions={{headerShown:false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotPassword2" component={ForgotPassword2} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpCheckStatus" component={SignUpCheckStatus} />
        <Stack.Screen name="SignUpPersonalInfo" component={SignUpPersonalInfo} />
        <Stack.Screen name="SignUpProfessionalInfo" component={SignUpProfessionalInfo} />
        <Stack.Screen name="SignUpInterestIn" component={SignUpInterestIn} />
        <Stack.Screen name="BottomTab" component={TabNavigator} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetail} />
        <Stack.Screen name="SessionBooking" component={SessionsBooking} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

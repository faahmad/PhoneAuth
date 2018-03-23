import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator, StackNavigator } from 'react-navigation'

// import the different screens
import Loading from './Loading'
import PhoneInput from './PhoneInput'
import Verification from './Verification'
import Main from './Main'

// create our app's navigation stack
const AuthStack = StackNavigator({ PhoneInput, Verification })
const MainStack = StackNavigator({ Main })

const App = SwitchNavigator(
  {
    Loading,
    Auth: AuthStack,
    Main: MainStack
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App

import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

export default class Loading extends React.Component {
  componentDidMount() {
    // determine where to re-route the user depending on their auth state.
    // TODO firebase stuff...

    // set user to null for now.
    const user = null

    this.props.navigation.navigate(user ? 'Main' : 'Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

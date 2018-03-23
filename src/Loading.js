import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  componentDidMount() {
    this.handleNavigation()
  }

  async handleNavigation() {
    // determine where to re-route the user depending on their auth state.
    const user = await this.fetchCurrentUser()

    this.props.navigation.navigate(user ? 'Main' : 'Auth')
  }

  fetchCurrentUser() {
    // check firebase to see if the user is authenticated.

    // TODO firebase stuff...

    // Faking auth check for now.
    return new Promise(resolve => setTimeout(() => resolve(null), 3000))
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

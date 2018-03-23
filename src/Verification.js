import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class Verification extends React.Component {
  static navigationOptions = {
    title: 'Enter Your Verification Code'
  }

  state = { verificationCode: '' }

  handleOnChangeText = text => {
    this.setState({ verificationCode: text })
  }

  handleOnVerify = () => {
    // Verify the code and navigate to the Main screen.

    // TODO firebase stuff...

    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Verification</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleOnChangeText}
          value={this.state.verificationCode}
        />
        <Button title="VERIFY" onPress={this.handleOnVerify} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1
  }
})

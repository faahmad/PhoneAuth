import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class PhoneInput extends React.Component {
  static navigationOptions = {
    title: 'Enter Your Phone Number'
  }

  state = { countryCode: '+1', phoneNumber: '' }

  handleOnChangeText = text => {
    this.setState({ phoneNumber: text })
  }

  handleOnSubmit = () => {
    // Send the phone number to firebase and navigate to the Verification screen.

    // TODO firebase stuff...

    this.props.navigation.navigate('Verification')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>PhoneInput</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleOnChangeText}
          value={this.state.phoneNumber}
        />
        <Button title="NEXT" onPress={this.handleOnSubmit} />
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

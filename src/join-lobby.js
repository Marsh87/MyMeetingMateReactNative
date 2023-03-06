import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';
import Store from './store';
import { TextInput } from 'react-native-gesture-handler';

export default class JoinLobbyScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin: ''
    };
  }

  static navigationOptions = {
    title: 'Join Lobby',
  };

  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const pin = this.state.pin;
    if (pin) {
      let meeting = Store.GetMeeting(pin);
      Store.setCurrentMeeting(meeting);
      if (meeting) {
        navigate('ViewLobby');
      }
      else{
        this.showJoinLobbyErrorAlert()
      }
    }
  };

  showJoinLobbyErrorAlert() {
    Alert.alert(
      'No Lobby',
      'Lobby does not exist',
      [
        {
          text: 'Close',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter PIN"
          onChangeText={(pin) => this.setState({pin})}
          value={this.state.pin}
        />
        <Button title="Join" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

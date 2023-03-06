import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Store from './store';
import {TextInput} from 'react-native-gesture-handler';

export default class CreateLobbyScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meetingName: '',
    };
  }

  static navigationOptions = {
    title: 'Create Lobby',
  };

  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const meetingName = this.state.meetingName;
    if (meetingName) {
      let pin = Math.floor(Math.random() * 90000) + 10000;
      lobbyDto = {
        MeetingName: meetingName,
        Date: new Date(),
        PIN: pin,
      };
      Store.createLobby(lobbyDto);
      Store.setCurrentMeeting(lobbyDto);
      navigate('ViewLobby');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter Meeting Name"
          onChangeText={meetingName => this.setState({meetingName})}
          value={this.state.meetingName}
        />
        <Button title="Create" onPress={this.handleSubmit} />
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

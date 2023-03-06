import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Store from './store';
import {Button} from 'react-native-elements';

export default class LobbyScreen extends React.Component {
  static navigationOptions = {
    title: 'Lobby',
  };

  componentDidMount() {
    this.setState({meetingDetails: Store.getCurrentLobby()});    
  }

  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    navigate('AddNote');
  };

  state = {
    meetingDetails: {
      MeetingName: '',
      Date: new Date(),
      PIN: 0,
    },
    notes: [],
  };

  render() {
    console.log('THESE ARE NOTES', this.state.notes);
    this.state.notes = Store.getNotes(this.state.meetingDetails.PIN);
    return (
      <View>
        <Text style={styles.lineStyle}>
          <Text> Meeting Name: {this.state.meetingDetails.MeetingName}</Text>
          <Text>{'\n'}</Text>
          <Text> Date: {this.state.meetingDetails.Date.toString()}</Text>
          <Text>{'\n'}</Text>
          <Text> PIN: {this.state.meetingDetails.PIN}</Text>
        </Text>
        {this.state.notes.map((note, key) => (
          <Text key={key} style={styles.card}>
            {' '}
            {note.UserFirstName}
            <Text>{'\n'}</Text>
            {note.Message}{' '}
          </Text>
        ))}
        <Text>{'\n'}</Text>
        <Button title="Add Note" onPress={this.handleSubmit} />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#42dbe3',
    width: 500,
    height: 100,
    padding: 10,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  },
});

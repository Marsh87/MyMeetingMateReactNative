import React from 'react';
import {View, StyleSheet, Button } from 'react-native';
import Store from './store';
import { TextInput } from 'react-native-gesture-handler';

export default class AddNoteScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: ''
    };
  }
  
  static navigationOptions = {
    title: 'Add Note',
  };


  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const currentLobby = Store.getCurrentLobby();
    const pin = currentLobby.PIN;
    const note = this.state.note;
    const currentUser = Store.getCurrentUser();
    if (note) {
      noteDto = {
        Message: note,
        PIN: pin,
        UserFirstName:currentUser.firstName
      };
      Store.createNote(noteDto);
      navigate('ViewLobby',{dummy:"something"});
    }
  };

  render() {
    return (
      <View style={styles.container}>
         <TextInput
          style={{height: 40}}
          placeholder="Enter Note"
          onChangeText={(note) => this.setState({note})}
          value={this.state.note}
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

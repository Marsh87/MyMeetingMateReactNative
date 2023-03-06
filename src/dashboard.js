import React from 'react';
import {View, Text, Button} from 'react-native';
import Store from './store';

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerLeft: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>{'\n'}</Text>
        <Button title="Create Lobby" onPress={() => navigate('CreateLobby')} />
        <Text>{'\n'}</Text>
        <Button title="Join Lobby" onPress={() => navigate('JoinLobby')} />
        <Text>{'\n'}</Text>
        {/* <Button
          title="View Meeting History"
          onPress={() => navigate('MeetingHistory')}
        /> */}
        {/* <Text>{'\n'}</Text> */}
        <Button
          title="Logout"
          onPress={() => {
            Store.logout();
            navigate('Login');
          }}
        />
      </View>
    );
  }
}

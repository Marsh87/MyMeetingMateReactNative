import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DashboardScreen from './src/dashboard';
import ProfileScreen from './src/profile-screen';
import RegisterScreen from './src/register';
import LoginScreen from './src/login';
import firebase from '@react-native-firebase/app';
import CreateLobbyScreen from './src/create-lobby';
import LobbyScreen from './src/view-lobby';
import JoinLobbyScreen from './src/join-lobby';
import AddNoteScreen from './src/create-meeting-note';

// const androidConfig = {
//   clientId:
//     '629878960347-fk8euac6r9a1qtfrces6ki6fbmo7sss9.apps.googleusercontent.com',
//   appId: '1:629878960347:android:19b56251278f7bfced5cfe',
//   apiKey: 'AIzaSyBqX0XtpglyQo44hCjCXrdk2nie8Lz1EOU',
//   databaseURL: 'https://meeting-mate-8a2f8.firebaseio.com',
//   storageBucket: 'meeting-mate-8a2f8.appspot.com',
//   messagingSenderId: '629878960347',
//   projectId: 'meeting-mate-8a2f8',

//   // enable persistence by adding the below flag
//   persistence: true,
// };

// if (firebase.apps && firebase.apps.length === 0) {
//   firebase.initializeApp(androidConfig);
// }

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Dashboard: { screen: DashboardScreen },
  Profile: { screen: ProfileScreen },
  Register: { screen: RegisterScreen },
  CreateLobby: { screen: CreateLobbyScreen },
  ViewLobby: {screen:LobbyScreen},
  JoinLobby:{screen:JoinLobbyScreen},
  AddNote: {screen: AddNoteScreen}
});

const App = createAppContainer(MainNavigator);

export default App;

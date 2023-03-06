import React from 'react';
import {View, StyleSheet, Button, Text, Alert} from 'react-native';
import t from 'tcomb-form-native';
import Store from './store';
const Form = t.form.Form;

const Login = t.struct({
  Email: t.String,
  Password: t.String
});
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  
  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const userCredentials = this._form.getValue();
    if (userCredentials) {
      if (
        Store.authenticateUser(
          userCredentials.Email,
          userCredentials.Password,
        )
      )
        navigate('Dashboard');
      else {
        this.showLoginErrorAlert();
      }
    }
  };

  showLoginErrorAlert() {
    Alert.alert(
      'Login Failed',
      'Invalid username or password',
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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={Login} />
        <Button title="Login" onPress={this.handleSubmit} />
        <Text>{'\n'}Don't have an account? Register below.</Text>
        <Button title="Register" onPress={() => navigate('Register')} />
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

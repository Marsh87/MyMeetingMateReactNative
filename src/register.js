import t from 'tcomb-form-native';
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Store from './store';


const Form = t.form.Form;

const User = t.struct({
  FirstName: t.String,
  LastName: t.String,
  Email: t.String,
  Username: t.String,
  Password: t.String,
});

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };

  handleSubmit = async () => {
    const {navigate} = this.props.navigation;
    const user = this._form.getValue();
    // do the things
    if (user) {
       Store.registerUser(user);
      navigate('Dashboard');
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Form ref={c => (this._form = c)} type={User} options={options} />
        <Button title="Register" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const options = {
  fields: {
    FirstName: {
      error: 'First Name is required',
    },
    LastName: {
      error: 'Last Name is required',
    },
    Email: {
      error: 'Email Address is required',
    },
    Username: {
      error: 'Username is required',
    },
    Password: {
      error: 'Password is required',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

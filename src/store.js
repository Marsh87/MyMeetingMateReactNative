export default class Store {
  currentUser = {};
  lobbies = [];
  notes = [];
  users = [];
  _currentLobby = {};

  static registerUser(user) {
    if (!this.user) {
      this.users = [];
    }
    this.users.push(user);
    this.currentUser = user;
  }

  // static async _register(user) {
  //   try {
  //     const createdUserCredentials = await auth().createUserWithEmailAndPassword(
  //       user.Email,
  //       user.Password,
  //     );
  //     const userId = createdUserCredentials.user.uid;

  //     await firestore()
  //       .collection('users')
  //       .doc(userId)
  //       .set({
  //         username: user.Username,
  //         userId,
  //         firstName: user.FirstName,
  //         lastName: user.LastName,
  //       });
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // }

  static authenticateUser(email, password) {
    //This for testing purposes only
    // if (email == null) return true;

    // try {
    //   const userCredentials = await auth().signInWithEmailAndPassword(
    //     email,
    //     password,
    //   );
    //   const user = await firestore()
    //     .collection('users')
    //     .doc(userCredentials.user.uid)
    //     .get();

    //   this.currentUser = user.data();
    //   console.log('this.currentUser', this.currentUser);

    //   return true;
    // } catch (e) {
    //   return false;
    // }
    if (!this.users) {
      return false;
    }
    if (this.users.find(x => x.Username === email && x.Password === password)) {
      return true;
    }
    return false;
  }

  static createLobby(lobbies) {
    if (!this.lobbies) {
      this.lobbies = [];
    }
    this.lobbies.push(lobbies);
  }

  static GetMeeting(pin) {
    if (!pin || !this.lobbies) {
      return;
    }
    let retrievedlobbies = this.lobbies.find(x => x.PIN == pin);
    return retrievedlobbies;
  }

  static getCurrentLobby() {
    return this._currentLobby;
  }

  static setCurrentMeeting(meeting) {
    this._currentLobby = meeting;
  }

  static createNote(note) {
    if (!note) {
      return;
    }
    if (!this.notes) {
      this.notes = [];
    }

    this.notes.push(note);
  }

  static logout() {
    this.currentUser = null;
  }

  static getNotes(pin) {
    console.log('PIN', pin);
    if (this.notes) {
      let x = this.notes.filter(x => x.PIN == pin);
      console.log('JBDFJHBSFDBSFD', x);
      return x;
    }
    return [];
  }

  static getCurrentUser() {
    if (!this.currentUser) {
      return {};
    }
    return this.currentUser;
  }
}

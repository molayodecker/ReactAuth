//import react libraries
import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm  from './components/LoginForm';


//Create component
class App extends Component{
 componentsWillMount(){
	  firebase.initializeApp({
	    apiKey: "AIzaSyA8M-FS6LgrQW6G6J31C4tTTqs913COLeg",
	    authDomain: "authentication-30224.firebaseapp.com",
	    databaseURL: "https://authentication-30224.firebaseio.com",
	    projectId: "authentication-30224",
	    storageBucket: "authentication-30224.appspot.com",
	    messagingSenderId: "439107377584"
	  });
 }

	render() {
		return(
			<View>
			<Header headerText = "Authentication" />
			<LoginForm />
			</View>
		);
	}
}

//export component
export default App;

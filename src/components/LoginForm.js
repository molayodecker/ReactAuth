import React, {Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {Card, Button, CardSection, Input, Spinner} from './common';


class LoginForm extends Component{

state = { email : '', password: '', error: '', loading: false };

onButtonPressed(){
     
      this.setState({error: '', loading: true});

		const { email , password } = this.state;
 		firebase.auth().signInWithEmailAndPassword(email, password)
 		.then(this.onLoginSucess.bind(this))
 		.catch(()=>{
 			firebase.auth().createUserWithEmailAndPassword(email,password)
 			 .then(this.onLoginSucess.bind(this))
 			 .catch(this.onLoginFail.bind(this));
 		});
}

renderButton(){
	if(this.state.loading){
      return <Spinner size="small" />;
	}

	return(
       <Button onPress = { this.onButtonPressed.bind(this) }>
			  Log in
	  </Button>
	);
}

onLoginSucess(){
		this.setState({ 
		 email: '',
		 password: '',
		 loading: false,
		 error: '',
		});
}

onLoginFail(){
  this.setState({ error: 'Authentication Failed.', loading: false});
}

	render(){
		return(
			<Card>
			<CardSection>
			<Input
			placeholder = "user@gmail.com"
			label = "Email" 
			value={this.state.email}
			onChangeText = {email => {this.setState({ email })}}
			style={{ height:20, width: 100}} 
			/>
			</CardSection>

			<CardSection>
			<Input
			 secureTextEntry
			 placeholder = "Password"
			 label = "Password"
			 value = {this.state.password}
			 onChangeText = {password => { this.setState({ password })}}
			 />
			</CardSection>

			<Text style ={ styles.errorTextStyle }>
			{this.state.error}
			</Text>

			<CardSection>
			 {this.renderButton()}
			</CardSection>
			</Card>
			);
	}
}

const styles = {
	errorTextStyle : {
		fontSize: 20,
		alignSelf : 'center',
		color : 'red'
	}
};

export default LoginForm;
import React, {Component} from 'react';
import {Card, Button, CardSection, Input} from './common'
class LoginForm extends Component{

state = {texr: ''};

	render(){
		return(
			<Card>
			<CardSection>
			<Input
			label = "Email" 
			value={this.state.text}
			onChangeText = {text => {this.setState({ text })}}
			style={{ height:20, width: 100}} 
			/>
			</CardSection>
			<CardSection />
			<CardSection >
			<Button>
			  Log in
			</Button>
			</CardSection>
			</Card>
			);
	}
}

export default LoginForm;
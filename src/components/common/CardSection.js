//IMPORT REACT LIBRARIES
import React from 'react';
import { View } from 'react-native';

//CREATE THE COMPONENT
const CardSection = (props) => {
   return (
   			<View style={styles.containerStyle}> 
            {props.children}
   			</View>
   	);
};

const styles = {
	containerStyle: {
	  borderBottomWidth: 1,
	  padding: 5,
	  backgroundColor: '#fff',
	  justifyContent: 'flex-start',
	  flexDirection: 'row',
	  borderColor: '#ddd',
	  position: 'relative'
	}
};

//DISPLAY THE COMPONENT
export { CardSection };

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from "./styles";

const Button = (props) => {
	return (
		<View style={styles.wrapper}>

			<TouchableOpacity style={[styles.container, {backgroundColor: props.backgroundColor}]}
							  onPress={props.onPress}>

				<Text style={[styles.text, {color: props.color}]}>
					{props.text}
				</Text>

			</TouchableOpacity>

		</View>
	);
};

export default Button
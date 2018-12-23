import React from 'react';
import {TextInput} from 'react-native';
import styles from "./styles";

const InputText = (props) => {
	return (
		<TextInput
			value={props.value}
			onChangeText={props.onChange}
			selectionColor={props.color}
			placeholder={props.placeholder}
			editable={props.editable}
			secureTextEntry={props.secureTextEntry}
			style={[
				props.style,
				styles.input,
				{
					color: props.color,
					borderColor: props.borderColor
				}
			]}>
		</TextInput>
	);
};

export default InputText
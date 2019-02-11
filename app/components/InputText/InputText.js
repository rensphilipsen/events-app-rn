import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const InputText = ({value, onChange, color, placeholder, editable, secureTextEntry, style, borderColor}) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            selectionColor={color}
            placeholder={placeholder}
            editable={editable}
            secureTextEntry={secureTextEntry}
            style={[
                style,
                styles.input,
                {
                    color: color,
                    borderColor: borderColor
                }
            ]}>
        </TextInput>
    );
};

export default InputText
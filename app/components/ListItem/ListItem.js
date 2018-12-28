import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Icon} from "react-native-elements";
import {COLOR} from "../../styles/theme";

const ListItem = (props) => {
	return (
		<TouchableOpacity style={styles.item} onPress={props.onPress}>
			<Icon name={props.icon} color={COLOR.PRIMARY}/>
			<View style={props.contentStyle}>
				{props.children}
			</View>
		</TouchableOpacity>
	);
};

export default ListItem
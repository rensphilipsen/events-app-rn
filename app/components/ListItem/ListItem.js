import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Icon} from "react-native-elements";
import {COLOR} from "../../styles/theme";

const ListItem = (props) => {
	return (
		<View style={styles.item}>
			<Icon name={props.icon} color={COLOR.PRIMARY}/>
			<View style={props.contentStyle}>
				{props.children}
			</View>
		</View>
	);
};

export default ListItem
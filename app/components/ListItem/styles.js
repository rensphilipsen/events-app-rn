import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from "../../styles/theme";

export default StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		margin: 5,
		padding: 15,
		backgroundColor: COLOR_WHITE,
		shadowColor: '#484848',
		shadowRadius: 5,
		shadowOpacity: 0.1,
		borderRadius: 5,
		shadowOffset: {height: 5}
	}
});
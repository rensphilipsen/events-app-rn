import {StyleSheet} from 'react-native';
import {COLOR, FONT} from "../../styles/theme";

export default StyleSheet.create({
	wrapper: {
		width: '80%'
	},
	container: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginVertical: 5,
		shadowColor: COLOR.SHADOW,
		shadowRadius: 5,
		shadowOpacity: 0.2,
		shadowOffset: {height: 5},
	},
	text: {
		fontFamily: FONT.BOLD,
		fontSize: 20,
		textTransform: 'uppercase'
	}
});
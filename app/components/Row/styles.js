import {StyleSheet} from 'react-native';
import {COLOR} from "../../styles/theme";

export default StyleSheet.create({
	row: {
		borderRadius: 10,
		margin: 10,
		backgroundColor: COLOR.WHITE,
		shadowColor: COLOR.SHADOW,
		shadowRadius: 5,
		shadowOpacity: 0.2,
	},
	imageWrapper: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	image: {
		overflow: 'hidden',
		height: 200,
		width: '100%'
	},
	smallText: {
		fontSize: 10
	}
});
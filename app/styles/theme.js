import {StyleSheet} from 'react-native';

// COLORS
export const COLOR = {
	PRIMARY: '#5e5e82',
	PRIMARY_DARKER: '#4a4a67',
	SECONDARY: '#1dd1a1',
	WHITE: '#ffffff',
	WHITE_DARKER: '#f0f3f8',
	SHADOW: '#484848',
	BLACK: '#000000',
};

// FONTS
export const FONT = {
	BOLD: 'RobotoCondensed-Bold',
	REGULAR: 'RobotoCondensed-Regular'
};

export default StyleSheet.create({
	introWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLOR.PRIMARY
	}
});
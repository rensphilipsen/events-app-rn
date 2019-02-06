import { StyleSheet } from 'react-native';

// COLORS
export const COLOR = {
    PRIMARY: '#5e5e82',
    PRIMARY_DARKER: '#4a4a67',
    SECONDARY: '#1dd1a1',
    WHITE: '#ffffff',
    WHITE_DARKER: '#f0f3f8',
    WHITE_DARKEST: '#b8bbbf',
    SHADOW: '#484848',
    BLACK: '#000000',
    BLUE: '#3498db'
};

// FONTS
export const FONT = {
    BOLD: 'RobotoCondensed-Bold',
    REGULAR: 'RobotoCondensed-Regular'
};

export default StyleSheet.create({
    shadow: {
        shadowColor: COLOR.SHADOW,
        shadowRadius: 5,
        shadowOpacity: 0.1,
        shadowOffset: {height: 5}
    },
    introWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.PRIMARY
    },
    eventDetailImage: {
        width: 120,
        height: 120,
        ...this.shadow
    },
    galleryCloseButtonWrapper: {
        alignSelf: 'flex-end',
        padding: 20,
        top: 15,
        right: 8,
        zIndex: 9999,
        position: 'absolute'
    },
    tweetDate: {
        textAlign: 'right',
        color: COLOR.WHITE_DARKEST
    },
    tweetUserImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    tweetUserName: {
        color: COLOR.WHITE_DARKEST
    },
    addGalleryWrapper: {
        backgroundColor: COLOR.WHITE_DARKER,
        justifyContent: 'center',
    },
    addGalleryIcon: {
        alignSelf: 'center',
    },
});
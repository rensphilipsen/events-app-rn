import { Dimensions, StyleSheet } from 'react-native';
import { Header } from 'react-navigation';
import { COLOR, FONT } from '../../styles/theme';

export const MIN_HEIGHT = Header.HEIGHT;
export const MAX_HEIGHT = 250;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    name: {
        fontFamily: FONT.BOLD
    },
    section: {
        padding: 20,
        borderBottomWidth: 0,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: FONT.BOLD
    },
    sectionContent: {
        fontSize: 16,
        textAlign: 'justify',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: COLOR.WHITE,
        fontSize: 26,
        fontFamily: FONT.BOLD
    },
    imageSubTitle: {
        color: COLOR.WHITE,
        backgroundColor: 'transparent',
        marginTop: 4,
        fontSize: 20,
        fontFamily: FONT.REGULAR
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: COLOR.WHITE,
        fontSize: 18,
        backgroundColor: 'transparent',
        fontFamily: FONT.BOLD
    },
    sectionLarge: {
        height: 600,
        backgroundColor: COLOR.BLACK
    },
    badgeWrapper: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 5,
    },
    badgeText: {
        fontFamily: FONT.BOLD,
        color: COLOR.WHITE,
        fontSize: 12,
        textTransform: 'uppercase'
    }
});
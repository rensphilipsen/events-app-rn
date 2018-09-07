import {Dimensions, StyleSheet} from 'react-native';
import {Header} from "react-navigation";

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
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Bold'
    },
    section: {
        padding: 20,
        borderBottomWidth: 0,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Bold'
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
        color: 'white',
        fontSize: 26,
        fontFamily: 'RobotoCondensed-Bold'
    },
    imageSubTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        marginTop: 4,
        fontSize: 20,
        fontFamily: 'RobotoCondensed-Regular'
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
        fontFamily: 'RobotoCondensed-Bold'
    },
    sectionLarge: {
        height: 600,
        backgroundColor: 'black'
    },
});
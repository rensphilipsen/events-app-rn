import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../styles/theme';

export default StyleSheet.create({
    view: {
        width: '100%',
        backgroundColor: COLOR.PRIMARY,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    },
    personWrapper: {
        marginHorizontal: 10,
        marginVertical: 15,
        alignItems: 'center',
        maxWidth: 70
    },
    personImage: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    personName: {
        marginTop: 5,
        color: COLOR.WHITE,
        fontFamily: FONT.BOLD
    }
});
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../styles/theme';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR.WHITE,
        flex: 2,
        flexDirection: 'column',
    },
    item: {
        flexDirection: 'row'
    },
    when: {
        backgroundColor: COLOR.PRIMARY,
        color: COLOR.WHITE,
        fontFamily: FONT.REGULAR,
        fontSize: 20,
        padding: 25,
        width: '30%'
    },
    what: {
        color: COLOR.PRIMARY,
        fontFamily: FONT.REGULAR,
        fontSize: 20,
        padding: 20,
        width: '65%'
    }
});
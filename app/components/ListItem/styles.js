import { StyleSheet } from 'react-native';
import { COLOR } from '../../styles/theme';

export default StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 15,
        backgroundColor: COLOR.WHITE,
        shadowColor: COLOR.SHADOW,
        shadowRadius: 5,
        shadowOpacity: 0.1,
        borderRadius: 5,
        shadowOffset: {height: 5}
    },
    icon: {
        marginTop: 15
    }
});
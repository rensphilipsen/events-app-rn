import { StyleSheet } from 'react-native';
import theme, { COLOR } from '../../styles/theme';

export default StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        padding: 15,
        backgroundColor: COLOR.WHITE,
        borderRadius: 15,
        ...theme.shadow
    },
    icon: {
        marginTop: 15
    }
});
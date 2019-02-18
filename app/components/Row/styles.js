import { StyleSheet } from 'react-native';
import theme, { COLOR } from '../../styles/theme';

export default StyleSheet.create({
    row: {
        borderRadius: 15,
        margin: 10,
        backgroundColor: COLOR.WHITE,
        ...theme.shadow
    },
    imageWrapper: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
import { StyleSheet } from 'react-native';
import { COLOR } from '../../styles/theme';

export default StyleSheet.create({
    view: {
        width: '100%',
        backgroundColor: COLOR.PRIMARY,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    },
    person: {
        width: 65,
        height: 65,
        borderRadius: 35,
        marginHorizontal: 7,
        marginVertical: 15
    }
});
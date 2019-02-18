import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements'
import { COLOR } from '../../styles/theme';

const ListItem = ({onPress, disabled, contentStyle, children, icon}) => {
    return (
        <TouchableOpacity style={styles.item}
                          onPress={onPress}
                          disabled={!!disabled}>

            <Icon size={30}
                  name={icon}
                  style={styles.icon}
                  color={COLOR.PRIMARY}/>

            <View style={contentStyle}>
                {children}
            </View>

        </TouchableOpacity>
    );
};

export default ListItem
import React from 'react';
import Spinner from "react-native-loading-spinner-overlay";
import {View} from "react-native";
import styles from './styles';

const Loader = (props) => {
	return (
		<View>
			<Spinner
				overlayColor={'rgba(0,0,0,0.5)'}
				visible={props.visible}
				textStyle={styles.spinner}
				textContent={'Een ogenblik geduld...'}
			/>
		</View>
	);
};

export default Loader
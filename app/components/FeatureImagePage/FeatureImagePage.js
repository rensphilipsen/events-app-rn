import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles, { MAX_HEIGHT, MIN_HEIGHT } from './styles';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import PeopleAttending from '../PeopleAttending/PeopleAttending';

const FeatureImagePage = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <HeaderImageScrollView
                scrollViewBackgroundColor={'#f0f3f8'}
                maxHeight={MAX_HEIGHT}
                minHeight={MIN_HEIGHT}
                maxOverlayOpacity={0.6}
                minOverlayOpacity={0.3}
                fadeOutForeground
                headerImage={props.image}
                renderFixedForeground={() => (
                    <Animatable.View
                        style={styles.navTitleView}
                        ref={navTitleView => {
                            this.navTitleView = navTitleView;
                        }}>
                        <Text style={styles.navTitle}>
                            {props.title}
                        </Text>
                    </Animatable.View>
                )}
                renderForeground={() => (
                    <View style={styles.titleContainer}>
                        <Text style={styles.imageTitle}>
                            {props.title}
                        </Text>
                        <Text style={styles.imageSubTitle}>
                            {props.date}
                        </Text>
                    </View>
                )}>
                <TriggeringView
                    onHide={() => this.navTitleView.fadeInUp(200)}
                    onDisplay={() => this.navTitleView.fadeOut(100)}>
                    <PeopleAttending/>
                </TriggeringView>
                {props.children}
            </HeaderImageScrollView>
        </View>
    );
};

export default FeatureImagePage
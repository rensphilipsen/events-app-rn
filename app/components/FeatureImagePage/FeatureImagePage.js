import React, { PureComponent } from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles, { MAX_HEIGHT, MIN_HEIGHT } from './styles';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import * as Animatable from 'react-native-animatable';
import { COLOR } from '../../styles/theme';
import { getDate, getUrl } from '../../utils/Helpers';
import Loader from '../Loader/Loader';

class FeatureImagePage extends PureComponent {

    event;

    /**
     * Get the appropiate feature image
     *
     * @returns {{uri: *}}
     */
    getFeatureImage() {
        const medias = this.event['medias'].data;

        return medias.length >= 1 ?
            {uri: getUrl(medias[0].path)} :
            require('../../../assets/placeholder.png')
    }

    /**
     * Render the appropiate badge
     *
     * @returns {*}
     */
    renderBadge() {
        return (
            <View
                style={[styles.badgeWrapper, {
                    backgroundColor:
                        this.event.type === 'event' ?
                            COLOR.SECONDARY :
                            COLOR.BLUE
                }
                ]}>
                <Text style={styles.badgeText}>
                    {this.event.type}
                </Text>
            </View>
        );
    }

    /**
     * Renders the fixed foreground (this should be the header when scrolling down)
     *
     * @returns {*}
     */
    renderFixedForeground = () => (
        <Animatable.View
            style={styles.navTitleView}
            ref={navTitleView => {
                this.navTitleView = navTitleView;
            }}>
            <Text style={styles.navTitle}>
                {this.event.title}
            </Text>
        </Animatable.View>
    );

    /**
     * Render the foreground of the
     *
     * @returns {*}
     */
    renderForeground = () => (
        <View style={styles.titleContainer}>
            {this.renderBadge()}
            <Text style={styles.imageTitle}>{this.event.title}</Text>
            <Text style={styles.imageSubTitle}>{getDate(this.event)}</Text>
        </View>
    );

    /**
     * Renders all the main content inside the header image view
     *
     * @param children
     * @returns {*}
     */
    renderContent(children) {
        return (
            <View>
                <TriggeringView
                    onHide={() => this.navTitleView.fadeInUp(200)}
                    onDisplay={() => this.navTitleView.fadeOut(100)}>
                    <View/>
                </TriggeringView>

                {children}
            </View>
        );
    }

    /**
     * The render method
     *
     * @returns {*}
     */
    render() {
        this.event = this.props.event;

        return (
            <View style={styles.container}>

                <Loader visible={this.props.eventsLoading}/>

                <StatusBar barStyle="light-content"/>

                <HeaderImageScrollView
                    scrollViewBackgroundColor={COLOR.WHITE_DARKER}
                    maxHeight={MAX_HEIGHT}
                    minHeight={MIN_HEIGHT}
                    maxOverlayOpacity={0.6}
                    minOverlayOpacity={0.3}
                    fadeOutForeground
                    headerImage={this.getFeatureImage()}
                    renderFixedForeground={this.renderFixedForeground}
                    renderForeground={this.renderForeground}>


                    {this.renderContent(this.props.children)}

                </HeaderImageScrollView>
            </View>
        );
    }
}

export default FeatureImagePage
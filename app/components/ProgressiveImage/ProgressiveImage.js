import React, { PureComponent } from 'react';
import { Animated, View } from 'react-native';
import styles from './styles';

class ProgressiveImage extends PureComponent {
    thumbnailAnimated = new Animated.Value(0);

    imageAnimated = new Animated.Value(0);

    handleThumbnailLoad = () => {
        Animated.timing(this.thumbnailAnimated, {
            toValue: 1,
        }).start();
    };

    onImageLoad = () => {
        Animated.timing(this.imageAnimated, {
            toValue: 1,
        }).start();
    };

    render() {
        const {
            thumbnailSource,
            source,
            style,
            ...props
        } = this.props;

        return (
            <View style={styles.container}>
                <Animated.Image
                    {...props}
                    source={thumbnailSource}
                    style={[style, {opacity: this.thumbnailAnimated}]}
                    onLoad={this.handleThumbnailLoad}
                    blurRadius={1}
                />
                <Animated.Image
                    {...props}
                    source={source}
                    style={[styles.imageOverlay, {opacity: this.imageAnimated}, style]}
                    onLoad={this.onImageLoad}
                />
            </View>
        );
    }
}

export default ProgressiveImage;
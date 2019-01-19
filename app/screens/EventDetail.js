import React, { PureComponent } from 'react';
import { getAllEvents, setEventRoomId } from '../actions/events';
import FeatureImagePage from '../components/FeatureImagePage/FeatureImagePage';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ListItem from '../components/ListItem/ListItem';
import theme from '../styles/theme';
import connect from 'react-redux/es/connect/connect';
import ListItemText from '../components/ListItemText/ListItemText';
import moment from 'moment';
import { getUrl } from '../index';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import call from 'react-native-phone-call';

class EventDetail extends PureComponent {

    /**
     * Component specific navigationOptions
     *
     * @type {{header: null}}
     */
    static navigationOptions = {
        header: null
    };

    event;
    navigate;

    /**
     * Fields that should be rendered
     *
     * @type {*[]}
     */
    defaultFields = [
        {
            icon: 'phone',
            value: 'contact_phone',
            template: 'Telefonisch contact: {value}',
            onPress: () => call({number: this.getMeta('contact_phone')})
        },
        {
            icon: 'info',
            value: 'description',
            onPress: () => this.navigateDetail('description')
        },
        {
            icon: 'account-balance-wallet',
            value: 'entrance_fee',
            template: 'Entree voor dit event: {value}',
            disabled: true
        },
    ];

    /**
     * Constructor
     */
    constructor() {
        super();
        this.state = {showNavTitle: false, showGalleryViewer: false};
    }

    /**
     * When component is  mounted
     */
    componentDidMount() {
        this.props.getAllEvents();
    }

    /**
     * When component has updated
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
        if (!this.props.eventsLoading) {
            this.setRoomId();
        }
    }

    /**
     * Navigate to a detail page
     *
     * @param meta
     */
    navigateDetail(meta) {
        this.navigate('ListItemDetail', {data: this.getMeta(meta)})
    };

    /**
     * Get a meta value by key regarding the specific event
     *
     * @param key
     * @returns {*}
     */
    getMeta(key) {
        const metas = this.event['metas'].data;
        return metas.find((meta) => meta.key === key).value;
    }

    /**
     * Set the room Id which is used for the chat to interact with the correct room
     */
    setRoomId() {
        this.props.setEventRoomId(this.getMeta('chatkit_room_id'));
    }

    /**
     * Get the appropiate feature image
     *
     * @returns {{uri: *}}
     */
    getFeatureImage() {
        const medias = this.event['medias'].data;

        return medias.length >= 1 ?
            {uri: getUrl(medias[0].path)} :
            require('../../assets/placeholder.png')
    }

    /**
     * Render the gallery with all the items
     *
     * @returns {*}
     */
    renderGallery() {
        const items = [];
        const medias = this.event['medias'].data;

        medias.forEach((item) => {
            items.push(this.renderGalleryItem(item));
        });

        if (medias.length >= 1)
            return (
                <View>
                    <ListItem contentStyle={{flex: 1, flexDirection: 'row'}} disabled={true}>
                        <ScrollView horizontal={true}>
                            {items}
                        </ScrollView>
                    </ListItem>
                    {this.renderGalleryViewer(medias)}
                </View>
            );
    }

    /**
     * Render a single gallery item
     *
     * @param item
     * @returns {*}
     */
    renderGalleryItem(item) {
        return (
            <TouchableOpacity key={item.id} onPress={() => this.toggleGallery()}>
                <FastImage style={theme.eventDetailImage} source={{
                    uri: getUrl(item.path),
                    priority: FastImage.priority.normal
                }}/>
            </TouchableOpacity>);
    }

    /**
     * Toggle the gallery view
     */
    toggleGallery() {
        this.setState({showGalleryViewer: !this.state.showGalleryViewer});
    }

    /**
     * Render the gallery view
     *
     * @param medias
     * @returns {*}
     */
    renderGalleryViewer(medias) {
        const imageUrls = medias.map((item) => {
            return {url: getUrl(item.path)}
        });

        return (
            <Modal visible={this.state.showGalleryViewer} transparent={false}>
                <ImageViewer imageUrls={imageUrls} renderHeader={() => (
                    <TouchableOpacity onPress={() => this.toggleGallery()} style={theme.galleryCloseButtonWrapper}>
                        <Icon size={24} name={'close'} color={'white'}/>
                    </TouchableOpacity>
                )}/>
            </Modal>);
    }

    /**
     * Render all the sub-events for this event (if they are available)
     *
     * @returns {*}
     */
    renderEvents() {
        const events = this.event.events.data;

        if (events.length >= 1) {
            const eventNames = events.map(event => event.title);

            return (
                <ListItem icon={'event'} onPress={() => this.navigate('EventList')} key={'events'}>
                    <ListItemText>
                        Binnenkort <Text style={{fontWeight: 'bold'}}>{eventNames.join(', ')}</Text> op programma.
                    </ListItemText>
                </ListItem>);
        }
    }

    /**
     * Render the date if it's available and/or applicable.
     *
     * @returns {*}
     */
    renderDate() {
        // Parse date
        const start = this.event.start_time ? moment(this.event.start_time) : null;
        const end = this.event.end_time ? moment(this.event.end_time) : null;

        // Condition checking
        if (start && end) return start.format('dd D MMM') + ' - ' + end.format('dd D MMM YYYY');
        else if (start) return start.format('dd D MMM YYYY');
        else return '';
    }

    /**
     * Render all other additional fields that should be rendered if they are available and/or applicable.
     *
     * @returns {Array}
     */
    renderAdditionalFields() {
        const fieldsToRender = [];
        const metas = this.event['metas'].data;

        metas.forEach((meta) => {
            // Check if meta is in default fields array and value is not empty..
            const field = this.defaultFields.find(field => field.value === meta.key && meta.value !== '');

            if (field)
                fieldsToRender.push(
                    <ListItem icon={field.icon} key={meta.key} onPress={field.onPress} disabled={field.disabled}>
                        <ListItemText numberOfLines={5}>{this.getAdditionalFieldValue(field, meta)}</ListItemText>
                    </ListItem>
                );
        });

        return fieldsToRender;
    }

    /**
     * Checks if there is a template available and if so, apply it.
     *
     * @param field
     * @param meta
     * @returns {*}
     */
    getAdditionalFieldValue(field, meta) {
        if (field.template)
            return field.template.replace(/\{(value)\}/g, meta.value);

        return meta.value;
    }

    /**
     * The main render method.
     *
     * @returns {*}
     */
    render() {
        const {navigation} = this.props;
        this.navigate = navigation.navigate;

        this.event = navigation.state.params ? navigation.state.params['event'] : this.props.event;

        // Show an empty view until the event is done loading
        if (this.event)
            return (
                <FeatureImagePage
                    image={this.getFeatureImage()}
                    title={this.event.title}
                    type={this.event.type}
                    date={this.renderDate()}>

                    {this.renderEvents()}

                    {this.renderAdditionalFields()}

                    {this.renderGallery()}

                </FeatureImagePage>);
        else
            return <View/>
    }
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 *
 * @param state
 * @returns {{event: *, eventsLoading: *}}
 */
const mapStateToProps = state => {
    return {
        event: state.events[0],
        eventsLoading: state.eventsIsLoading
    };
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{getAllEvents: getAllEvents, setEventRoomId: setEventRoomId}}
 */
const mapDispatchToProps = {
    getAllEvents,
    setEventRoomId
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)
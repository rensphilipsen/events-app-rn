import React, { PureComponent } from 'react';
import { addMediaToEvent, getAllEvents, setSelectedEvent } from '../actions/events';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ListItem from '../components/ListItem/ListItem';
import theme, { COLOR } from '../styles/theme';
import { getUrl } from '../utils/Helpers';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import call from 'react-native-phone-call';
import ImagePicker from 'react-native-image-picker';
import PeopleAttending from '../components/PeopleAttending/PeopleAttending';
import FeatureImagePage from '../components/FeatureImagePage/FeatureImagePage';
import { connect } from 'react-redux';
import ListItemText from '../components/ListItemText/ListItemText';
import styles from '../components/FeatureImagePage/styles';
import ProgressiveImage from '../components/ProgressiveImage/ProgressiveImage';

class EventDetail extends PureComponent {

    /**
     * Component specific navigationOptions
     *
     * @type {{header: null}}
     */
    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: COLOR.WHITE,
        headerStyle: {
            backgroundColor: 'transparent',
        }
    };

    /**
     * Selected event
     */
    event;

    /**
     * used to navigate to other screen
     */
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
            onPress: () => this.navigateDetail('description', 'Beschrijving')
        },
        {
            icon: 'local-offer',
            value: 'ticket',
            template: 'Klik hier voor uw ticket',
            onPress: () => this.navigateDetail('ticket', 'Ticket')
        },
        {
            icon: 'account-balance-wallet',
            value: 'entrance_fee',
            template: 'Entree voor dit event: {value}',
            disabled: true
        },
    ];

    otherFields = ['ticket'];

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

        if (this.event)
            this.props.setSelectedEvent(this.event)
    }

    /**
     * When component has updated
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps) {
        if (!this.props.eventsLoading)
            if (this.props.eventsErrored)
                this.navigate('Intro');

        if (this.event)
            this.props.setSelectedEvent(this.event)
    }

    /**
     * Navigate to a detail page
     *
     * @param meta
     * @param title
     */
    navigateDetail(meta, title) {
        const isTicket = (meta === 'ticket');
        const data = isTicket ? this.event.code : this.getMeta(meta);
        this.navigate('ListItemDetail', {isTicket: isTicket, data: data, title: title})
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

    renderPeopleAttending() {
        return (
            <PeopleAttending
                event={this.event}/>
        );
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

        return (
            <View>
                <ListItem contentStyle={{flex: 1, flexDirection: 'row'}} disabled={true}>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity onPress={() => this.addGalleryItem()}
                                          style={[theme.eventDetailImage, theme.addGalleryWrapper]}>
                            <Icon size={60} name={'add'} color={COLOR.PRIMARY} style={theme.addGalleryIcon}/>
                        </TouchableOpacity>
                        {items}
                    </ScrollView>
                </ListItem>
                {this.renderGalleryViewer(medias)}
            </View>
        );
    }

    /**
     * Add item to the gallery
     */
    addGalleryItem() {
        ImagePicker.showImagePicker({path: 'images'}, (response) => {
            if (!response.didCancel && !response.error)
                this.props.addMediaToEvent(this.event.id, response);
        });
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
                    uri: getUrl(item.thumb_path),
                    priority: FastImage.priority.normal
                }}/>
            </TouchableOpacity>
        );
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
            return {
                url: getUrl(item.path),
                props: {
                    thumb_url: getUrl(item.thumb_path)
                }
            }
        });

        return (
            <Modal visible={this.state.showGalleryViewer} transparent={false}>
                <ImageViewer
                    imageUrls={imageUrls}
                    renderImage={(props) => (
                        <ProgressiveImage
                            thumbnailSource={props.thumb_url}
                            source={props.source}
                            style={styles.image}/>
                    )}
                    renderHeader={() => (
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
     * Render all other additional fields that should be rendered if they are available and/or applicable.
     *
     * @returns {Array}
     */
    renderAdditionalFields() {
        const fieldsToRender = [];
        const metas = this.event['metas'].data;

        // Get all the meta fields
        metas.forEach((meta) => {
            // Check if meta is in default fields array and value is not empty..
            const field = this.defaultFields.find(field => field.value === meta.key && meta.value !== '');

            if (field)
                fieldsToRender.push(EventDetail.renderAdditionalField(field, meta));
        });

        // Get all the other fields
        this.otherFields.forEach((fieldValue) => {
            const field = this.defaultFields.find(field => field.value === fieldValue && this.event.type === 'event');

            if (field)
                fieldsToRender.push(EventDetail.renderAdditionalField(field));
        });

        return fieldsToRender;
    }

    static renderAdditionalField(field, meta) {
        return (
            <ListItem icon={field.icon}
                      key={field.value}
                      onPress={field.onPress}
                      disabled={field.disabled}>

                <ListItemText numberOfLines={5}>
                    {EventDetail.getAdditionalFieldValue(field, meta)}
                </ListItemText>

            </ListItem>);
    }

    /**
     * Checks if there is a template available and if so, apply it.
     *
     * @param field
     * @param meta
     * @returns {*}
     */
    static getAdditionalFieldValue(field, meta) {
        if (field.template && meta)
            return field.template.replace(/\{(value)\}/g, meta.value);
        else if (field.template)
            return field.template;

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

        // Check if event is set
        if (this.event)
            return (
                <FeatureImagePage event={this.event} eventsLoading={this.props.eventsLoading}>

                    {this.renderPeopleAttending()}
                    {this.renderEvents()}
                    {this.renderAdditionalFields()}
                    {this.renderGallery()}

                </FeatureImagePage>
            );
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
        eventsErrored: state.eventsHasErrored,
        eventsLoading: state.eventsIsLoading
    };
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{getAllEvents: getAllEvents}}
 */
const mapDispatchToProps = {
    getAllEvents,
    addMediaToEvent,
    setSelectedEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail)
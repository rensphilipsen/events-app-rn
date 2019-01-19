import React, { PureComponent } from 'react';
import Config from 'react-native-config';
import axios from 'axios';
import Base64 from '../utils/Base64';
import Container from '../components/Container/Container';
import ListItem from '../components/ListItem/ListItem';
import ListItemText from '../components/ListItemText/ListItemText';
import { ScrollView, View } from 'react-native';
import theme from '../styles/theme';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import connect from 'react-redux/es/connect/connect';

class Timeline extends PureComponent {

    /**
     * Create a axios instance with pre-defined settings
     *
     * @type {AxiosInstance}
     */
    client = axios.create({
        baseURL: Config.TWITTER_API_URL,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    });

    /**
     * Twitter access token
     */
    accessToken;

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }

    /**
     * On component mouted.
     */
    componentDidMount() {
        this.getTweets(this.getMeta('twitter_search_query'));
    }

    /**
     * Get a meta value by key regarding the specific event
     *
     * @param key
     * @returns {*}
     */
    getMeta(key) {
        const metas = this.props.event['metas'].data;
        return metas.find((meta) => meta.key === key).value;
    }

    /**
     * Encode the consumer key and secret to a single base 64 string
     *
     * @returns {*|string}
     */
    encodeConsumerKeyAndSecretToSingleBase64() {
        const encodedConsumerKey = encodeURIComponent(Config.TWITTER_CONSUMER_KEY);
        const encodedConsumerSecret = encodeURIComponent(Config.TWITTER_CONSUMER_SECRET);

        const stringToBeBase64Encoded = encodedConsumerKey + ':' + encodedConsumerSecret;

        return Base64.btoa(stringToBeBase64Encoded);
    }

    /**
     * Set the auth headers of var client
     *
     * @param type
     * @param code
     */
    setAuthHeaders(type, code) {
        this.client.defaults.headers.common['Authorization'] = type + ' ' + code;
    }

    /**
     * Get an access token for the Twitter API
     *
     * @returns {AxiosPromise<any>}
     */
    obtainBearerToken() {
        this.setAuthHeaders('Basic', this.encodeConsumerKeyAndSecretToSingleBase64());
        return this.client.post('/oauth2/token?grant_type=client_credentials');
    }

    /**
     * Get all the tweets from the Twitter API based on query
     *
     * @param searchQuery
     */
    getTweets(searchQuery) {
        this.obtainBearerToken()
            .then((res) => {
                this.accessToken = res.data.access_token;
                this.setAuthHeaders('Bearer', this.accessToken);
                this.client.get('/1.1/search/tweets.json?q=' + searchQuery)
                    .then((res) => {
                        this.setState({tweets: res.data['statuses']})
                    });
            });
    }

    /**
     * Render all tweets if available
     *
     * @returns {Array}
     */
    renderTweets() {
        const tweets = [];

        if (this.state.tweets.length > 1)
            this.state.tweets.forEach((tweet) => {
                tweets.push(this.renderTweet(tweet));
            });

        return tweets;
    }

    /**
     * Render a single tweet
     *
     * @param tweet
     * @returns {*}
     */
    renderTweet(tweet) {
        return (
            <ListItem key={tweet.id} disabled={true}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <FastImage style={theme.tweetUserImage} source={{
                        uri: tweet.user['profile_image_url_https'],
                        priority: FastImage.priority.normal
                    }}/>
                    <ListItemText style={theme.tweetUserName}>
                        @{tweet.user.name}
                    </ListItemText>
                </View>
                <ListItemText>
                    {tweet.text}
                </ListItemText>
                <ListItemText style={theme.tweetDate}>
                    {moment(tweet.created_at).format('HH:mm D MMM YYYY')}
                </ListItemText>
            </ListItem>);
    }

    /**
     * The render method.
     *
     * @returns {*}
     */
    render() {
        return (
            <Container>
                <ScrollView>
                    {this.renderTweets()}
                </ScrollView>
            </Container>);
    }
}

/**
 * All the VALUES from the Redux store that should be available within the props of this component
 * @param state
 * @returns {{userLoading, activations: *, users: *}}
 */
const mapStateToProps = state => {
    return {
        event: state.events[0],
    };
};

/**
 * All the METHODS from the Redux store that should be available within the props of this component
 *
 * @type {{}}
 */
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
import Config from 'react-native-config';
import moment from 'moment';

/**
 * Generate an url from the API
 *
 * @param url
 * @returns {string}
 */
export function getUrl(url) {
    return Config.API_URL + '/' + url;
}

/**
 * Render the date if it's available and/or applicable.
 *
 * @returns {*}
 */
export function getDate(event) {
    // Parse date
    const start = event.start_time ? moment(event.start_time) : null;
    const end = event.end_time ? moment(event.end_time) : null;

    // Condition checking
    if (start && end) return start.format('dd D MMM') + ' - ' + end.format('dd D MMM YYYY');
    else if (start) return start.format('dd D MMM YYYY');
    else return '';
}


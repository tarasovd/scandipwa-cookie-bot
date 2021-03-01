import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showNotification } from 'Store/Notification/Notification.action';
import { fetchQuery } from 'Util/Request';
import { PropTypes } from 'prop-types';
import CookiebotQuery from '../query/Cookiebot.query';

import CookieConsent from './CookieNotice.component';

/** @namespace ScandiPWA/CookieBot/Component/CookieConsent/Container/mapStateToProps */
export const mapStateToProps = () => ({});

/** @namespace ScandiPWA/CookieBot/Component/CookieConsent/Container/mapDispatchToProps */
export const mapDispatchToProps = dispatch => ({
    showErrorNotification: message => dispatch(showNotification('error', message))
});

/** @namespace ScandiPWA/CookieBot/Component/CookieConsent/Container */
export class CookieConsentContainer extends PureComponent {
    static propTypes = {
        showErrorNotification: PropTypes.func.isRequired
    };

    state = {
        enabled: false,
        group_id: ''
    };

    componentDidMount() {
        const { showErrorNotification } = this.props;

        fetchQuery(CookiebotQuery.getCookiebotConfig()).then(
            /** @namespace ScandiPWA/CookieBot/Component/CookieConsent/Component/fetchQueryThen */
            ({ cookiebot }) => {
                const { enabled, group_id } = cookiebot;

                this.setState({ enabled, group_id });
            }
        ).catch(
            /** @namespace ScandiPWA/CookieBot/Component/CookieConsent/Container/fetchQueryThenCatch */
            error => showErrorNotification(error)
        );
    }

    render() {
        return (
            <CookieConsent
              { ...this.state }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieConsentContainer);

import { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import { COOKIEBOT_HOST } from './CookieConsent.config';

/** @namespace ScandiPWA/CookieBot/Component/CookieConsent/Component */
export class CookieConsent extends PureComponent {
    static propTypes = {
        enabled: PropTypes.bool.isRequired,
        group_id: PropTypes.string.isRequired
    };

    render() {
        const { enabled, group_id } = this.props;

        if (!enabled || !group_id || !group_id.length) {
            return null;
        }

        const src = `${ COOKIEBOT_HOST }${ group_id }/cd.js`;

        return (
            <script
              id="CookieDeclaration"
              src={ src }
              type="text/javascript"
              async
            />
        );
    }
}

export default CookieConsent;

import { fetchQuery } from 'Util/Request';
import CookiebotQuery from '../query/Cookiebot.query';
import { COOKIEBOT_HOST } from '../component/CookieConsent/CookieConsent.config';

/** @namespace ScandiPWA/CookieBot/Plugin/Container/afterComponentDidMount */
export const afterComponentDidMount = () => {
    fetchQuery(CookiebotQuery.getCookiebotConfig()).then(
        /** @namespace ScandiPWA/CookieBot/Plugin/Container/fetchQueryThen */
        ({ cookiebot }) => {
            const { enabled, group_id } = cookiebot;

            if (!enabled || !group_id) {
                return;
            }

            const script = document.createElement('script');

            script.id = 'Cookiebot';
            script.src = `${ COOKIEBOT_HOST }uc.js?cbid=${ group_id }`;

            document.head.insertBefore(script, document.head.childNodes[0]);
        }
    ).catch(
        /** @namespace ScandiPWA/CookieBot/Plugin/Container/fetchQueryThenCatch */
        // eslint-disable-next-line no-console
        error => console.log(error)
    );
};

export const config = {
    'Component/Router/Container': {
        'member-function': {
            componentDidMount: afterComponentDidMount
        }
    }
};

export default config;

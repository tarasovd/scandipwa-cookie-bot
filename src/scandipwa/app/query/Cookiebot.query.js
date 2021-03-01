import { Field } from 'Util/Query';

/** @namespace ScandiPWA/CookieBot/Query */
export class CookiebotQuery {
    _getCookiebotConfigFields = () => ([
        'enabled',
        'group_id'
    ]);

    getCookiebotConfig = () => new Field('getCookiebot')
        .setAlias('cookiebot')
        .addFieldList(this._getCookiebotConfigFields());
}

export default new CookiebotQuery();

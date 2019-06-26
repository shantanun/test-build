/**
 * global app constant used to store api data
 */
export const APP_CONSTANT = {
    /** used for setting urls for development */
    config: {
        /** initial API url path */
        apiUrl: 'https://api-test.travelclick.com/{{api_module_context_path}}/p1/',
        /** api url for local environment */
        apiUrlForLocal: 'http://localhost:9100/',
        /** token data for development */
        tokenData: {
            issuerKey: 'idpv2key',
            uid: '591898',
            sub: 'iHakimSys',
            role: 'System',
            user_category: 'IHOTELIER',
            role_id: '13',
            user_permission: '3',
            propertyid: '4561'
        }
    }
};

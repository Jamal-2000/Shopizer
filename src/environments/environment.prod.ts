/**
 * @license
 */
export const environment = {
    production: true,
    //GOOGLE MAP
    googleApiKey: window["env"]["APP_MAP_API_KEY"] || '',
    //MARKETPLACE | BTB | STANDARD
    mode: 'STANDARD',
    //API URL
    apiUrl: window["env"]["APP_BASE_URL"] || 'https://34.30.39.1:4200/api/v1',
    shippingApi: window["env"]["APP_SHIPPING_URL"] || 'http://34.30.39.171:4200/api',
    client: {
        language: {
            default: window["env"]["APP_DEFAULT_LANGUAGE"] || 'fr',
            array: [
                'fr',
                'en'
            ],
        },
    }
};

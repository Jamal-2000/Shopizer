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
    apiUrl: window["env"]["APP_BASE_URL"] || 'https://34.131.11.128:8080/api/v1',
    shippingApi: window["env"]["APP_SHIPPING_URL"] || 'http://localhost:9090/api',
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

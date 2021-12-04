export const APP_STATUS = {
    LIVE: 'LIVE',
    ON_DEVELOPMENT: 'ON_DEVELOPMENT',
    SUBMITTED: 'SUBMITTED'
}

export interface App {
    id?: number;
    title: string;
    description: string;
    appId: string;
    services: string;
    status: string;
}
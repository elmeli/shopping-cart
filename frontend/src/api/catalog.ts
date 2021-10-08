import http from './index';

const PREFIX = '/catalog';
catalog
export const getCatalog = () => http.get(PREFIX);

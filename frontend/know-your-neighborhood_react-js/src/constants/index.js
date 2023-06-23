export const API_BASE_URL = 'http://localhost:8080';
export const API_BASE_URL_OAUTH = `${API_BASE_URL}/oauth2/authorize`;
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'

export const GOOGLE_AUTH_URL = `${API_BASE_URL_OAUTH}/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
export const FACEBOOK_AUTH_URL = `${API_BASE_URL_OAUTH}/facebook?redirect_uri=${OAUTH2_REDIRECT_URI}`;
export const GITHUB_AUTH_URL = `${API_BASE_URL_OAUTH}/github?redirect_uri=${OAUTH2_REDIRECT_URI}`;

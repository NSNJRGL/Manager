import {AsyncStorage} from 'react-native';

export const HOST_URL = 'http://192.168.0.109:5000';

const withApiVersion = (url) => HOST_URL + '/api/' + url;

export const getAuthUrl = () => withApiVersion('auth');

export const getFetch = async (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: body,
  });
};

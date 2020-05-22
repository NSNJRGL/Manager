import {AsyncStorage} from 'react-native';

export const HOST_URL = 'http://192.168.0.103:5000';

const withApiVersion = (url) => HOST_URL + '/api/' + url;

export const getAuthUrl = () => withApiVersion('auth');

export const getSurveyUrl = () => withApiVersion('survey');

export const getMapUrl = () => withApiVersion('map');

export const getHeader = async () => {
  let token = await AsyncStorage.getItem('token');
  let header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    header['x-auth-token'] = token;
  }
  return header;
};

export const getFetch = async (url, method = 'GET', body) => {
  let header = await getHeader();
  return fetch(url, {
    method: method,
    headers: header,
    body: body,
  });
};

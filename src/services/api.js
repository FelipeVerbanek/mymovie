import { AsyncStorage } from 'react-native';
import { create } from 'apisauce';

const api = create({
    baseURL: 'https://api.themoviedb.org/3',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token)
    request.headers['Authorization'] = `Bearer ${token}`;
});


export default api;
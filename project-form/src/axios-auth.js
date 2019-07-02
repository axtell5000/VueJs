import axios from 'axios';

// creating a specific instance of axios
const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
});

// instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
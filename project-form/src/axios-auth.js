import axios from 'axios';

// creating a specific instance of axios
const instance = axios.create({
  baseURL: 'https://vuejs-form-project.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
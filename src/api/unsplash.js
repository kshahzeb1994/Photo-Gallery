import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID 858a1201933acb09a055611a433d5b191d51240355bc42d412d5ef0b01d1bfb5'
  }
});

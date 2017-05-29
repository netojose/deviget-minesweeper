import axios from 'axios';

let url = document.querySelector('meta[name="url"]').content;

export default axios.create({
  baseURL: `${url}/api/`
});
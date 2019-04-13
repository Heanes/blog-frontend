import api from './index.js';
import apiConfig from './urls/index.js';

export default Object.assign({}, api.load(apiConfig));

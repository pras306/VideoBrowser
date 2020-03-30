import axios from 'axios';

const KEY = 'AIzaSyBPwUcQVEI2PHiBcoMIdMi13Ac7OLUDqCs';

export const baseParams = {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
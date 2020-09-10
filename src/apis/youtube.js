import axios from 'axios';

const KEY = 'COPY_API_KEY_HERE';

export const baseParams = {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

import axios from 'axios';

const api=axios.create({
    baseURL:"http://localhost:6464"
})

export default api;
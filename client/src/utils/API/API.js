import axios from 'axios';


export default {
    // getAllProfile: (data) => {
    //     return axios.get('/api/profile/')
    // },

    getAllSymptoms: function() {
        return axios.get('/api/symptom/')
    },

    getOneSymptoms: function(id) {
        return axios.get('/api/symptom/'+ id)
    },

    createProfile: (data) => {
        return axios.post('api/profile/', data);
    }
}

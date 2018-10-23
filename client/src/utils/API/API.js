import axios from 'axios';


export default {
    // getAllProfile: (data) => {
    //     return axios.get('/api/profile/')
    // },

    addProfile: (data) => {
        return axios.post('/api/create/' + data)
    },

    getAllSymptoms: function() {
        return axios.get('/api/symptom/')
    },

    getOneSymptoms: function(id) {
        return axios.get('/api/symptom/'+ id)
    }
}

import axios from "axios";

export default {

    savePet: function(petData) {
        return axios.post("/api/savePets", petData)
    },

    getPet: function(petData) {
        return axios.get("/api/getPets", petData)
    },

    saveVisits: function(visitData){
        return axios.post("/api/saveVisits", petData)
    },

    getVisits: function(visitData){
        return axios.get("/api/getVisits", petData)
    }


}
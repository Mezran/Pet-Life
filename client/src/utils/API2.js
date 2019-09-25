import axios from "axios";

export default {

    savePet: function(petData) {
        return axios.post("/api/savePets", petData)
    },

    getPet: function(petData) {
        return axios.get("/api/getPets", petData)
    }

    

}
import axios from "axios";

export default {

    savePet: function(petData) {
        return axios.post("/api/savePets", petData)
    },

    getPet: function() {
        console.log("api12")
        return axios.get("/api/getPets")
    }

    

}
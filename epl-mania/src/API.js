import axios from "axios";

const API = axios.create({
    baseURL: "https://app.sportdataapi.com/api/v1/soccer/matches?apikey=e5e56d70-53e3-11ec-bc21-155754ac8683&season_id=1980",
});

export default API;
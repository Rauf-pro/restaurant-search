import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: `Bearer TEEJKx5LWZx8cMZKeQmYZ5kfBvFFwpGa6e1ua9vXEOyuvliOowCEL7y8JA74PlfQ9hdAeZuT6TqgcMKLmov2mEygOGpw1Wa1fl_BlD1TEnHVahGoZaknqYTOmKdWY3Yx`,
    },
})
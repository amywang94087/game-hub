import axios from "axios"
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'6d95b12ddf5a4313989188e35899bdd9'
    }
})
import axios from "axios";

export const getProduct = (callback) => {
    axios
        .get("https://fakestoreapi.com/products")
        .then((resp) => {
            callback(resp.data);
            console.log(resp.data);
        })
        .catch((err) => {
            console.log(err);
        })
}
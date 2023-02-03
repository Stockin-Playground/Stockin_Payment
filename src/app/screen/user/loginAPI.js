import axios from "axios";

const getLogin = () => {
    return new Promise((resolve, reject) => {
        axios
        .get("http://localhost:8080/api/login/get")
        .then ((result) => {
            console.log("berhasil mencuri data!");
            resolve(result.data.data);
        })
        .catch ((err) =>{
            console.log("gagal mencuri data!");
            reject((err));
        });
    });
};

export {getLogin};

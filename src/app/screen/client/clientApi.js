import axios from "axios";

const getClient = () => {
    return new Promise ((resolve,reject) => {
    axios
       .get("http://invsapi.stockin.co.id/api/client/get")
       .then((result) =>{
        console.log("berhasil menampilkan data");
        resolve(result.data.data);
       }) 
       .catch((err) =>{
        console.log("gagal menampilkan data");
        reject((err));
       });
    });
};

export {getClient}
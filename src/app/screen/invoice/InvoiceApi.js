import axios from "axios";

const getInvoice = () =>{
    return new Promise ((resolve,reject) => {
       axios
       .get ("http://localhost:8080/api/payment/get")
       .then ((result) =>{
        console.log ("berhasil menampilkan data client")
        resolve(result.data.data);
       })
       .catch ((err) =>{
        console.log ("gagal menampilkan data client")
        reject(err);
       });
    });
};

export {getInvoice}
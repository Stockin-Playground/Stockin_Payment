import axios from "axios";

const getInvoice = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_URLSERVER}api/payment/get`)
      .then((result) => {
        console.log("berhasil menampilkan data payment");
        console.log(process.env.REACT_APP_URLSERVER);
        resolve(result.data.data);
      })
      .catch((err) => {
        console.log("gagal menampilkan data client");
        console.log(process.env.URLSERVER);
        console.log(err);
        reject(err);
      });
  });
};

export { getInvoice };

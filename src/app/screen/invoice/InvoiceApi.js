import axios from "axios";

const getInvoice = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_URLSERVER}api/payment/get`)
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getInvoice };

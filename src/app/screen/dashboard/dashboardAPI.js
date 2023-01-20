import axios from "axios";

const getSumClient = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/api/client/getCount`)
      .then((result) => {
        console.log("berhasil get data client sum");
        resolve(result.data);
      })
      .catch((err) => {
        console.log("gagal get data client sum");
        reject(err);
      });
  });
};

export { getSumClient };

import axios from "axios";

const getSumClient = () => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8080/api/client/getCount`)
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

const getClient = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/api/client/get`)
      .then((result) => {
        console.log("berhasil get data client expired");
        resolve(result.data);
      })
      .catch((err) => {
        console.log("gagal get data client expired");
        reject(err);
      });
  });
};

const getExpired = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080/api/client/getExpired`)
      .then((result) => {
        console.log("berhasil get data client expired");
        resolve(result.data);
      })
      .catch((err) => {
        console.log("gagal get data client expired");
        reject(err);
      });
  });
};

export { getSumClient, getClient, getExpired };

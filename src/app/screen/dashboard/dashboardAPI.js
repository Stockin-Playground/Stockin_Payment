import axios from "axios";

const getSumClient = () => {
  axios
    .get(`http://localhost:8080/api/client/getCount`)
    .then((result) => {
      console.log("berhasil get data client sum");
    })
    .catch((err) => {
      console.log("gagal get data client sum");
    });
};

export { getSumClient };

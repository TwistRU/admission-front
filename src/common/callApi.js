import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export default async function callApi(
   endpoint,
) {

   return await axios({
      method: 'get',
      url: `${REACT_APP_API_URL}/${endpoint}`,
      responseType: 'json',

   })
       .then(res => {
          return res.data
       });
}
// import axiosInstance from "../axiosinstance";

// async function getStateInfo(){
//     try{
//         const response = await axiosInstance.get(
//             `/weather/api/get/maininfo/`,{}
//         )
//         return response.data;
//     } catch (error) {
//         console.log('오류 발생', error);
//     }
// }
// export default getStateInfo;

import axios from 'axios';

const getStateInfo = async () => {
  try {
    const response = await axios.get('/api/weather/api/get/maininfo/');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching state info:', error);
  }
};

export default getStateInfo;

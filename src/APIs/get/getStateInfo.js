import axiosInstance from "../axiosinstance";

async function getStateInfo(){
    try{
        const response = await axiosInstance.get(
            `/weather/api/get/maininfo/`,{}
        )
        return response.data;
    } catch (error) {
        console.log('오류 발생', error);
    }
}
export default getStateInfo;
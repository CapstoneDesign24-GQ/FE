import axiosInstance from "../axiosinstance";

export default async function postMain(selectedLocation,selectedCrop,selectedDate){
    try{
        const response = await axiosInstance.post(
            '/predictors/api/select/',
            {
                selectedLocation: selectedLocation,
                selectedCrop: selectedCrop,
                selectedDate: selectedDate
            }
        )
        return response.data;
    }catch{
        console.log('error - post main')
    }
}
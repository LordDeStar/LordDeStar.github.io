import {useState} from "react";
// Это модель данных, которые приходят с запроса
export const Model = () => {
  const [data, setData] = useState({users:[]})
  const updateData = (newData) =>{
    setData(newData)
  }
  return {data,updateData}
}

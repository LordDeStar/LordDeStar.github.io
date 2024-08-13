import  React from "react"
import { Model } from "../Models/TableModel"
import { TableView } from "../Views/TableView"

export const TableController = () =>{
  const model = Model()
  // Здесь получение всех пользователей.
  // Так же используеться как сброс поиска и сортировки.
  const handleUpdate = ()=>{
    fetch('https://dummyjson.com/user').then(response=>response.json()).then((res)=>{
      model.updateData(res)
    }).catch((e)=>{
      alert(`Ошибка при запросе данных с сервера! Error: ${e}`)
    })
  }
  // Логика поиска
  const handleSearch = (selectedField,searchingText)=>{
    fetch(`https://dummyjson.com/user/filter?key=${selectedField}&value=${searchingText}`).then(response=>response.json()).then((res)=>{
      model.updateData(res)
    }).catch((e)=>{
      alert(`Ошибка при запросе данных с сервера! Error: ${e}`)
    })
  }
  // Логика сортировки.
  // Простите, ничего умнее для того, чтобы сортирвка не сбивала поиск не придумал
  const handleSort = (field, ask)=>{
    if (field === 'age') {
      if (ask === 'ask'){
        model.updateData({users: model.data.users.sort((a,b)=>a[field] - b[field])})
      }
      else if (ask === 'des'){
        model.updateData({users: model.data.users.sort((a,b)=>b[field] - a[field])})
      }
      else{
        return
      }
    }
    else if (field === 'address'){
      if (ask === 'ask'){
        model.updateData({users: model.data.users.sort((a,b)=>a[field].city.localeCompare(b[field].city))})
      }
      else if(ask === 'des'){
        model.updateData({users: model.data.users.sort((a,b)=>b[field].city.localeCompare(a[field].city))})
      }
      else{
        return
      }
    }
    else{
      if (ask === 'ask'){
        model.updateData({users: model.data.users.sort((a,b)=>a[field].localeCompare(b[field]))})
      }
      else if(ask === 'des'){
        model.updateData({users: model.data.users.sort((a,b)=>b[field].localeCompare(a[field]))})
      }
      else{
        return
      }      
    }
  }
  return <TableView data={model.data} updateData={handleUpdate} searchData={handleSearch} sortData={handleSort}/>
}

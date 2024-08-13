import React from "react";
import '../../styles/searching.css'
export const Searching = ({searchData})=>{
  return(
    <div className="searching">
      <p>Искать по параметру:</p>
      <select id="selectedField">
        <option value={'firstName'}>Имя</option>
        <option value={'lastName'}>Фамилия</option>
        <option value={'maidenName'}>Отчество</option>
        <option value={'age'}>Возраст</option>
        <option value={'gender'}>Пол</option>
        <option value={'phone'}>Номер телефона</option>
        <option value={'address.city'}>Город</option>
        <option value={'address.address'}>Улица</option>
      </select>
      <input type="text" id="searchingText" placeholder="Поиск"/>
      <button onClick={()=>{
        let text = document.getElementById('searchingText')
        let field = document.getElementById('selectedField')
        searchData(field.value, text.value)
      }}>Поиск</button>
    </div>
  )
}
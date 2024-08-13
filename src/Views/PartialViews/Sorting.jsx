import React from 'react'
import '../../styles/sorting.css'

// Этот компонент является составной частью главного представления.
// Он отвечает за сортировку
export const Sorting = ({sortData}) => {
  return (
    <div className='sorting'>
      <p>Параметр сортировки</p>
      <select id="sortField">
        <option value={'lastName'}>ФИО</option>
        <option value={'age'}>Возраст</option>
        <option value={'gender'}>Пол</option>
        <option value={'address'}>Адрес</option>
      </select>
      <select id='ask'>
        <option value={undefined}>Без сортировки</option>
        <option value={'ask'}>По возрастанию</option>
        <option value={'des'}>По убыванию</option>
      </select>
      <button onClick={()=>{
        let field = document.getElementById('sortField')
        let ask = document.getElementById('ask')
        sortData(field.value, ask.value)
      }}>Сортировать</button>
    </div>
  )
}

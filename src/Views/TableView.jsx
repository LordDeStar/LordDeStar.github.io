import React, {useState} from "react"
import { Searching } from "./PartialViews/Searching"
import { Sorting } from "./PartialViews/Sorting"
import { ModalWindow } from "./PartialViews/ModalWindow"
import '../styles/table.css'
// Это главное прелдставление всего приложение(так как единственное)
export const TableView = ({ data, updateData, searchData, sortData }) => {
  // Состояния для работы модального окна
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  // При нажатии на строку происходит сохранение данных о пользователе в selectedItem
  // Так же открываетсая модальное окно
  const handleRowClick = (item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  // Это событие вызывается изнутри модального окна при закрытии
  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div>
      {/* Подключение поиска */}
      <Searching searchData={searchData}/>
      {/* Подключение сортировки */}
      <Sorting sortData={sortData} />
      {/* Кнопка для обновления данных */}
      <button onClick={() => {updateData()}}>Обновить данные</button>
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Возраст</th>
            <th>Пол</th>
            <th>Номер телефона</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {/* Заполнение таблицы данными */}
          {data.users.map(item => (
            <tr key={item.id} onClick={() => handleRowClick(item)}>
              <td>{`${item.lastName} ${item.firstName} ${item.maidenName}`}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.phone}</td>
              <td>{`${item.address.city}, ${item.address.address}`}</td>
            </tr>
          ))}
          <tr className="end"></tr>
        </tbody>
      </table>
      {/* Открытие модального окна */}
      {modalOpen && <ModalWindow target={selectedItem} onClose={handleModalClose} />}
    </div>
  )
}
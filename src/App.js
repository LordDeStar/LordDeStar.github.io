import { TableController } from './Controllers/TableController'
// Это само веб-приложение.
// Здесь пока только вызов одного контроллера, но при большем функционале нужно было бы здесь настроить роуты и использовать несколько контроллеров.
function App() {
	return <TableController />
}

export default App

import './App.css'
import ContactsTable from './components/ContactTable/ContactTable'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

export default function App() {
  return (
    <>
      <h1 className='title'>Contacts Manager</h1>
      <ContactsTable />
    </>
  )
}


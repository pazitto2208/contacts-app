import DataGrid, { Column, Editing, FormItem, Paging, Button } from "devextreme-react/data-grid"
import 'devextreme-react/text-area'
import { useState, useEffect } from "react"
import Message from '../Message/Message'

export default function ContactsTable () {
    const [contacts, setContacts] = useState([])
    const [message, setMessage] = useState({})

    const notesEditorOptions = { height: 100 }
    const url = 'http://localhost:5000/contacts/'

    useEffect(() => {
        fetch( url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((contacts) => {
            setContacts(contacts)
        })
        .catch((err) => console.error(err))
    }, [])

    const handleNewContact = (contactToBeAdded) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactToBeAdded.data),
        })
        .then((resp) => resp.json())
        .then(() => {
            setMessage({message: 'Success! Contact added!', type: 'success'})
        })
        .catch((err) => {
            setMessage({message: err, type: 'error'})
        })
    }

    const handleRemoveContact = (contactToBeDeleted) => {
        fetch(url + contactToBeDeleted.data.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setMessage({message: 'Success! Contact deleted!', type: 'success'})
        })
        .catch((err) => {
            setMessage({message: err, type: 'error'})
        })
    }

    const handleUpdateContact = (contactToBeEdited) => {
        fetch(url + contactToBeEdited.oldData.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactToBeEdited.newData),
        })
        .then((resp) => resp.json())
        .then(() => {
            setMessage({message: 'Success! Contact updated!', type: 'success'})
        })
        .catch((err) => {
            setMessage({message: err, type: 'error'})
        })
    }

    return(
        <>
            {message && <Message msg={message.message} type={message.type}/>}
            <DataGrid
                dataSource={contacts}
                keyExpr="id"
                showBorders={true}
                onRowInserting={(contactToBeAdded) => handleNewContact(contactToBeAdded)}
                onRowRemoving={(contactToBeDeleted) => handleRemoveContact(contactToBeDeleted)}
                onRowUpdating={(contactToBeEdited) => handleUpdateContact(contactToBeEdited)}
            >
                <Paging enabled={false} />
                <Editing
                    mode="form"
                    allowAdding={true}
                    allowUpdating={true}
                    allowDeleting={true}
                />
                <Column type="buttons">
                    <Button name="edit" icon="edit" />
                </Column>
                <Column type="buttons">
                    <Button name="delete" icon="trash" />
                </Column>
                <Column dataField="firstname" />
                <Column dataField="lastname" />
                <Column dataField="email" />
                <Column dataField="address" />
                <Column dataField="company" />
                <Column dataField="telnumber1" />
                <Column dataField="telnumber2" />
                <Column dataField="note" visible={false}>
                    <FormItem colSpan={2} editorType="dxTextArea" editorOptions={notesEditorOptions} />
                </Column>
            </DataGrid>
        </>
    )
}
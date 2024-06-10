import { useState } from 'react'
import './App.css'
import Modal from './Modal/Modal'
import Alert from "./Alert/Alert";

function App() {
    const [showModal, setShowModal] = useState(false);

    const [showAlert, setShowAlert] = useState(true)

    return (
        <>
            <main className="container-fluid d-flex flex-column align-items-center">
                <button
                    className="w-10 btn-primary mb-5"
                    onClick={() => setShowModal(true)}
                >
                    Show modal window
                </button>

                <Modal show={showModal}
                       title="Some kinda modal title"
                       onClose={() => setShowModal(false)}
                >
                    <div className="modal-body text-start">
                        <p>This is modal content</p>
                    </div>
                </Modal>

                <Alert
                    ShowAlert={showAlert}
                    type="primary"
                    onDismiss={()=>setShowAlert(false)}
                >
                    <p>This is a primary type alert</p>
                </Alert>
                <Alert
                    ShowAlert={showAlert}
                    type="danger"
                    onDismiss={()=>setShowAlert(false)}
                >
                    <p>This is a danger type alert</p>
                </Alert>
                <Alert
                    ShowAlert={true}
                    type="warning"
                >
                    <p>This is a warning type alert</p>
                </Alert>
                <Alert ShowAlert={true} type="success">This is a success type alert</Alert>
            </main>

        </>
    )
}

export default App

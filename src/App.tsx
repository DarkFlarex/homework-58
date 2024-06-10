import { useState } from 'react'
import './App.css'
import Modal from './Modal/Modal'

function App() {
    const [showModal, setShowModal] = useState(false);
  return (
      <>
          <main className="container-fluid">
          <button
              className="w-10 btn-primary"
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
          </main>
      </>
  )
}

export default App

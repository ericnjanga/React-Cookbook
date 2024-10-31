/**
 * MODAL FUNCTIONALITIES:
 * -------------------
 * 1) Modal Context: Expose the state and logic
 * 2) Modal Provider: Global provider of the Modal functionality, it defines the state and logic, and encapsulates "Modal Context"
 * 3) Modal Component: Renders the component according to the state and logic
 */
import React, { createContext, useContext, useState } from "react";
import "./modal.scss";
import { useDefinition } from "../../hooks/useDatabase";


/**
 * 1) Modal Context:
 * -------------------
 * Designed to expose modal state and logic everywhere in the app.
 */
export const ModalContext = createContext();


/**
 * 2) Modal Provider:
 * -------------------
 * - Defines the state and logic ("opening", "closing", and "state")
 * - Encapsulates "Modal Context", and uses it to expose the state and logic to its children
 * - NOTE: Is being used at the app's global level
 * @param {*} param0 
 * @returns 
 */
export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState();
  const { fetchDefinition } = useDefinition(); 

  // Function to close the modal
  function closeModal() {
    setIsOpen(false);
    setModalContent(undefined);
  }

  // Function to open the modal
  function openModal(definitionId) {
    /**
     * TODO:
     * NEEDS TO MAKE SURE THS IS PERFOMANCE OPTIMIZED
     * */
    fetchDefinition(definitionId)
      .then(result => {
        setModalContent(result);
      });

    setIsOpen(true);
  }

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};


/**
 * 3) Modal Component:
 * -------------------
 * - It gets its logic from "ModalContext" and renders the UI accordingly
 * - tabindex="-1": Helps force keyboard navigation inside the modal
 * @returns
 */
const Modal = () => {
  const { isOpen, closeModal, modalContent } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <section className="appname-modal modal-wrapper" tabIndex="-1">
          <div className="modal-content">
            <header className="modal-header"> 
              <h3 className={!modalContent ? 'placeholder heading' : ''}>{modalContent && modalContent.title}</h3>
            </header>
            <main className="modal-body">
              <p className={!modalContent ? 'placeholder text' : ''}>{modalContent && modalContent.description}</p>
            </main>
            <footer className="modal-footer">
              <button className="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </footer>
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;

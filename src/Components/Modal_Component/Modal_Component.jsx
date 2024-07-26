import React, { useState } from 'react';

const Modal_Component = (props) => {

  const {isOpen, setIsOpen} = props;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeOnOutsideClick = (e) => {
    if (e.target.classList.contains('modal_overlay')) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <span onClick={toggleModal}>Terms & Conditions</span>
      <div className="modal_container">
        {isOpen && (
          <div className="modal_overlay" onClick={closeOnOutsideClick}>
            <div className="modal_content">
              {/* MODAL HEADER */}
              <h3>Terms & Conditions</h3>
              {/* END MODAL HEADER */}
              {/* MODAL TEXT */}
              <p>
                Please read these terms and conditions carefully before using our service. By accessing or using our service, you agree to be bound by these terms.         
              </p>
              <p>
                1. Acceptance of Terms
                <br />
                By using our service, you agree to comply with and be legally bound by these terms and conditions. 
              </p>
              <p>
                2. Modification of Terms
                <br />
                We reserve the right to modify these terms at any time. Your continued use of the service after any changes constitutes acceptance of the new terms.                                              
              </p>
              <p>
                3. User Responsibilities 
                <br />
                You agree to use the service only for lawful purposes and in a manner that does not infringe on the rights of others.                             
              </p>
              <p>
                4. Limitation of Liability
                <br />
                Our liability is limited to the fullest extent permitted by law. We are not liable for any direct, indirect, incidental, or consequential our service.                                        
              </p>
              <p>
                                                                      
                5. Governing Law
                <br />
                These terms shall be governed by the laws of [Your State/Country].
              </p>
              <p>
                By clicking "Accept", you agree to these terms. 
              </p>
              {/* END MODAL TEXT */}
              {/* CLOSE MODAL BUTTON */}
              <button className="close_button" onClick={toggleModal}><span>Close</span></button>
              {/* END CLOSE MODAL BUTTON */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal_Component;

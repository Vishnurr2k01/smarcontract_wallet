import React from 'react'
import Modal from 'react-modal'
import './modal.css'
function Simple({children,isOpen}:{children:any;isOpen:boolean}) {
  Modal.setAppElement('#root')
  return (
  <Modal  contentLabel="Modal"
  
  className={{
    base: 'modal-base',
    afterOpen: 'modal-base_after-open',
    beforeClose: 'modal-base_before-close'
  }}
  overlayClassName={{
    base: 'overlay-base',
    afterOpen: 'overlay-base_after-open',
    beforeClose: 'overlay-base_before-close'
  }}
  shouldCloseOnOverlayClick={true}
  closeTimeoutMS={2000}
  
   isOpen={isOpen}>
    <div className='bg-[#F8F9FC] p-4 rounded-2xl'>
        {children}
    </div>
    </Modal>
  )
}

export default Simple
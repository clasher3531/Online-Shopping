import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux'
import {setLoader} from '../store';

function MyModal(props) {
    const dispatch = useDispatch();
    function modalLoadHandler() {
      dispatch(setLoader(false));
    }
    return (
      <div className="Modal" onLoad={modalLoadHandler}>
        <Modal {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{props.modalheading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{props.modalsubheading}</h4>
            {props.modaldescription}
          </Modal.Body>
          <Modal.Footer><Button variant="secondary">{props.modalbuttontext}</Button></Modal.Footer>
        </Modal>
      </div>
    );
}

export default MyModal;
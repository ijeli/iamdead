import React from 'react';
import Modal from 'react-modal';
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('body')

class HomeModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: true
        };

        this.modal = this.open.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
    // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'black';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Welcome New User</h2>
                </Modal>
            </div>
        )
    };
}

export default HomeModal
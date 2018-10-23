import React, {Component} from 'react';
import Modal from 'react-modal';

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

class DiagnosisClick extends Component {
    constructor() {
        super();
    
        this.state = {
            modalIsOpen: false,
            diagnosis: ['holder']
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
        // this.setState({diagnosis: this.value});
        // console.log(this.state.diagnosis);
    }
    
    afterOpenModal() {
    // references are now sync'd and can be accessed.
        // this.subtitle.style.color = 'black';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render(){
        return (
            <div key={this.props.id}>
                <button value = {this.props.disease_1} className = 'btn btn-primary' onClick={this.openModal}>{this.props.disease_1}</button>
                <button value = {this.props.disease_2} className = 'btn btn-primary' onClick={this.openModal}>{this.props.disease_2}</button>
                <button value = {this.props.disease_3} className = 'btn btn-primary' onClick={this.openModal}>{this.props.disease_3}</button>
                <button value = {this.props.disease_4} className = 'btn btn-primary' onClick={this.openModal}>{this.props.disease_4}</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className = 'container'>
                        <h1>{this.props.symptom}</h1>
                        <button className = 'btn btn-primary' onClick={this.closeModal}>Exit</button>    
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DiagnosisClick

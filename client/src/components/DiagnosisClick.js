import React, {Component} from 'react';
import Modal from 'react-modal';
import DiagDesc from './DiagDesc';

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
            diagnosis: ['holder'],
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(evt) {
        evt.preventDefault();
        // this.setState({diagnosis: this.value});
        // console.log(this.state.diagnosis);
        let diagnosis = this.state.diagnosis
        diagnosis.splice(0,1,evt.target.value);
        this.setState({diagnosis:diagnosis});
        console.log(diagnosis);
        console.log(evt.target.value);
        this.setState({modalIsOpen: true});
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
                        <h1>{this.state.diagnosis[0]}</h1>
                        <div>
                            <DiagDesc
                                diagnosis = {this.state.diagnosis[0]}
                            />     
                        </div>
                        <button className = 'btn btn-primary' onClick={this.closeModal}>Exit</button>    
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DiagnosisClick

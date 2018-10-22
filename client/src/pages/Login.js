import React from "react";
import ReactDOM from 'react-dom';
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

class Login extends React.Component{
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render(){
        return (
            <div>
                <button className = 'btn btn-primary' onClick={this.openModal}>Get Started</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className = 'container'>
                        <div className = 'row'>
                            <div className = 'col-lg-12' align = 'center'>
                                <h2 ref={subtitle => this.subtitle = subtitle}>Welcome</h2>
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-lg-12' align = 'center'>
                                    <textarea rows =  '1' cols = '25' placeholder = 'email@mail.com'></textarea>
                                    <br></br><br></br>
                                    <textarea rows =  '1' cols = '25' placeholder = 'p@ssw0rd'></textarea>
                                    <br></br>
                                    <button className = 'btn btn-primary' onClick={() => this.nextPath('/home')}>Login</button>
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-lg-12' align = 'center'>
                                <button className = 'btn btn-primary' onClick={() => this.nextPath('/NewUser') }>New User</button>
                            </div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-lg-12' align = 'center'>
                                <button className = 'btn btn-primary' onClick={this.closeModal}>Exit</button>    
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}


export default Login;
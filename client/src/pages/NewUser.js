import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


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

class NewUser extends React.Component{
    constructor() {
        super();
    
        this.state = {
          modalIsOpen: true,
          email: '',
          pass: '',
          firstName: '',
          lastName: '',
          monthOfBirth: '',
          dayOfBirth: '',
          yearOfBirth: ''
        };
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault()
        var data = {
            email: this.state.email,
            pass: this.state.paass,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            monthOfBirth: this.state.monthOfBirth,
            dayOfBirth: this.state.dayOfBirth,
            yearOfBirth: this.state.yearOfBirth
        }
        console.log(data)
        fetch('/api/create/', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            response.json();
        }).then(function(data) {
            console.log(data)
        });

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
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Welcome New User</h2>
                    <Form onSubmit={this.handleSubmit} method = 'POST'>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type = 'text'
                                name = 'emailnewuser'
                                placeholder = 'email@mail.com'
                                value = {this.state.email}
                                onChange = {e => this.setState({ email: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type = 'text'
                                name = 'passnewuser'
                                placeholder = 'P@ssw0rd'
                                value = {this.state.pass}
                                onChange = {e => this.setState({ pass: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                type = 'text'
                                name = 'firstnamenewuser'
                                placeholder = 'Jasper'
                                value = {this.state.firstName}
                                onChange = {e => this.setState({ firstName: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type = 'text'
                                name = 'lastnamenewuser'
                                placeholder = 'Lee'
                                value = {this.state.lastName}
                                onChange = {e => this.setState({ lastName: e.target.value})}
                            />
                        </FormGroup>
                        <textarea 
                            rows = '1' 
                            cols = '3' 
                            placeholder = ' 01'
                            value={this.state.monthOfBirth}
                            onChange={e => this.setState({ monthOfBirth: e.target.value })}>
                        </textarea>
                        <span> / </span>
                        <textarea 
                            rows = '1' 
                            cols = '3' 
                            placeholder = ' 01'
                            value={this.state.dayOfBirth}
                            onChange={e => this.setState({ dayOfBirth: e.target.value })}>
                        </textarea>
                        <span> / </span>
                        <textarea 
                            rows = '1' 
                            cols = '6' 
                            placeholder = ' 2000'
                            value={this.state.yearOfBirth}
                            onChange={e => this.setState({ yearOfBirth: e.target.value })}>
                        </textarea>
                        <Button onClick={() => this.nextPath('/home')}>Submit</Button>
                    </Form>
                </Modal>
            </div>

            // <div>
            //     <Modal
            //         isOpen={this.state.modalIsOpen}
            //         onAfterOpen={this.afterOpenModal}
            //         onRequestClose={this.closeModal}
            //         style={customStyles}
            //         contentLabel="Example Modal"
            //     >
            //         <div className = 'container'>
            //             <div className = 'row'>
            //                 <div className = 'col-lg-12' align = 'center'>
            //                     <h2 ref={subtitle => this.subtitle = subtitle}>Register</h2>
            //                 </div>
            //             </div>
            //             <div className = 'row'><p></p></div>
            //             <div className = 'row'>
            //                 <div className = 'col-lg-12' >
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '25' 
            //                             placeholder = '    email@mail.com'
            //                             value={this.state.email}
            //                             onChange={e => this.setState({ email: e.target.value })}>
            //                         </textarea>
            //                         <br></br>
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '25' 
            //                             placeholder = '          p@ssw0rd'
            //                             value={this.state.pass}
            //                             onChange={e => this.setState({ pass: e.target.value })}>
            //                         </textarea>
            //                         <br></br><br></br>
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '25' 
            //                             placeholder = '          firstname'
            //                             value={this.state.firstName}
            //                             onChange={e => this.setState({ firstName: e.target.value })}>
            //                         </textarea>
            //                         <br></br>
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '25' 
            //                             placeholder = '          lastname'
            //                             value={this.state.lastName}
            //                             onChange={e => this.setState({ lastName: e.target.value })}>
            //                         </textarea>
            //                         <br></br><br></br>
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '3' 
            //                             placeholder = ' 01'
            //                             value={this.state.monthOfBirth}
            //                             onChange={e => this.setState({ monthOfBirth: e.target.value })}>
            //                         </textarea>
            //                         <span> / </span>
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '3' 
            //                             placeholder = ' 01'
            //                             value={this.state.dayOfBirth}
            //                             onChange={e => this.setState({ dayOfBirth: e.target.value })}>
            //                         </textarea>
            //                         <span> / </span>
            //                         <textarea 
            //                             rows = '1' 
            //                             cols = '6' 
            //                             placeholder = ' 2000'
            //                             value={this.state.yearOfBirth}
            //                             onChange={e => this.setState({ yearOfBirth: e.target.value })}>
            //                         </textarea>
            //                         <br></br>
            //                         <button className = 'btn btn-primary' onClick={() => this.nextPath('/home')}>Register</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </Modal>
            // </div>
        )
    }
}


export default NewUser;
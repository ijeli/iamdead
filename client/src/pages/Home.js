import React, {Component} from 'react';
import '../App.css';
import API from '../utils/API/';
// import HomeModal from '../components/HomeModal';
import Diagnosis from '../components/Diagnosis';
import LoadedSymp from '../components/LoadedSymp';
import ButtonClick from '../components/ButtonClick';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            symptoms: [],
            symptomButton:[]
        }
    }
    handleThisSubmit = id => {
       
        API.getOneSymptoms(id)
             .then((res) => {
                 var joined = this.state.symptomButton.concat(res.data);
                 var newArray = joined.filter((item) => {return item === res.data})
                 this.setState({ symptomButton: newArray })
            }) 
    }

    componentDidMount() {
        // let self = this;
        // fetch('/api/symptoms', {
        //     method: 'GET'
        // }).then(function(response) {
        //     return response.json();
        // }).then(function(data) {
        //     self.setState({symptoms: data});
        // })

        API.getAllSymptoms()
        .then((res) => {
            console.log(res.data);
            this.setState({symptoms: res.data});
        })
    }

    render(){
        return (
            <div>
                {/* <HomeModal/> */}
                <div className='card'>
                    <div className='symptoms'>
                        <h1>What Symptoms are you feeling?</h1>
                        {this.state.symptoms.map(symptom =>
                        <span key={symptom.id}>
                             <ButtonClick handleThisSubmit={this.handleThisSubmit} 
                                          symptom={symptom.symptom} id={symptom.id} 
                            />                        
                        </span>
                        )}
                    </div>
                </div>

                <div className='card'>
                    <Diagnosis handleThisSubmit = {this.handleThisSubmit}/>
                    <br></br>
                    <ul handleThisSubmit = {this.handleThisSubmit}>
                        { this.state.symptomButton.map((symptom) =>
                            <LoadedSymp 
                                key = {symptom.id} 
                                symptom = {symptom.symptom}
                                disease_1 = {symptom.disease_1}
                                disease_2 = {symptom.disease_2}
                                disease_3 = {symptom.disease_3}
                                disease_4 = {symptom.disease_4}
                            />
                        )}
                    </ul>
                </div>
            </div>
        )
    }


}

// const Home = () => 
//     <div>
//         <div className='card'>
//             <div className='symptoms'>
//                 <h1>Symptoms</h1>
//             </div>
//         </div>
//         <div className='card'>
//             <div>
//                 <h1>Diagnosis</h1>
//                 <p>Result will be pulled from Database here</p>
//             </div>
        
//         </div>
//     </div>


export default Home;
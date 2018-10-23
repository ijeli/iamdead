import React, {Component} from 'react'

class DiagDesc extends Component {

    render() {
        return (
            <div>
                <span>Power</span>
                <h6>{this.props.diagnosis}</h6>
            </div>
        )
    };

}

export default DiagDesc;
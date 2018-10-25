import React, {Component} from 'react'

class DiagDesc extends Component {

    render() {
        return (
            <div>
                <h6>This is where the description of {this.props.diagnosis} from the API </h6>

            </div>
        )
    };

}

export default DiagDesc;
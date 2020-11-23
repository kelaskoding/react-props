import React from 'react';

class StateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onChangeName = (e) =>{
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeName}/>
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default StateComponent;
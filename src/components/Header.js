import React from 'react';


const mainInputStyles = {
    width: '40%',
    fontSize: '1.5em',
    marginBottom: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px',
}


export default class extends React.Component {
    state = {
        currentTodoLine: ''
    }

    saveTypedLine = (e) => {
        this.setState({currentTodoLine: e.target.value})
    }

    addLineHandler = (e) => {
        if(e.keyCode === 13) {
            this.props.addItem(this.state.currentTodoLine);
            this.setState({currentTodoLine: ''});
        }
    }

    render() {
        return (
            <>
                <h1>a list of things to do</h1>
                <input 
                    type="text" 
                    value={this.state.currentTodoLine}
                    onChange={this.saveTypedLine} 
                    onKeyUp={this.addLineHandler}
                    style={mainInputStyles}
                />
            </>
        )
    }
}
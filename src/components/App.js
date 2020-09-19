import React from 'react';
import ListItem from './ListItem';

const containerStyles = {
    width: '50%',
    margin: '100px auto',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '10px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '0.8em',
};

const mainInputStyles = {
    width: '40%',
    fontSize: '1.5em',
    marginBottom: '20px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px',
}

export default class extends React.Component{
    state = {
        list: []
    }

    addItem = (e) => {
        if(e.keyCode === 13) {
            const state = this.state;
            state.list.push({
                checked: false,
                content: e.target.value
            });
            this.setState({...state});
            e.target.value = '';
        }
    }

    checkHandler = (e) => {
        const state = this.state;
        if(state.list[e.target.id].checked) {
            state.list[e.target.id].checked = false;
        } else {
            state.list[e.target.id].checked = true;
        }
        this.setState({...state})
    }


    removeBtnHandler = (e) => {
        const state = this.state;
        state.list.splice(e.target.id, 1);
        this.setState({...state});
    }

    render() {
        return (
            <div style={containerStyles}>
                <h1>a list of things to do</h1>
                <input type="text" onKeyUp={this.addItem} style={mainInputStyles}/>
                {this.state.list.map((i, index) => {
                    return <ListItem 
                        key={index}
                        item={i}
                        ind={index}
                        checkHandler={this.checkHandler}
                        removeBtnHandler={this.removeBtnHandler}
                        />
                })}
            </div>
        )
    }
}
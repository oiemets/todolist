import React from 'react';
import ListItem from './ListItem';
import Header from './Header';

const containerStyles = {
    width: '50%',
    margin: '100px auto',
    borderRadius: '4px',
    padding: '10px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '0.8em',
};


export default class extends React.Component{
    state = {
        list: []
    }

    addItem = (item) => {
        this.setState(
            {...this.state, list: [...this.state.list, {content: item, isChecked: false}]}
            );
    }

    checkHandler = (index, isChecked) => {
        const listArray = [...this.state.list];
        listArray[index] = {...this.state.list[index], isChecked};
        this.setState({...this.state, list: [...listArray]});
    }


    removeBtnHandler = (ind) => {
        const listArray = [...this.state.list];
        listArray.splice(ind, 1);
        this.setState({...this.state, list: [...listArray]});
    }


    render() {
        return (
            <div style={containerStyles}>
                <Header addItem={this.addItem}/>
                {this.state.list.map((item, index) => {
                    return <ListItem 
                        key={index}
                        item={item}
                        index={index}
                        checkHandler={this.checkHandler}
                        removeBtnHandler={this.removeBtnHandler}
                        />
                })}
            </div>
        )
    }
}

import React from 'react';


const listItemStyles = { 
    width: '70%',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '5px 5px 2px 1px rgba(0, 0, 0, .2)'
}



export default ({item, checkHandler, removeBtnHandler, ind}) => {
    return (
        <div style={listItemStyles}>
            <input type="checkbox" id={ind} onChange={checkHandler} checked={item.checked}/>
            <h2 style={(item.checked) ? {textDecoration: 'line-through'} : {}}>{item.content}</h2>
            <button className="btn" id={ind} onClick={removeBtnHandler}>remove</button>
        </div>
    );
}   
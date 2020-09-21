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



export default ({item, checkHandler, removeBtnHandler, index}) => {
    return (
        <div style={listItemStyles}>
            <input type="checkbox" 
                onChange={(e) => checkHandler(index, e.target.checked)} 
                checked={item.isChecked}/>
            <h2 style={(item.isChecked) ? {textDecoration: 'line-through'} : {}}>{item.content}</h2>
            <button className="btn"  onClick={() => removeBtnHandler(index)}>remove</button>
        </div>
    );
}   
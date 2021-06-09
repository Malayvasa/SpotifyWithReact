import React from 'react';

const Dropdown = (props) => {

    const dropdownChanged = e => {
        props.changed(e.target.value);
    }
    
    return(
        <div>
            <select 
            className="appearance-none w-80 h-12 my-2 px-4 text-center bg-secondary-100
            dark:bg-secondary-700 dark:text-gray-100 rounded-sm" 
            value={props.selectedValue} onChange={dropdownChanged}>
                <option key="0">{props.name}</option>
                {props.options.map((item,idx)=> <option key={idx} value={item.id}>{item.name}</option>)}
            </select>
            {/* <p>{selectedValue}</p> */}
        </div>
    );   
}

export default Dropdown
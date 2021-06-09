import React, { useState } from 'react';

const Listbox = (props) => {

    const [selected, setSelected] = useState();

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
        setSelected(e.target.id);
    }

    return (
        <div className="overflow-scroll my-6 bg-secondary-100 dark:bg-secondary-700 min-w-lg rounded-lg">
            {
                props.items.map((item, idx) =>
                <div key={idx}className="flex-inital flex-none mx-4">

                    <div className={ selected===item.track.id ? 
                    "flex felx-col justify-between focus:outline-none md:w-96 text-left dark:text-white rounded-lg min-h-4 py-4 bg-secondary-200 dark:bg-secondary-600 border-none px-4"
                    : "flex felx-col justify-between focus:outline-none md:w-96 text-left dark:text-white min-h-4 py-4 rounded-lg px-4"}
                            id={item.track.id}
                            onClick={clicked}>
                                {/* {item.track.name} */}
                        <div 
                        id={item.track.id}
                        onClick={clicked}
                        className="w-38 text-gray-800 dark:text-gray-50">{item.track.name}
                        </div>
                        
                        <div 
                        id={item.track.id}
                        onClick={clicked}
                        className="self-center text-right text-xs text-gray-400">{item.track.artists[0].name}
                        </div>
                </div>
            </div>
                    
                    )
            }
            
        </div>
    );
}
 
export default Listbox;
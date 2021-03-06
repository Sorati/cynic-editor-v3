import React from 'react';
import './warning-screen.styles.scss'

const WarningScreen = ({warningText, handleWarning, toggleWarning, warningOpen}) => {
    return (
        <div className='warning-screen' style={warningOpen ? {display: 'block'} : {display: 'none'}}>
            <div className='warning-container'>
                <p className='warning-text'>{warningText}</p>
                <div className='buttons-container'>
                    <button onClick={() => toggleWarning('')} className="startButton" >Отмена</button>
                    <button onClick={() => handleWarning()} className="startButton" >Ок</button>
                </div>
            </div>
        </div>

    ) 
}

export default WarningScreen;
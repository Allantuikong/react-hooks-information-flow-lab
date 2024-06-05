import React from 'react';

function header ( { onDarkModeClick, isDarkMode }) {
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>  
                {isDarkMode ? "dark" : "light"} mode
            </button>
        </header>
    )
}

export default header
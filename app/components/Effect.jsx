import React from 'react';

const Effect = (props) => (
    <div className="toggler">
        <span>Effect</span>
        <button type="button" role="button" className="toggle" id="toggle" onClick={ props.effect }>
            <div className="toggle-switch"></div>
        </button>
    </div>
);

export default Effect;

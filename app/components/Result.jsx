import React from 'react';

const Result = (props) => (
    <div className="full">
        <div className="result">
            <h2 className="animated" id="result">{ props.result }</h2>
        </div>
    </div>
);

export default Result;

import React from 'react';

const Console = (props) => (
    <div className="full">
        <div className="form-group">
            <form className="form" onSubmit={ props.calculator }>
                <input type="number" name="min" id="min" placeholder="Min Value" autoComplete="off" className="form-control" required />
                <input type="number" name="max" id="max" placeholder="Max Value" autoComplete="off" className="form-control" required />
                <input type="submit" className="button" value="Go!" />
            </form>
        </div>
    </div>
);

export default Console;

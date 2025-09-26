import React from 'react'

export default function Stepindicator( { activeStep = 1 } ) {

    const step_data = [1, 2, 3, 4];

    return (
        <div className="step-indicator">

            {
                step_data.map(value => <div className={`step ${activeStep == value ? 'active' : ""}`}>{value}</div>)
            }

        </div>
    )
}

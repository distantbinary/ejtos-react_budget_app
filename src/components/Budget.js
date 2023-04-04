import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, Currency } = useContext(AppContext);
    const setBudget = (val)=>{
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '0.2rem', size: 10, width: '90px' }}
                onChange={event=>setBudget(event.target.value)}
                >
            </input>            
            </span>
        </div>
    );
};
export default Budget;
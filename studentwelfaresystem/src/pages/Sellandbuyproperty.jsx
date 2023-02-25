import React from 'react'
import { Link } from 'react-router-dom';
import FilterProperty from './FilterProperty';
import Propertylist from './Propertylist';
import  './Sellandbuyproperty.scss'

function Sellandbuyproperty() {
    return (
        <div className='sell-property'>
            <div className="container">
                <div><h4>Sell or Rent your Property For Free</h4></div>
                <div>
                    Looking for Property <Link to='./about'>about</Link>
                </div>
                <div className='row'>
                    <div className='filter-property col-md-4'>
                        <FilterProperty />
                    </div>
                    <div className='col-md-6'>
                         <Propertylist/>   
                    </div>
                    <div className='col-md-2'>
                    {new Date().toLocaleTimeString()}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sellandbuyproperty;

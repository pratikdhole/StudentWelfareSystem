import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/Home.scss'
import house from '../images/house.png';

function Home() {
  return (
      <div className='container homepage mt-5 shadow'>
            <div>
                <div className="text-center">
                    <Link to='/viewproperty'>
                        {<img src={house} alt="" width="40%" height="40%" />}
                    </Link>
                    <h1 className='col-md-6 offset-md-3'>{new Date().toLocaleTimeString()}</h1>
                </div>
            </div>
        </div>
  )
}

export default Home

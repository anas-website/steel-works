import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

 function About(props) {
   const history= useHistory()
    return (
        <div className='App' >
        
         
          <button className='btn btn-primary' onClick={() => {
             props.setdata('omar')
              history.push('/')
        }}>Home Pge</button>
        </div>
    )
}

export default withRouter( About)
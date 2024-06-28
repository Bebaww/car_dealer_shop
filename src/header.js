import react from 'react'
import './cardealer.css'
import logo from './mustang.jpg'

export  default function Header()
{
    return(
        <header className='headers'>
<nav className='logonav'>
            <img className='carlogo' src={logo}/>
        </nav>
        <nav className='companyname'>
<h1> belay ab moters</h1>
        </nav>
        </header>
            
        
        

   
    )
}

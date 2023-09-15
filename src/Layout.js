
import { Link, Outlet } from 'react-router-dom';
import App from './App';
export default function Layout() 
{
    return (
        <>
        <App />
            <div className='Main p-1' >

                <div className='Header'>
                    <div className='container mt-3 p-3 '>
                        <div className='row'>
                            <div className='col'>
                            <ul className="nav justify-content-center " >
                                <li class="nav-item " >
                                    <Link class="nav-link" to="./Home" style={{color : "white"}}>Home</Link>
                                </li>
                                <li class="nav-item" >
                                    <Link class="nav-link" to="./Stars" style={{color : "white"}}>Stars</Link>
                                </li>
                                <li class="nav-item" >
                                    <Link class="nav-link" to="./Nebula" style={{color : "white"}}>Nebula</Link>
                                </li>
                                <li class="nav-item" >
                                    <Link class="nav-link" to="./Nakhshtra" style={{color : "white"}}>Nakhshtra</Link>
                                </li>
                                <li class="nav-item" >
                                    <Link class="nav-link" to="./ZS" style={{color : "white"}}>Zodiac Signs</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ChangePart'>
                    <Outlet />
                </div>

                <div className='Footer'>
                    <div className='container mt-3'>
                        <div className='row'>
                            <div className='col'>
                                <p style={{color : "white"}} className='text-center'>
                                    Thank You!!
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
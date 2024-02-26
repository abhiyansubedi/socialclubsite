import Logo from '../img/Logo.jpg'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";




function Navbar() {
  const { user,loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  return (
    <>
 <div className= 'w-full h-[20vh] flex bg-white'>

<img src={Logo} className=' h-[20vh] lg:h-[20vh] px-5 pt-[2vh] pb-[2vh]' />
<div className='flex flex-col md:flex-row'>
<h1 className= 'font-abc text-xl md:text-4xl text-bold  pt-[4vh] pb-[2vh]   md:pt-[8vh] md:ml-4 ' style={{color:"#0141AC"}}>Bridging Technology and Business)
</h1>


</div>


</div>
<nav className='bg-slate-950 w-full md:h-10   flex justify-between
px-4 md:px-4 items-center'>
    <div className='text-white text-sm md:text-2xl font-abc font-bold'>
        Hetauda Youth
    </div>
    <ul className='font-abc lg:flex hidden text-white md:text-lg'>
      <Link to="/" className='mx-[25px] cursor-pointer ' >Home</Link> 
      <Link to="/programs"  className='mx-[25px] cursor-pointer' >Programs</Link>
      <Link to="/campaigns"  className='mx-[25px] cursor-pointer' >Campaigns</Link>
      <Link to="/donations" className='mx-[25px] cursor-pointer'> Donations</Link>
      <Link to="/news" className='mx-[25px] cursor-pointer'> News</Link>
      <Link to="/aboutus" className='mx-[25px] cursor-pointer'> About Us</Link>
      <li>
        {isAuthenticated && 
        <p>
          {user && user.name}
        </p>
        }
      </li>

    </ul>
 
    {
  isAuthenticated ? (
    <div className='hidden lg:block px-2 py-2 text-white text-xl cursor-pointer'>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  ) : (
    <div className='hidden lg:block px-2 py-2 text-white text-xl cursor-pointer'>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  )
}

   

   
    <div className='lg:hidden'>
        <a href="" className='text-white text-2xl'>&#8801;</a>
      
    </div>
</nav>
    
    </>
  )
}

export default Navbar
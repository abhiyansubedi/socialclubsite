import Donation from '../img/donation.jpg'




function Donations() {
  return (
   <>
   <div>
    <img src={Donation} className='w-full lg:h-[75vh] h-[40vh]' />
   </div>

   <div className='flex justify-center items-center h-auto mt-8'>
    <div className='lg:w-[75vh] md:w-3/5 p-6 shadow-lg  rounded-md ' style={{background:"#EFF2FF"}}>
      <h1 className='font-abc font-bold text-xl md:text-2xl'>Donation Form</h1>
      <hr />
      <div className='mt-8'>
        <label htmlFor="firstname" className='block text-base md:text-lg'>FirstName</label>
        <input type="text" name="" id="firstname" className='w-full border-black border-2 ' />
      </div>
      <div className='mt-8'>
        <label htmlFor="lastname" className='block text-base md:text-lg'>LastName</label>
        <input type="text" name="" id="fistname" className='w-full  border-black border-2' />
      </div>
      <div className='mt-8'>
        <label htmlFor="email" className='block text-base md:text-lg'>Email</label>
        <input type="email" name="" id="email" className='w-full  border-black border-2 ' />
      </div>

      <div className='mt-8'>
        <label htmlFor="number" className='block text-base md:text-lg'>Contact no</label>
        <input type="number" name="" id="number" className='w-full   border-black border-2' />
      </div>
   
      
    </div>
   </div>
   
    
        
      

 

  
   


 
     
   
   
   
   </>
  )
}

export default Donations
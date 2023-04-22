import Background from '../assets/images/console.jpg'

function Home() {
  return (
    <>
    <div style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed bg-opacity-75 -p-9'
    >
    <div className='flex place-items-center h-screen -mt-9'>
        <h3 className='p-5 bg-white bg-opacity-40 text-cyan-300 rounded text-center -mt-9'>
            Keep all your car's records in one place.<p>
            Welcome to your digital glove compartment.</p></h3>
    </div>
    </div>
    </>
  )
}

export default Home

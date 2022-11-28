import qrCode from './assets/image-qr-code.png'

const Card = () => {
  return (
    <main className='w-full h-screen p-4 flex items-center justify-center bg-lightgray'>
      <div className='bg-white max-w-[23rem] p-4 rounded-3xl shadow-md'>
        <div className='rounded-xl'>
          <img className='rounded-xl' src={qrCode} alt="qr-code" />
        </div>
        <div className='text-center'>
          <h1 className='text-2xl font-bold py-6 px-4 text-darkblue'>Improve your front-end skills by building projects</h1>
          <p className='text-grayishblue px-10 pb-6'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  )
}

export default Card

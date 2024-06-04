import Link from 'next/link';

const Navbar = () => {
  return (
      <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* LOGO */}
        <div className=''>
          <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center w-29" >
           <span className="text-white mr-1">Laydi</span>
           <span className="w-12 rounded bg-white text-black flex items-center justify-center px-4 py-1">.Soilihi</span>
          </Link>
        </div>
        {/* RESPONSIVE MENU */}
        <div className=''>2</div>
       
      </div>
  )
}

export default Navbar


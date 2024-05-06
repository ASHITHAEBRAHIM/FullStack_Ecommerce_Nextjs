import { Link} from "react-router-dom"
import Button from "./Button"
import {Search,ShoppingCart,CircleUser, ChevronDown,AlignJustify} from "lucide-react"
                
const Header = () => {
  return (
  <>
  <div className="flex items-center justify-center md:h-[38px] h-[34px] md:w-full w-[390px] bg-black mx-auto mt-8 text-white text-xs md:text-sm">
  <p>Sign up and get your first order.</p>
  <Link className="underline" to=''>Sign Up Now</Link>
  </div>

<div className="md:mt-4 mt-5 md:h-[48px] h-[34px] md:w-full w-[390px] mx-auto">
<div className="flex items-center flex-shrink-0  md:ml-[150px]">
<Button size="icon" className='md:hidden'>
            <AlignJustify/>
          </Button>
<Link className="font-lilita font-bold text-[25.2px] md:text-[32px]" to='/'>SHOP.CO</Link>
<div className="hidden md:flex gap-6 pl-10 font-satoshi text-base">
  <div className=" flex gap-0">
  <Link to='/'>Shop</Link>
  <ChevronDown />
  </div>
  <Link to=''>On Sale</Link>
  <Link to=''>New Arrivals</Link>
  <Link to=''>Brands</Link>
</div>
<form className="hidden md:flex ml-24  flex-grow justify-center">
            <div className='flex gap-2 flex-grow max-w-[600px] relative'>
             <Button variant="ghost" size="icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
             <Search/>
             </Button>            
              <input 
              type='search' 
              placeholder='Search for products...'
              className="rounded-full border border-secondary-border shadow-inner shadow-secondary py-3 pl-12 text-base w-full bg-gray-100 text-gray-200 font-satoshi"             
              />
            </div>
          </form>

          <div className="flex justify-between md:items-center flex-shrink-0 md:pl-10 pl-28 mr-4 md:mr-[100px] ml-auto">
          <Button size="icon" className='md:hidden'>
            <Search/>
          </Button>
          <Button size="icon">
            <ShoppingCart/>
          </Button>
          <Button size="icon">
            <CircleUser/>
          </Button>
        </div>
</div>
    </div>
  </>    
);
};
export default Header
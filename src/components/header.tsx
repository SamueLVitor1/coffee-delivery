import logo from '../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className='flex items-center justify-between p-3 md:p-8'>
      <img src={logo} alt="logo coffee delivery" />


      <div className='flex items-center gap-3'>
        <p className='p-2 flex items-center gap-[0.62px] rounded-lg text-purple-dark bg-purple-light' >
          <MapPin size={15} />
          <span className='text-sm'>
            Uberlândia, MG
          </span>
        </p>
        <a href="#" className='p-2 rounded-md bg-yellow-light text-yellow-dark relative' >
          <ShoppingCart fill='#C47F17' size={20} />
          <span className='absolute -top-3 -right-2 size-5 flex items-center justify-center rounded-full text-sm bg-yellow-dark text-white '>
            3
          </span>
        </a>
      </div>
    </header>
  )
}
import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'
import img from '../assets/img-intro-coffee.svg'

export function IntroSection() {
  return (
    <section className='flex items-center'>
      <div>
        <h1 className='text-5xl font-semibold'>
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className='mt-4 text-xl'>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </p>

        <ul className='mt-16 flex gap-10'>
          <div className='flex flex-col gap-5'>
            <li className='flex gap-3 items-center'>
              <ShoppingCart
                className='text-white bg-yellow-dark p-2 rounded-full flex items-center'
                size={32}
              />
              <span className='text-base text-base-text'>
                Compra simples e segura
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <Timer className='text-white bg-yellow p-2 rounded-full flex items-center' size={32} />
              <span className='text-base text-base-text'>
                Entrega rápida e rastreada
              </span>
            </li>
          </div>
          <div className='flex flex-col gap-5'>
            <li className='flex gap-3 items-center'>
              <Package className='text-white bg-base-text p-2 rounded-full flex items-center' size={32} />
              <span className='text-base text-base-text'>
                Embalagem mantém o café inctacto
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <Coffee className='text-white bg-purple p-2 rounded-full flex items-center' size={32} />
              <span className='text-base text-base-text'>
                O café chega fresquinho até você
              </span>
            </li>
          </div>
        </ul>
      </div>
      <img src={img} alt="" />
    </section>
  )
}
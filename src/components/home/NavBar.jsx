import { useRef } from 'react'
import logo from '../../assets/home/logo.png'
import menuIcon from '../../assets/home/menuIcon.png'
import closeIcon from '../../assets/home/closeIcon.png'

const NavBar = () =>{
  const menu = useRef()
  const link = 'font-bold text-base hover:text-primary'
  const style = ['flex', 'flex-col', 'fixed', 'z-20', 'top-0', 'right-0','p-5', 'h-full', 'w-1/2', 'max-w-screen-sm', 'bg-slate-100']
  const openMenu = () =>{
    menu.current.classList.remove('hidden')
    style.forEach( item => {
      menu.current.classList.add(item)
    })
  }
  const closeMenu = () =>{
    menu.current.classList.add('hidden')
    style.forEach( item => {
      menu.current.classList.remove(item)
    })
  }
  
  return(
    <nav className='pt-6 flex items-center justify-between w-11/12 max-w-screen-2xl m-auto'> 
      <img className="w-32 cursor-pointer" src={logo} alt="Logo"/>
      <img className="cursor-pointer sm:hidden" onClick={()=> openMenu()} src={menuIcon} alt="Hamburguer Menu" />
      <div className='sm:flex gap-8 hidden' ref={menu}>
        <img className="w-7 cursor-pointer rotate-180 absolute right-2 sm:hidden" onClick={() => closeMenu()} src={closeIcon} alt="Close Icon" />
        <a href="#" className={link + ' mt-8 sm:mt-0'}> Location </a>
        <a href="#" className= {link}> Blogs </a>
        <a href="#" className= {link}> Testimonials </a>
        <a href="#" className= {link}> Contact </a>
      </div>
    </nav>
  )
}

export default NavBar
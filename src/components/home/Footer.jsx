import Button from './MainButton'
import mail from '../../assets/home/mail.png'

import logo from '../../assets/home/logo.png'
import facebook from '../../assets/home/facebook.png'
import twitter from '../../assets/home/twitter.png'
import instagram from '../../assets/home/instagram.png'

const icons = [facebook, twitter, instagram]
const strongText = "font-bold text-black"
const link = 'text-light'
const Footer = () =>{
  return(
    <footer className="bg-primaryLight mt-32 pt-20 pb-10">
      <div className='m-auto text-center w-11/12 max-w-screen-md'>
        <h3> Subscribe to Our Newsletter For Weekly Article Update. </h3>
        <p className='my-8 w-4/5 w-max-screen-md m-auto'> We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.  </p>
        <div className='relative flex flex-col gap-y-8 sm:flex-row items-center justify-between my-16 w-full max-w-screen-lg m-auto'>
          <span className='absolute z-10 top-4 left-7 lg:left-8'> <img className="w-5" src={mail}/> </span>
          <input className='text-light pl-11 py-3 rounded-full m-auto w-11/12 sm:w-4/5 border border-primary border-solid bg-transparent placeholder:text-primary' type="text" placeholder="Enter Your e-mail address"/>
          <Button text={'Subscribe'}/>
        </div>
      </div>
      <div className='my-20 flex flex-col w-4/5 w-max-screen-md m-auto items-center gap-y-12 lg:flex-row lg:justify-between '>
        <div className='lg:w-1/4  flex flex-col gap-4 text-center lg:text-start'>
          <img className="w-40 cursor-pointer m-auto lg:m-0 " src={logo} alt="Logo" />
          <p>We envision a world where everyone feels welcome in the American hiking community.</p>
          <div className='flex justify-center lg:justify-start gap-2'>
            {icons.map( (item, index) => (
              <img key={index} className='w-8 block cursor-pointer hover:scale-110' src={item}/>
            ))}
          </div>
        </div>
        <div className='flex gap-8 sm:gap-20'>
          <div className='flex flex-col gap-4 justify-between'>
            <p className={strongText}> Location </p>
            <a href='#' className={link}> America </a>
            <a href='#' className={link}> Asia </a>
            <a href='#' className={link}> Europe </a>
            <a href='#' className={link}> Africa </a>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <p className={strongText}> Contact </p>
            <a href='#' className={link}> About </a>
            <a href='#' className={link}> Teams </a>
            <a href='#' className={link}> Profile </a>
            <a href='#' className={link}> FAQ </a>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <p className={strongText}> Legals </p>
            <a href='#' className={link}> Privacy </a>
            <a href='#' className={link}> Disclaimer </a>
            <a href='#' className={link}> Terms </a>
            <a href='#' className={link}> Company </a>
          </div>
        </div>
      </div>
      <p className=' mt-10 text-light font-sm text-center'> Copyright © 2021. All Right Reserved. </p>
    </footer>
  )
}

export default Footer
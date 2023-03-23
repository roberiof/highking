import NavBar from '../components/home/NavBar'
import Carousel from '../components/home/Carousel'
import Footer from '../components/home/Footer'
import MainButton from '../components/home/MainButton'

// IMAGES 
import Hero from '../assets/home/Hero.png'
import icon1 from '../assets/home/icon-1.png'
import icon2 from '../assets/home/icon-2.png'
import icon3 from '../assets/home/icon-3.png'
import img1_1 from '../assets/home/img1_1.jpg'
import img2_1 from '../assets/home/img2_1.jpg'
import img3_1 from '../assets/home/img3_1.jpg'
import com1 from '../assets/home/com-1.png'
import com2 from '../assets/home/com-2.png'
import com3 from '../assets/home/com-3.png'
import com4 from '../assets/home/com-4.png'
import com5 from '../assets/home/com-5.png'

const section = 'mt-32 flex flex-col gap-y-4 md:flex-row items-center  md:justify-between'
const companies = [
  {name: 'Booking.com', logo: com1},
  {name: 'Travel Advisors', logo: com2},
  {name: 'Travel Channel', logo: com3},
  {name: 'Trip Raja Logo', logo: com4},
  {name: 'United Travel Logo', logo: com5}
]

const Home = () =>{
  return(
    <>
    <NavBar/>
    <div className='w-11/12 max-w-screen-xl m-auto'>

      <section className=' w-full relative top-20 flex items-center justify-between gap-y-12 flex-col md:flex-row text-center md:text-start'>
        <div className='md:w-2/4'>
          <h1> Be prepared for the mountains and beyond </h1>
          <h4 className="pt-4"> Are you looking for amazing hiking travel? Don’t worry! We got it for you!</h4>
          <div className='flex justify-center md:justify-start gap-6 mt-6'>
            <MainButton text={'Contact Us'}/>
            <button className='text-primary border-primary border border-solid'> Watch Video </button>
          </div>
        </div>
        <img className="w-3/4 md:w-1/3" src={Hero} alt="Couple traveling"/>
      </section>

      <section className='bg-primaryLight mt-60 p-10 gap-8 flex shadow-slate-400 shadow-lg rounded-md m-auto flex-col w-full sm:flex-row items-stretch'>
        <div className='flex flex-col justify-between'>
          <img className='w-20 mb-6' src={icon1} alt="Route" />
          <h3> Secret Locations </h3>
          <p> Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
          <a href="#" className='text-secondary font-bold block pt-3'> Read More</a>
        </div>
        <div className='flex flex-col justify-between'>
          <img className='w-20 mb-6' src={icon2} alt="Shoe" />
          <h3> Safe Adventure </h3>
          <p> Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
          <a href="#" className='text-secondary font-bold block pt-3'> Read More</a>
        </div>
        <div className='flex flex-col justify-between'> 
          <img className='w-20 mb-6' src={icon3} alt="Backpack" />
          <h3> Professional Hikers </h3>
          <p> Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
          <a href="#" className='text-secondary font-bold block pt-3'> Read More</a>
        </div>
      </section>

      <p className='text-center mt-5'> Don’t hesitate to contact us to get better Information. <span className='text-secondary font-bold italic'> EXPLORE ALL TREKKING.</span></p>

      <section className={section}>
        <img className='md:w-1/3' src={img1_1} alt="Woman Traveling" />
        <aside className='md:w-2/4'>
          <h1 data-aos="fade-down" data-aos-duration="3000">Safe, Affordable, And Trusted </h1>
          <p className='mt-5 mb-10'>Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</p>
          <MainButton text={"Contact Us"}/>
        </aside>
      </section>

      <section className='text-center mt-24'> 
        <span className='text-primary text-sm lg:text-base font-bold'> Safe Journey </span>
        <h2>Trusted by Big Companies</h2>
        <div className='mt-16 max-w-screen-lg m-auto flex flex-wrap gap-16 items-center justify-center'>
          {companies.map((item, index) => (
            <img key={index} className='w-56 cursor-pointer' src={item.logo} alt={item.name + ' Logo'}/> 
          )
          )}
        </div>
      </section>

      <section className={section}>
        <div className='md:w-2/5'>
          <h2> Enjoy Your Life With Us Now! </h2>
          <p className='mt-5 mb-10'> Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals. </p>
          <MainButton text={"Contact Us"}/>
        </div>
        <img className='md:w-1/3'src={img2_1} alt="Couple Traveling" />
      </section>

      <section className={section}>
        <img className='md:w-1/3'src={img3_1} alt="Couple Traveling" />
        <div className='md:w-2/4'>
          <h2> Let’s Enjoy Nature With Us </h2>
          <p className='mt-5 mb-10'> Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals. </p> 
          <MainButton text={"Contact Us"}/>
        </div>
      </section>
    </div>
    <Carousel/>
    <Footer/>
    </>
  )
}

export default Home 
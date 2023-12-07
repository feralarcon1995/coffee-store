import cup from '/assets/cup.png';
import bean from '/assets/coffee_bean.png';
import LinkButton from '../LinkButton';
const Hero = () => {
  return (
    <section className=" overflow-hidden background-hero min-h-screen max-h-full justify-center items-center grid grid-cols-1 lg:grid-cols-2 ">
      <article className='flex flex-col gap-8 p-12 z-30'>
        <p className='text-white text-3xl animate-fade-right animate-duration-[1400ms] animate-delay-1100 '>We’ve got your morning covered with</p>
        <h1 className='font-bold text-8xl md:text-[8rem] text-white animate-fade-right animate-duration-[1400ms] animate-delay-1000 '>Coffee Store</h1>
        <p className='text-white text-2xl w-full md:w-1/2 animate-fade-right animate-duration-[1400ms] animate-delay-1100'>It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best
          for our customers.</p>
        <LinkButton link="/coffee-store" title="Shop Now" className='animate-fade-right animate-duration-[1400ms] animate-delay-1000' />
      </article>
      <article className='relative w-full h-full'>
        <img src={cup} alt="cup of coffee" className='absolute left-[30%] -rotate-45 top-[15%] w-5/12 object-contain z-20 animate-fade-left animate-duration-[1400ms] animate-delay-1000' />
        <img src={bean} alt="coffee bean" className='absolute w-9/12 right-0 bottom-0 object-contain z-10 animate-fade-left animate-duration-[1400ms] animate-delay-1100' />
      </article>
    </section>
  )
}

export default Hero
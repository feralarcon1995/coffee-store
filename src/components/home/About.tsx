import cup from '/assets/mask.png';
import coffeeBlast from '/assets/coffee_blast.png';
import Button from '../Button';
const About = () => {
  return (
    <section className='relative flex flex-col md:flex-row justify-between items-center min-h-[800px]	max-h-full '>
      <article className='flex flex-col justify-center items-center md:items-start p-12 gap-8 py-14 md:py-0 w-full md:w-3/6 md:pl-36 z-10'>
        <h2 className='text-coffee font-bold text-6xl'>Discover the best coffee</h2>
        <p className='text-gray text-2xl w-full md:w-3/4'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
        <Button link="/coffee-store" title="Discover" />
      </article>
        <img src={cup} alt="cup of coffee" className='object-contain w-full md:w-3/6 h-full md:h-[600px] self-center' />
        <img src={coffeeBlast} alt="coffee blast" className='absolute bottom-0 z-0' />

    </section>
  )
}

export default About
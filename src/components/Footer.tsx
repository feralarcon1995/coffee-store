import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-3 items-center py-5 bg-beige justify-center h-[200px]'>
      <p>Hecho con ❤️ por <Link className='text-black transition-all hover:underline font-bold' to="https://www.linkedin.com/in/feralarcon1995/">Fernando Alarcon</Link>
      </p>
    </footer>
  )
}

export default Footer
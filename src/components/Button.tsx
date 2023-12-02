import {Link} from 'react-router-dom';

interface ButtonProps {
  link: string;
  title:string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({link, title,className}) => {
  return (
    <Link to={link} className={`bg-yellow p-4 w-44 rounded-2xl text-center text-black transition-all hover:bg-beige hover:shadow-lg font-bold border-2 border-transparent hover:border-2 hover:border-coffee hover:font-bold ${className}`}>{title}</Link>
  )
}

export default Button
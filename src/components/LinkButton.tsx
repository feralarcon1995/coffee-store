import {Link} from 'react-router-dom';
import { cn } from '../lib/utils';

interface LinkButtonProps extends React.HTMLAttributes<HTMLAnchorElement>{
  link: string;
  title:string;
}
const LinkButton: React.FC<LinkButtonProps> = ({link, title,className, ...props}) => {
  return (
    <Link {...props} to={link} className={cn(`bg-yellow p-4 w-44 rounded-2xl text-center text-black transition-all hover:bg-beige hover:shadow-lg font-bold border-2 border-transparent hover:border-2 hover:border-coffee hover:font-bold`, className)}>{title}</Link>
  )
}

export default LinkButton
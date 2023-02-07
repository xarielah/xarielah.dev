import { HiOutlineCode } from 'react-icons/hi';
import IconLinkProject from './icon-link-project';

interface ISourceButtonProps {
  href: string;
}

const SourceButton = ({ href }: ISourceButtonProps) => {
  return (
    <IconLinkProject tooltip={'View Source'} href={href}>
      <HiOutlineCode size={'2em'} />
    </IconLinkProject>
  );
};

export default SourceButton;

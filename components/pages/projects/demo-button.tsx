import { MdEmojiObjects } from 'react-icons/md';
import IconLinkProject from './icon-link-project';

interface IDemoButtonProps {
  href: string;
}

const DemoButton = ({ href }: IDemoButtonProps) => {
  return (
    <IconLinkProject tooltip={'View Demo'} href={href}>
      <MdEmojiObjects size={'2em'} />
    </IconLinkProject>
  );
};

export default DemoButton;

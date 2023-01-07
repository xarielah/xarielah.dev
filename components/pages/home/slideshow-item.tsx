import useTheme from 'next-theme';
import { Skillz } from '../../../lib/types/skill/skill-techs.type';

interface SlideshowItemProps {
  item: Skillz;
}

const SlideshowItem = ({ item }: SlideshowItemProps) => {
  const { theme } = useTheme();

  return (
    <div className="slide p-6 rounded-full h-48 w-48">
      <img
        src={theme === 'light' ? item.src.light : item.src.dark}
        className="w-full px-10 cursor-pointer"
        alt={item.label}
        loading="lazy"
      />
    </div>
  );
};

export default SlideshowItem;

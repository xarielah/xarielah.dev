import useTheme from 'next-theme';
import { Skillz } from '../../../lib/types/skill/skill-techs.type';

interface SlideshowItemProps {
  item: Skillz;
}

const SlideshowItem = ({ item }: SlideshowItemProps) => {
  const { theme } = useTheme();

  return (
    <div className="slide p-6 rounded-full h-[240px] w-[240px] text-center">
      <img
        data-tooltip-target="tooltip-default"
        src={item.src.dark}
        className={`w-full px-10 cursor-pointer opacity-[0.99] ${
          theme === 'light' ? 'hidden' : 'block'
        }`}
        alt={item.label}
        loading="lazy"
      />
      <img
        data-tooltip-target="tooltip-default"
        src={item.src.light}
        className={`w-full px-10 cursor-pointer opacity-[0.99] ${
          theme !== 'light' ? 'hidden' : 'block'
        }`}
        alt={item.label}
        loading="lazy"
      />
      <h4 className="text-3xl font-light">{item.label}</h4>
    </div>
  );
};

export default SlideshowItem;

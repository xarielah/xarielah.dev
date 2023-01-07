import { techs } from '../../../lib/data/techs';
import SlideshowItem from './slideshow-item';

export const Slideshow = () => {
  return (
    <div className="slider">
      <div className="slide-track2">
        {techs.map((item) => (
          <SlideshowItem key={`component1_${item.label}`} item={item} />
        ))}

        {techs.map((item) => (
          <SlideshowItem key={`component2_${item.label}`} item={item} />
        ))}

        {techs.map((item) => (
          <SlideshowItem key={`component3_${item.label}`} item={item} />
        ))}
      </div>
    </div>
  );
};

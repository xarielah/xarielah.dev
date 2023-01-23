import Link from 'next/link';
import { useEffect, useState } from 'react';
import { miniLogosTechs } from '../../../lib/data/mini-logo-techs';
import { MiniIcons } from '../../../lib/types/skill/mini-logo-techs.type';

const TechsIcons = () => {
  const [icons, setIcons] = useState<MiniIcons[]>([]);

  useEffect(() => {
    setIcons(miniLogosTechs);
  }, []);

  return (
    <div className="flex techs space-x-3 w-full flex-wrap">
      {miniLogosTechs.length > 0
        ? miniLogosTechs.map((tech, i) => (
            <Link href={tech.href} key={i} target="_blank">
              <img src={tech.src} alt={tech.alt} width="40" height="40" />
            </Link>
          ))
        : 'Loading...'}
    </div>
  );
};

export default TechsIcons;

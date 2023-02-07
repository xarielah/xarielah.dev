import Link from 'next/link';
import type { ReactNode } from 'react';
import Tooltip from '../../ui-elements/tooltip/tooltip';

interface IIconLinkProjectProps {
  href: string;
  children: ReactNode;
  tooltip: string;
}

const IconLinkProject = ({ href, children, tooltip }: IIconLinkProjectProps) => {
  return (
    <Tooltip text={tooltip}>
      <Link href={href} target="_blank" className="hover:dark:text-slate-900">
        <button data-tooltip-target="tooltip-default" className="icon-button-project">
          {children}
        </button>
      </Link>
    </Tooltip>
  );
};

export default IconLinkProject;

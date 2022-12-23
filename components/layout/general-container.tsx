import { ReactNode } from 'react';
import RestictWidth from './restrict-width';

interface GeneralContainerProps {
    children: ReactNode;
    className?: string;
}

const GeneralContainer = ({ children, className }: GeneralContainerProps) => {
    return (
        <RestictWidth>
            <div
                className={
                    `flex flex-col space-y-10 items-center justify-around text-slate-700 p-8 rounded-lg` +
                    ` ${className}`
                }
            >
                {children}
            </div>
        </RestictWidth>
    );
};

export default GeneralContainer;

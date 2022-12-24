import React, { ReactNode } from 'react';

interface RestictWidthProps {
    children: ReactNode;
    className?: string;
}

const RestictWidth = ({ children, className }: RestictWidthProps) => {
    return (
        <div className={`max-w-[120ch] ${className ? className : ''}`}>
            {children}
        </div>
    );
};

export default RestictWidth;

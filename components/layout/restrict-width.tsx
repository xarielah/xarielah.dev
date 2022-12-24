import React, { ReactNode } from 'react';

interface RestictWidthProps {
    children: ReactNode;
    className?: string;
}

const RestictWidth = ({ children, className }: RestictWidthProps) => {
    return <section className={`max-w-[120ch] mx-auto ${className}`}>{children}</section>;
};

export default RestictWidth;

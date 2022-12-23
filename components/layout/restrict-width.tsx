import React, { ReactNode } from 'react';

interface RestictWidthProps {
    children: ReactNode;
}

const RestictWidth = ({ children }: RestictWidthProps) => {
    return <section className='max-w-[120ch] mx-auto'>{children}</section>;
};

export default RestictWidth;

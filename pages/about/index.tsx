import React from 'react';
import RestictWidth from '../../components/layout/restrict-width';
import Information from '../../components/pages/about/information';
import Technologies from '../../components/pages/about/technologies';

const About = () => {
    return (
        <section>
            <RestictWidth>
                <Information />
            </RestictWidth>
            <Technologies />
        </section>
    );
};

export default About;

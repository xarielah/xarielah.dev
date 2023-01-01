import React from 'react';
import AnimationLayout from '../../components/layout/animation-layout';
import RestictWidth from '../../components/layout/restrict-width';
import Information from '../../components/pages/about/information';
import Technologies from '../../components/pages/about/technologies';

const About = () => {
  return (
    <AnimationLayout>
      <section>
        <Information />
      </section>
    </AnimationLayout>
  );
};

export default About;

import React from 'react';
import AnimationLayout from '../../components/layout/animation-layout';
import Information from '../../components/pages/about/information';

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

import { Suspense, lazy } from 'react';

const Contact = lazy(() => import('@components/portfolio/Contact'));
const Hero = lazy(() => import('@components/portfolio/Hero'));
const Projects = lazy(() => import('@components/portfolio/Projects'));
const Services = lazy(() => import('@components/portfolio/Services'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </Suspense>
  );
}

export default Home;
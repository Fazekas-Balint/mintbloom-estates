import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { FeaturedListings } from './components/FeaturedListings';
import { Signature } from './components/Signature';
import { Story } from './components/Story';
import { Team } from './components/Team';
import { Journal } from './components/Journal';
import { Testimonials } from './components/Testimonials';
import { ScheduleForm } from './components/ScheduleForm';
import { Footer } from './components/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedListings />
        <Signature />
        <Story />
        <Team />
        <Journal />
        <Testimonials />
        <ScheduleForm />
      </main>
      <Footer />
    </>
  );
}

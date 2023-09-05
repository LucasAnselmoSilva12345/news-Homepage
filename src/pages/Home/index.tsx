import { Header } from '../../components/Header';
import { HorizontalBar } from '../../components/HorizontalBar';
import { SidebarHero } from '../../components/SidebarHero';
import WebThree from '../../assets/images/image-web-3-desktop.jpg';
import { MainHero, SectionHero } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <MainHero>
        <SectionHero>
          <div className="section-image">
            <img src={WebThree} alt="Banner web 3.0" />
          </div>
          <div className="section-content">
            <h1>The Bright Future of Web 3.0?</h1>
            <div>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling it's promise?
              </p>
              <button>Read More</button>
            </div>
          </div>
        </SectionHero>
        <SidebarHero />
      </MainHero>
      <HorizontalBar />
    </>
  );
}

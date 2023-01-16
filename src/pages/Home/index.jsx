import { Header } from '../../components/Header';
import { MainHero, SectionHero, SidebarHero } from './styles';

import WebThree from '../../assets/images/image-web-3-desktop.jpg';

export function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
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
        <SidebarHero>
          <h2>New</h2>
          <div>
            <h3>Hydrogen VS Eletric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </SidebarHero>
      </MainHero>
    </>
  );
}

import { Noticies } from '../Noticies';
import { Sidebar } from './styles';

export function SidebarHero() {
  return (
    <Sidebar>
      <h2>New</h2>

      <Noticies
        title="Hydrogen VS Eletric Cars"
        paragraph="Will hydrogen-fueled cars ever catch up to EVs?"
      />

      <Noticies
        title="The Downsides of AI Artistry"
        paragraph="What are the possible adverse effects of on-demand AI image
        generation?"
      />

      <Noticies
        title="Is VC Funding Drying Up?"
        paragraph="Private funding by VC firms is down 50% YOY. We take a look at what
        that means."
      />

      <Noticies
        title="Is VC Funding Drying Up?"
        paragraph="Private funding by VC firms is down 50% YOY. We take a look at what
        that means."
      />

      <Noticies
        title="Is VC Funding Drying Up?"
        paragraph="Private funding by VC firms is down 50% YOY. We take a look at what
        that means."
      />

      <Noticies
        title="Is VC Funding Drying Up?"
        paragraph="Private funding by VC firms is down 50% YOY. We take a look at what
        that means."
      />
    </Sidebar>
  );
}

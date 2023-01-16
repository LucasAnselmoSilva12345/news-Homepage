import { ContainerBlock, BlockItem, BlockContent } from './styles';

import imgRetroPCS from '../../assets/images/image-retro-pcs.jpg';
import imgTopLaptops from '../../assets/images/image-top-laptops.jpg';
import imgGamingGrowth from '../../assets/images/image-gaming-growth.jpg';

const blockFields = [
  {
    image: imgRetroPCS,
    id: '01',
    title: 'Reviving Retro PCs',
    subtitle: 'What happens when old PCs are given modern upgrades?',
  },
  {
    image: imgTopLaptops,
    id: '02',
    title: 'Top 10 Laptops of 2022',
    subtitle: 'Our best picks for various needs and budgets',
  },
  {
    image: imgGamingGrowth,
    id: '03',
    title: 'The Growth of Gaming',
    subtitle: 'How the pandemic has sparked fresh opportunities',
  },
];

export function Block() {
  return (
    <ContainerBlock>
      {blockFields.map(({ image, id, title, subtitle }) => (
        <BlockItem key={id}>
          <img src={image} alt={title} />
          <BlockContent>
            <strong>{id}</strong>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </BlockContent>
        </BlockItem>
      ))}
    </ContainerBlock>
  );
}

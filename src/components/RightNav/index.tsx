import { ListElementsNav } from './styles';

export function RightNav({ openMenu }) {
  return (
    <ListElementsNav openMenu={openMenu}>
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </ListElementsNav>
  );
}

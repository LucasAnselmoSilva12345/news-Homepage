import { ListElementsNav } from './styles';

interface RightNavProps {
  openMenu: boolean;
}

export function RightNav({ openMenu }: RightNavProps) {
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

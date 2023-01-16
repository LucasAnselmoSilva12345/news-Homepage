import { useState } from 'react';
import { RightNav } from '../RightNav';
import { List, X } from 'phosphor-react';
import { StyledMenuMobile } from './styles';

export function Mobile() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClickOpenMenu() {
    return setOpenMenu(!openMenu);
  }

  return (
    <>
      <StyledMenuMobile openMenu={openMenu} onClick={handleClickOpenMenu}>
        {openMenu ? (
          <X size={32} weight="light" className="iconMenuMobile" />
        ) : (
          <List size={32} weight="light" className="iconMenuMobile" />
        )}
      </StyledMenuMobile>
      <RightNav openMenu={openMenu} />
    </>
  );
}

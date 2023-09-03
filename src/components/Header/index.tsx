import WLogo from '../../assets/images/logo.svg';
import { Mobile } from '../Mobile';
import { NavBar } from './styles';

export function Header() {
  return (
    <header>
      <NavBar>
        <div className="imgLogo">
          <img src={WLogo} alt="Logo marca em formato da Letra W" />
        </div>
        <Mobile />
      </NavBar>
    </header>
  );
}

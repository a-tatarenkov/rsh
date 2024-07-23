import logo from '../../assets/bird-colorful-logo-gradient-vector_343694-1365.avif';
import './Header.css';

const Header = () => {
    return (
        <header className='Header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </nav>
        </header>
    )
}

export default Header;
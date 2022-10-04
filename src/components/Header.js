import PropTypes from 'prop-types';

const Header = ({name, title, description}) => {
    return (
        <header>
            <p>{title} {name} {description}</p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
    );
}

Header.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Header;
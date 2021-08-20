import ThemeContext from "../../context/themeContext";

function Footer() {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <footer className={`text-center m-3 text-${theme}`}>stopka</footer>
            )}
        </ThemeContext.Consumer>
    );
}

export default Footer;
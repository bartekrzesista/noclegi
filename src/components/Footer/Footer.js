import ThemeContext from "../../context/themeContext";

function Footer() {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <footer className={`text-center m-3 text-${theme}`}>
                    <p>Noclegi 2021</p>
                </footer>
            )}
        </ThemeContext.Consumer>
    );
}

export default Footer;
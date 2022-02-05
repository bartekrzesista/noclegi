import ThemeContext from "../../context/themeContext";

function Footer() {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <footer className={`text-center m-4 text-${theme}`}>
                    <p>Noclegi 2022</p>
                </footer>
            )}
        </ThemeContext.Consumer>
    );
}

export default Footer;
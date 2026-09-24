function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <p>© {currentYear}. cr1stoph.github.io</p>
        </footer>
    )
}
export default Footer;
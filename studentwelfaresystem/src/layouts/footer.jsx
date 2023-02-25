import '../assets/layout.scss'

function Footer() {
    return (
        <div className="footer-section">
            <footer className="bg-dark text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase">StudentWelfareSystem</h5>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc sit amet nibh facilisis sodales. Donec euismod, mauris ac posuere volutpat, ipsum nisi fringilla nunc, vitae maximus enim ex quis purus.
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-dark">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3">
                    &copy; 2023 My Site
                </div>
            </footer>
        </div>
    );
}

export default Footer;
import '../assets/Layout.scss'

function Footer() {
    return (
        <div className="footer-section">
            <footer className="bg-dark text-center text-lg-start">
                <div className="container p-1">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 mb-2 mb-md-0">
                            <h5 className="text-uppercase">Student Support</h5>
                            <p>
                                Student Welfare System is here in your service. Stay tuned for more services.
                            </p>
                        </div>
                        <div className="col-lg-1 mb-2 mb-md-0">
                            <h5 className="text-uppercase">Links</h5>
                            <a href="#!" className="">Link 1</a>{" "}
                            <a href="#!" className="">Link 2</a>
                        </div>
                        <div className="col-lg-3 text-center p-1">
                            &copy; 2023 Student Welfare System
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    GlobePay
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/about" className="hover:underline">
                        About Us
                    </Link>
                    <Link to="/faq" className="hover:underline">
                        FAQ
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
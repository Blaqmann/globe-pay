import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 p-6 mt-8">
            <div className="container mx-auto text-center">
                {/* Company Description */}
                <p className="text-sm mb-4 max-w-2xl mx-auto">
                    GlobePay is a product of Innovation Financial Services Limited, registered and regulated by financial authorities as a Money Service Business. We are a fintech company, not a bank. Money remittance and banking services are provided by our third-party licensed financial institution.
                </p>
                {/* Copyright */}
                <p className="text-sm mb-4">
                    © 2025 GlobePay. All rights reserved.
                </p>
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
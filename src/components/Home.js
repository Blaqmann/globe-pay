import { FaMoneyBillWave, FaBolt, FaLock, FaGlobe } from 'react-icons/fa';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// Animation variants for reusability
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger the children animations
        },
    },
};

const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

function Home() {
    // Slider settings for react-slick
    const sliderSettings = {
        dots: true, // Show dots below the slider
        infinite: true, // Loop the slides
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 slides at a time on desktop
        slidesToScroll: 1, // Scroll 1 slide at a time
        autoplay: true, // Auto-play the slider
        autoplaySpeed: 3000, // 3 seconds per slide
        responsive: [
            {
                breakpoint: 1024, // On screens smaller than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // On screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto">
            {/* Hero Section */}
            <motion.section
                className="bg-blue-50 py-16 flex flex-col md:flex-row items-center justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.div className="md:w-1/2 text-center md:text-left px-4" variants={fadeInUp}>
                    <motion.h1
                        className="text-5xl font-bold text-blue-800 mb-4"
                        variants={fadeInUp}
                    >
                        Send Money Anywhere, Anytime
                    </motion.h1>
                    <motion.p className="text-xl text-gray-600 mb-6" variants={fadeInUp}>
                        Fast, secure, and low-cost international transfers with GlobePay.
                    </motion.p>
                    <motion.button
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                        variants={scaleIn}
                    >
                        Download the App
                    </motion.button>
                </motion.div>
                <motion.div className="md:w-1/2 mt-8 md:mt-0 px-4" variants={fadeInUp}>
                    <motion.img
                        src="https://www.bankrate.com/brp/2021/12/30121820/Cards_How_To_Make_Payments_With_Your_Phone-1.jpg?auto=webp&optimize=high&crop=16:9"
                        alt="Phone Mockup"
                        className="rounded-lg max-h-96 mx-auto"
                        variants={fadeIn}
                    />
                </motion.div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                className="py-16 bg-gray-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-3xl font-bold text-center text-blue-800 mb-8"
                    variants={fadeInUp}
                >
                    Why Choose GlobePay?
                </motion.h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={staggerContainer}>
                    <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                        <FaMoneyBillWave className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Low Fees</h3>
                        <p className="text-gray-600">
                            Save more with our competitive rates—no hidden charges.
                        </p>
                    </motion.div>
                    <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                        <FaBolt className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Transfers</h3>
                        <p className="text-gray-600">
                            Send money instantly to over 100 countries.
                        </p>
                    </motion.div>
                    <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                        <FaLock className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Secure Payments</h3>
                        <p className="text-gray-600">
                            Your transactions are protected with top-tier encryption.
                        </p>
                    </motion.div>
                    <motion.div className="bg-white p-6 rounded-lg shadow-md text-center" variants={fadeInUp}>
                        <FaGlobe className="text-4xl text-orange-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Global Support</h3>
                        <p className="text-gray-600">
                            24/7 customer support in multiple languages.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* How It Works Section */}
            <motion.section
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-3xl font-bold text-center text-blue-800 mb-8"
                    variants={fadeInUp}
                >
                    How It Works
                </motion.h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer}>
                    <motion.div className="text-center" variants={fadeInUp}>
                        <div className="bg-orange-100 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            1
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Sign Up</h3>
                        <p className="text-gray-600">
                            Create your GlobePay account in minutes.
                        </p>
                    </motion.div>
                    <motion.div className="text-center" variants={fadeInUp}>
                        <div className="bg-orange-100 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            2
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Add Funds</h3>
                        <p className="text-gray-600">
                            Link your bank or card to add funds securely.
                        </p>
                    </motion.div>
                    <motion.div className="text-center" variants={fadeInUp}>
                        <div className="bg-orange-100 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            3
                        </div>
                        <h3 className="text-xl font-semibold text-blue-600 mb-2">Send Money</h3>
                        <p className="text-gray-600">
                            Transfer to anyone, anywhere, instantly.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Testimonials Section with Slider */}
            <motion.section
                className="py-16 bg-blue-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <motion.h2
                    className="text-3xl font-bold text-center text-blue-800 mb-8"
                    variants={fadeInUp}
                >
                    What Our Users Say
                </motion.h2>
                <Slider {...sliderSettings}>
                    <div className="px-3">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Maria S."
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <p className="text-gray-600 italic mb-4">
                                "GlobePay made sending money to my family so easy and affordable!"
                            </p>
                            <h3 className="text-lg font-semibold text-blue-600">Maria S.</h3>
                            <p className="text-gray-500">London, UK</p>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Amit P."
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <p className="text-gray-600 italic mb-4">
                                "I love how fast the transfers are—money arrives in minutes!"
                            </p>
                            <h3 className="text-lg font-semibold text-blue-600">Amit P.</h3>
                            <p className="text-gray-500">Mumbai, India</p>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://randomuser.me/api/portraits/women/65.jpg"
                                alt="Sarah L."
                                className="w-16 h-16 rounded-full mx-auto mb-4"
                            />
                            <p className="text-gray-600 italic mb-4">
                                "The best app for international transfers—secure and reliable."
                            </p>
                            <h3 className="text-lg font-semibold text-blue-600">Sarah L.</h3>
                            <p className="text-gray-500">New York, USA</p>
                        </div>
                    </div>
                </Slider>
            </motion.section>

            {/* Final CTA Section */}
            <motion.section
                className="bg-orange-100 py-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
            >
                <motion.h2
                    className="text-3xl font-bold text-blue-800 mb-4"
                    variants={fadeInUp}
                >
                    Ready to Send Money Globally?
                </motion.h2>
                <motion.p className="text-xl text-gray-600 mb-6" variants={fadeInUp}>
                    Download GlobePay now and start transferring with ease.
                </motion.p>
                <motion.button
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                    variants={scaleIn}
                >
                    Download the App
                </motion.button>
            </motion.section>
        </div>
    );
}

export default Home;
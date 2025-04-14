import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

function About() {
    return (
        <motion.div
            className="container mx-auto py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h1
                className="text-4xl font-bold text-center text-blue-800 mb-8"
                variants={fadeInUp}
            >
                About GlobePay
            </motion.h1>
            <motion.p
                className="text-lg text-center text-gray-600 mb-12"
                variants={fadeInUp}
            >
                We’re on a mission to make global payments simple, fast, and affordable for everyone.
            </motion.p>

            {/* Mission Section */}
            <motion.section
                className="bg-blue-50 py-12 px-4 rounded-lg mb-12"
                variants={fadeInUp}
            >
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
                    Our Mission
                </h2>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
                    At GlobePay, we believe that sending money across borders should be as easy as sending a text. We’re committed to providing secure, low-cost, and instant transfers to help you stay connected with loved ones, no matter where they are.
                </p>
            </motion.section>

            {/* Team Section */}
            <motion.section variants={staggerContainer}>
                <motion.h2
                    className="text-3xl font-bold text-center text-blue-800 mb-8"
                    variants={fadeInUp}
                >
                    Meet Our Team
                </motion.h2>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerContainer}>
                    <motion.div className="text-center" variants={fadeInUp}>
                        <img
                            src="https://randomuser.me/api/portraits/men/45.jpg"
                            alt="John Doe"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">John Doe</h3>
                        <p className="text-gray-500">CEO & Founder</p>
                        <p className="text-gray-600 mt-2">
                            John started GlobePay to revolutionize global payments with a focus on transparency.
                        </p>
                    </motion.div>
                    <motion.div className="text-center" variants={fadeInUp}>
                        <img
                            src="https://randomuser.me/api/portraits/women/22.jpg"
                            alt="Jane Smith"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Jane Smith</h3>
                        <p className="text-gray-500">Head of Operations</p>
                        <p className="text-gray-600 mt-2">
                            Jane ensures every transfer is seamless and secure for our users.
                        </p>
                    </motion.div>
                    <motion.div className="text-center" variants={fadeInUp}>
                        <img
                            src="https://randomuser.me/api/portraits/men/88.jpg"
                            alt="Alex Brown"
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-blue-600">Alex Brown</h3>
                        <p className="text-gray-500">Tech Lead</p>
                        <p className="text-gray-600 mt-2">
                            Alex leads our tech team to build the best payment platform in the world.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}

export default About;
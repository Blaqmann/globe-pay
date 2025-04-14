import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Contact() {
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
                Contact Us
            </motion.h1>
            <motion.p
                className="text-lg text-center text-gray-600 mb-12"
                variants={fadeInUp}
            >
                Have questions? Reach out to us—we’re here to help!
            </motion.p>
            <motion.div
                className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
                variants={fadeInUp}
            >
                <form>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                            rows="5"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default Contact;
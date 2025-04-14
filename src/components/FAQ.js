import { useState } from 'react';
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

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does a transfer take?",
            answer: "Most transfers with GlobePay are instant, but some may take up to 24 hours depending on the destination.",
        },
        {
            question: "Are there any hidden fees?",
            answer: "No, we pride ourselves on transparency. All fees are clearly shown before you confirm your transfer.",
        },
        {
            question: "Is GlobePay secure?",
            answer: "Yes, we use top-tier encryption to protect your transactions and personal information.",
        },
        {
            question: "What currencies can I send?",
            answer: "GlobePay supports over 50 currencies, including USD, EUR, GBP, and more.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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
                Frequently Asked Questions
            </motion.h1>
            <motion.p
                className="text-lg text-center text-gray-600 mb-12"
                variants={fadeInUp}
            >
                Got questions? We’ve got answers.
            </motion.p>
            <motion.div className="max-w-3xl mx-auto" variants={staggerContainer}>
                {faqs.map((faq, index) => (
                    <motion.div key={index} className="mb-4" variants={fadeInUp}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-4 bg-blue-50 rounded-lg flex justify-between items-center focus:outline-none"
                        >
                            <span className="text-lg font-semibold text-blue-800">
                                {faq.question}
                            </span>
                            <span className="text-2xl text-orange-500">
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 bg-white rounded-b-lg border-t border-gray-200">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default FAQ;
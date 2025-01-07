"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className={styles.heroTitle}>The Wonders of AI in the Digital Age</h1>
        <p className={styles.heroSubtitle}>
          Explore how Artificial Intelligence is transforming the way we live,
          work, and interact in this dynamic, ever-evolving world.
        </p>
        <motion.button
          className={styles.heroButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className={styles.features}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
      >
        <div className={styles.feature}>
          <img
            src="https://www.itbusinessedge.com/wp-content/uploads/2021/07/Robotic-Process-Automation.jpeg"
            alt="AI Technology"
            className={styles.featureImage}
          />
          <h2 className={styles.featureTitle}>Smarter Automation</h2>
          <p className={styles.featureText}>
            AI streamlines processes, automates repetitive tasks, and increases
            efficiency in industries worldwide.
          </p>
        </div>
        <div className={styles.feature}>
          <img
            src="https://th.bing.com/th/id/OIP.xnORQuKt8EbA0OMTqp70SwHaE8?w=825&h=550&rs=1&pid=ImgDetMain"
            alt="Robotics"
            className={styles.featureImage}
          />
          <h2 className={styles.featureTitle}>Intelligent Robotics</h2>
          <p className={styles.featureText}>
            From autonomous vehicles, humanoids to robotic surgery, AI-powered machines
            are reshaping the future.
          </p>
        </div>
        <div className={styles.feature}>
          <img
            src="https://www.ariane.com/hubfs/2023/Blog/statistics%20Pierre%20blog%20post/11[2].png"
            alt="AI and Data"
            className={styles.featureImage}
          />
          <h2 className={styles.featureTitle}>Data-Driven Insights</h2>
          <p className={styles.featureText}>
            With powerful algorithms, AI helps us make better decisions using
            data analysis and predictions.
          </p>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className={styles.cta}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className={styles.ctaTitle}>Ready to Embrace the AI Revolution?</h2>
        <motion.a
          href="#"
          className={styles.ctaButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.a>
      </motion.section>
    </div>
  );
}

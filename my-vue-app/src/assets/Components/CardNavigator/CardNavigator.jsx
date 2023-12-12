import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../HeartButton/HeartButton";

const CardNavigator = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateTrigger, setAnimateTrigger] = useState(false);

  const toggleAnimation = () => {
    setAnimateTrigger((prev) => !prev);
  };

  const goToNextCard = () => {
    if (data && data.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      toggleAnimation();
    }
  };

  const goToPreviousCard = () => {
    if (data && data.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + data.length) % data.length
      );
      toggleAnimation();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goToNextCard();
      }
      if (event.key === "ArrowLeft") {
        goToPreviousCard();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, goToNextCard, goToPreviousCard]);

  const cardVariants = {
    initial: { opacity: 0, x: -100, zIndex: 0 },
    animate: { opacity: 1, x: 0, zIndex: 1 },
    exit: { opacity: 0, x: 100, zIndex: 0 },
  };

  return (
    <>
      <div>
        {data && data.length > 0 && (
          <AnimatePresence>
            <motion.div
              key={`${currentIndex}-${animateTrigger}`}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1 }}
            >
              <div className="flex  justify-center pb-[50px]">
                <img
                  src={data[currentIndex].images?.small}
                  alt={data[currentIndex].name}
                />
              </div>
              <h2>
                <strong>Name:</strong> {data[currentIndex].name}
              </h2>
              <p>
                <strong>Type:</strong> {data[currentIndex].types.join(", ")}
              </p>
              <p>
                <strong>HP:</strong> {data[currentIndex].hp}
              </p>
              <ol>
                {data[currentIndex].attacks.map((attack, index) => (
                  <li key={index}>
                    <p>
                      <strong>Attack Name:</strong> {attack.name}
                    </p>
                    <p>
                      <strong>Damage:</strong> {attack.damage}
                    </p>
                    <p>
                      <strong>Description:</strong> {attack.text}
                    </p>
                  </li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        )}
        <div className="flex width-full justify-around">
          <button onClick={goToPreviousCard}>Previous</button>
          <button onClick={goToNextCard}>Next</button>
        </div>
      </div>
    </>
  );
};

export default CardNavigator;

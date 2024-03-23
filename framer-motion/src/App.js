import "./index.css";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

function App() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    const scrollPercentage = scrollTop / maxScroll;
    const translateY = -scrollPercentage * 100; // Calculate translateY based on scroll position

    controls.start({ y: translateY });
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: "300px",
        overflowY: "scroll",
        border: "1px solid #ccc",
        padding: "20px",
        width: "600px",
        height: "400px",
        margin: "auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        style={{ height: "1000px" }}
      >
        <h1>Smooth Scrolling with Framer Motion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          felis quam, ut vulputate risus fermentum ut. Sed eget eros sem.
          Curabitur auctor arcu id eros fermentum, eget finibus lacus dictum.
        </p>
        <h1>Smooth Scrolling with Framer Motion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          felis quam, ut vulputate risus fermentum ut. Sed eget eros sem.
          Curabitur auctor arcu id eros fermentum, eget finibus lacus dictum.
        </p>
        <h1>Smooth Scrolling with Framer Motion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          felis quam, ut vulputate risus fermentum ut. Sed eget eros sem.
          Curabitur auctor arcu id eros fermentum, eget finibus lacus dictum.
        </p>
        <h1>Smooth Scrolling with Framer Motion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          felis quam, ut vulputate risus fermentum ut. Sed eget eros sem.
          Curabitur auctor arcu id eros fermentum, eget finibus lacus dictum.
        </p>
        <h1>Smooth Scrolling with Framer Motion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          felis quam, ut vulputate risus fermentum ut. Sed eget eros sem.
          Curabitur auctor arcu id eros fermentum, eget finibus lacus dictum.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 100, x: -100 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
        >
          <h1>Smooth Scrolling with Framer Motion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula felis quam, ut vulputate risus fermentum ut. Sed eget eros
            sem. Curabitur auctor arcu id eros fermentum, eget finibus lacus
            dictum.
          </p>
          <h1>Smooth Scrolling with Framer Motion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula felis quam, ut vulputate risus fermentum ut. Sed eget eros
            sem. Curabitur auctor arcu id eros fermentum, eget finibus lacus
            dictum.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
        >
          <h1>Smooth Scrolling with Framer Motion</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula felis quam, ut vulputate risus fermentum ut. Sed eget eros
            sem. Curabitur auctor arcu id eros fermentum, eget finibus lacus
            dictum.
          </p>
          <h1>Smooth Scrolling with Framer Motion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula felis quam, ut vulputate risus fermentum ut. Sed eget eros
            sem. Curabitur auctor arcu id eros fermentum, eget finibus lacus
            dictum.
          </p>
          <h1>Smooth Scrolling with Framer Motion</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula felis quam, ut vulputate risus fermentum ut. Sed eget eros
            sem. Curabitur auctor arcu id eros fermentum, eget finibus lacus
            dictum.
          </p>
        </motion.div>
        {/* Add more content to extend the scrollable area */}
      </motion.div>
    </div>
  );
}

export default App;

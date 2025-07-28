import React from 'react';
import { motion } from 'framer-motion';
import './GridShowcase.css';

// --- Animation Variants (No changes here) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

// --- Grid Configuration (No changes here) ---
const gridItemsConfig = [
  { id: 1, type: 'image', colSpan: 2, rowSpan: 2 },
  { id: 2, type: 'text', colSpan: 2, rowSpan: 1 },
  { id: 3, type: 'image', colSpan: 1, rowSpan: 1 },
  { id: 4, type: 'text', colSpan: 1, rowSpan: 1 },
  { id: 5, type: 'text', colSpan: 1, rowSpan: 2 },
  { id: 6, type: 'image', colSpan: 2, rowSpan: 1 },
  { id: 7, type: 'image', colSpan: 1, rowSpan: 1 },
  { id: 8, type: 'text', colSpan: 2, rowSpan: 1 },
  { id: 9, type: 'image', colSpan: 2, rowSpan: 2 },
  { id: 10, type: 'text', colSpan: 1, rowSpan: 1 },
  { id: 11, type: 'image', colSpan: 2, rowSpan: 1 },
  { id: 12, type: 'text', colSpan: 1, rowSpan: 1 },
  { id: 13, type: 'image', colSpan: 1, rowSpan: 1 },
  { id: 14, type: 'text', colSpan: 2, rowSpan: 1 },
  { id: 15, type: 'text', colSpan: 1, rowSpan: 1 },
  { id: 16, type: 'image', colSpan: 2, rowSpan: 1 },
  { id: 17, type: 'text', colSpan: 1, rowSpan: 1 },
  { id: 18, type: 'image', colSpan: 2, rowSpan: 1 },
  { id: 19, type: 'image', colSpan: 1, rowSpan: 1 },
  { id: 20, type: 'text', colSpan: 2, rowSpan: 1 },
];


const GridShowcase = () => {
  return (
    <motion.div
      className="marketinggrid-container-20"
      variants={containerVariants}
      initial="hidden"
      // ✅ CHANGED THIS LINE: Triggers animation when the element is in view
      whileInView="visible"
      // ✅ ADDED THIS LINE: Ensures the animation runs only once
      viewport={{ once: true }} 
    >
      {gridItemsConfig.map((item) => (
        <motion.div
          key={item.id}
          className="marketinggrid-item-20"
          style={{
            gridColumn: `span ${item.colSpan}`,
            gridRow: `span ${item.rowSpan}`,
          }}
          variants={itemVariants}
        >
          {item.type === 'image' ? (
            <img
              src={`https://picsum.photos/seed/${item.id + 20}/600/600`}
              alt={`Placeholder for item ${item.id}`}
            />
          ) : (
            <div className="text-content">
              <h3>Item {item.id}</h3>
              <p>Your content here.</p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GridShowcase;
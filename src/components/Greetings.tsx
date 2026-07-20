import React from 'react';

export default function Greeting() {
  return (
    <div className="greeting-container">
      <span className="greeting-text">Hello</span>
      <span className="wave">👋</span>
      <style>{`
        .greeting-container {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .greeting-text {
            background: linear-gradient(to right, #c084fc, #6366f1, #3b82f6);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            /* Accessible fallback if gradient fails, though transparent overrides it */
        }
        .wave {
            font-size: 3rem;
            animation: wave 2.5s infinite;
            display: inline-block;
            transform-origin: 70% 70%;
        }
        @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
        }
        @media (max-width: 600px) {
            .greeting-container {
                font-size: 2rem;
            }
            .wave {
                font-size: 2rem;
            }
        }
      `}</style>
    </div>
  );
}

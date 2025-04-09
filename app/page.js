"use client"
import { useState, useEffect } from "react"

export default function Home() {
  const [opened, setOpened] = useState(false)
  const [revealed, setRevealed] = useState(false)

  // Array for several falling flower elements.
  const flowers = [
    { left: "10%", delay: "0.5s", size: "2rem" },
    { left: "30%", delay: "1s", size: "1.5rem" },
    { left: "50%", delay: "0.8s", size: "2rem" },
    { left: "70%", delay: "1.2s", size: "1.8rem" },
    { left: "20%", delay: "0.3s", size: "1.5rem" },
    { left: "80%", delay: "1.5s", size: "2rem" },
    { left: "40%", delay: "0.7s", size: "1.5rem" },
    { left: "60%", delay: "1.1s", size: "1.8rem" },
    { left: "5%", delay: "0.9s", size: "1.5rem" },
    { left: "85%", delay: "1.3s", size: "2rem" },
  ]

  // Once the envelope starts to open, wait for a short delay then reveal the message
  useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => setRevealed(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [opened])

  return (
    <div className="w-full h-screen bg-gradient-to-br from-teal-300 to-blue-500 relative overflow-hidden">
      {/* Envelope view */}
      {!revealed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000">
          <div className="w-80 h-56 bg-white rounded-lg shadow-2xl relative overflow-hidden">
            {/* Envelope flap with open animation */}
            <div
              className={`absolute top-0 left-0 w-full h-1/2 bg-gray-200 border-b border-gray-400 rounded-t-lg transform transition-transform duration-700 ease-in-out ${
                opened ? "rotate-[-30deg] -translate-y-3" : ""
              }`}
            ></div>
            {/* Envelope body */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
            {/* Envelope label with button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <span className="text-4xl font-bold text-gray-700">Open Me</span>
              {!opened && (
                <button
                  onClick={() => setOpened(true)}
                  className="px-6 py-4 m-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg transform transition-transform hover:scale-105 hover:cursor-pointer"
                >
                  Open Envelope
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Revealed message with falling flowers */}
      {revealed && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-orange transition-opacity duration-1000"
        >
          {/* Falling flower animations */}
          {flowers.map((flower, index) => (
            <span
              key={index}
              className="absolute animate-fall"
              style={{
                left: flower.left,
                animationDelay: flower.delay,
                fontSize: flower.size,
              }}
            >
              🌸  🎉
            </span>
            
          ))}
          {/* Main message container */}
          <div className="z-10 text-center p-8 bg-blue-600 bg-opacity-90 rounded-lg shadow-xl max-w-xl mx-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <h2 className="text-4xl font-bold text-black animate-marquee whitespace-nowrap">
              💗 Thank you, cherished peers and delightful Volleyball Juniors, for giving me such a grand farewell. Your heartfelt send-off has made my departure truly memorable✨✨ 
              </h2>
            </div>
            <p className="text-2xl mt-4 text-gray-300 font-bold hover:cursor-pointer">
          {`Your passion and vibrant energy made every moment unforgettable, gifting me with cherished memories that have enriched my life. May your future blossom with endless joy, success, and boundless opportunities. I have learned invaluable lessons from each one of you. 🥳`
    .split(" ")
    .map((word, index) => (
      <span
        key={index}
        className="inline-block transition-transform duration-200 hover:scale-110 mr-1 hover:text-black"
      >
        {word}
      </span>
    ))}
</p>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-fall {
          animation: fall 3s infinite;
        }
        @keyframes fall {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}

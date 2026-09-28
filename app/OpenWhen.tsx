"use client";

import { useState } from "react";

type OpenWhenMessage = {
  title: string;
  shortTitle: string;
  message: string;
  emoji: string;
};

const messages: OpenWhenMessage[] = [
  {
    title: "Open when you miss me",
    shortTitle: "you miss me",
    emoji: "💌",
    message:
      "hii babyyy ,,i know you miss me right now and Goddd i miss you too soo fucking much and i'm thinking about you rn alottt. Even when we're not together, you're still somewhere in my thoughts. So come here mentally and give your wife a hug. I love you, mami. 🤎",
  },
  {
    title: "Open when you're having a bad day",
    shortTitle: "you're having a bad day",
    emoji: "🌧️",
    message:
      "hiii mami,,i know youre not having a great time rn but remember were so strong baby and weve gone through other bad things and well get through this as well,,, niko nyuma yako ,,kando yako,,NDANI yako ,,na nakupenda. You don't have to have everything figured out today. Just breathe, baby. I'm with you. 🤎",
  },
  {
    title: "Open when you need reminding that I love you",
    shortTitle: "you need reminding",
    emoji: "❤️",
    message:
      "heyyy my princesss,,i just want to tell you that i love you soo much ,,youre my gem ,,my perfect flower ,,, i adore you so much. In case you forgot for even one second, let me remind you: you are loved, you are precious to me, and you will always have a very special place in my heart. 🤎",
  },
  {
    title: "Open when you're overthinking",
    shortTitle: "you're overthinking",
    emoji: "🫶🏽",
    message:
      "heyyy babyy ,, breathee ,, calm down ,, calm down tena mara ya mwisho ,,haya sasa ,,come 🥹. Trust me im there,,holding your hand ,, caressing you and definitely not touching your thighs 😭. Now breathe again. Whatever is running through your head doesn't need to be solved all at once. One thing at a time, mami. I've got you. 🤎",
  },
  {
    title: "Open when you need a smile",
    shortTitle: "you need a smile",
    emoji: "🥹",
    message:
      "i thought we talked about this,,,likee mbona usmile? Unataka kusmileia nani wewe mnyama? Isipokuwa mimi na Jontezz 😭. Ebu smile mami,,,we have so much to smile about okayyy. Now give me that pretty smile. Yes, THAT one. 🤎",
  },
];

export default function OpenWhen() {
  const [selected, setSelected] = useState<OpenWhenMessage | null>(null);

  return (
    <section className="open-when-page">
      <div className="background-heart heart-one">♡</div>
      <div className="background-heart heart-two">♡</div>
      <div className="background-heart heart-three">♡</div>

      <div className="open-when-header">
        <p className="eyebrow">FOR MY BUNNY</p>

        <h1>
          Open when...
        </h1>

        <p className="subtitle">
          Little pieces of me for the moments when you need them.
        </p>

        <div className="tiny-divider">
          <span>♡</span>
          <span>🐰</span>
          <span>♡</span>
        </div>
      </div>

      <div className="envelope-grid">
        {messages.map((item) => (
          <button
            key={item.title}
            className="envelope-card"
            onClick={() => setSelected(item)}
          >
            <div className="envelope-top">
              <span>{item.emoji}</span>
            </div>

            <div className="envelope">
              <div className="envelope-flap" />

              <div className="envelope-paper">
                <span>♡</span>
              </div>
            </div>

            <div className="envelope-label">
              <span>OPEN WHEN</span>
              <strong>{item.shortTitle}</strong>
            </div>

            <div className="open-text">
              tap to open →
            </div>
          </button>
        ))}
      </div>

      <div className="bottom-note">
        <span>🐰</span>

        <p>
          You don't have to open them all at once.
          <br />
          Keep some for the days you need them most.
        </p>

        <span>♡</span>
      </div>

      {selected && (
        <div className="letter-overlay">
          <div className="letter-modal">
            <button
              className="close-button"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="modal-bunny">🐰</div>

            <p className="modal-eyebrow">
              A LITTLE MESSAGE FROM YOUR WIFE
            </p>

            <div className="letter-paper">
              <div className="paper-heart">♡</div>

              <h2>{selected.title}</h2>

              <div className="message">
                {selected.message}
              </div>

              <div className="letter-signature">
                always your wife to bunny
                <br />
                ♡
              </div>
            </div>

            <button
              className="close-letter"
              onClick={() => setSelected(null)}
            >
              fold it back up ♡
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .open-when-page {
          min-height: 100%;
          padding: 70px 35px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(185, 211, 223, 0.35),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(169, 130, 130, 0.18),
              transparent 30%
            ),
            #f6f1ea;
          color: #3b2925;
        }

        .open-when-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 55px;
          position: relative;
          z-index: 2;
        }

        .eyebrow,
        .modal-eyebrow {
          color: #87958a;
          font-size: 11px;
          letter-spacing: 4px;
        }

        .open-when-header h1 {
          font-size: clamp(50px, 8vw, 90px);
          font-weight: 400;
          margin: 10px 0;
        }

        .subtitle {
          color: #76645e;
          line-height: 1.7;
        }

        .tiny-divider {
          display: flex;
          justify-content: center;
          gap: 12px;
          color: #a98282;
          margin-top: 20px;
        }

        .background-heart {
          position: absolute;
          color: #a98282;
          opacity: 0.3;
          font-size: 45px;
          animation: floatHeart 5s ease-in-out infinite;
        }

        .heart-one {
          top: 12%;
          left: 5%;
        }

        .heart-two {
          right: 7%;
          top: 25%;
          animation-delay: 1s;
        }

        .heart-three {
          bottom: 10%;
          left: 10%;
          animation-delay: 2s;
        }

        @keyframes floatHeart {
          0%,
          100% {
            transform: translateY(0) rotate(-5deg);
          }

          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .envelope-grid {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          position: relative;
          z-index: 2;
        }

        .envelope-card {
          border: 1px solid rgba(59, 41, 37, 0.12);
          background: rgba(255, 253, 250, 0.8);
          padding: 25px 20px 30px;
          cursor: pointer;
          color: #3b2925;
          transition: 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .envelope-card:hover {
          transform: translateY(-8px) rotate(-1deg);
          box-shadow: 0 20px 35px rgba(59, 41, 37, 0.12);
        }

        .envelope-card:nth-child(2):hover,
        .envelope-card:nth-child(5):hover {
          transform: translateY(-8px) rotate(1deg);
        }

        .envelope-top {
          height: 30px;
          text-align: right;
          font-size: 22px;
        }

        .envelope {
          width: 170px;
          height: 115px;
          margin: 5px auto 25px;
          position: relative;
          background: #d8c2b7;
          box-shadow: 0 10px 20px rgba(59, 41, 37, 0.12);
          overflow: hidden;
        }

        .envelope::before,
        .envelope::after {
          content: "";
          position: absolute;
          bottom: 0;
          width: 0;
          height: 0;
          border-style: solid;
          z-index: 3;
        }

        .envelope::before {
          left: 0;
          border-width: 0 85px 65px 0;
          border-color: transparent #c6aaa0 transparent transparent;
        }

        .envelope::after {
          right: 0;
          border-width: 65px 85px 0 0;
          border-color: #cdb2a8 transparent transparent transparent;
        }

        .envelope-flap {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 0;
          border-left: 85px solid transparent;
          border-right: 85px solid transparent;
          border-top: 65px solid #e3d0c8;
          z-index: 4;
        }

        .envelope-paper {
          position: absolute;
          width: 90px;
          height: 70px;
          background: #fffdfa;
          left: 40px;
          top: 35px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a98282;
          font-size: 24px;
        }

        .envelope-label {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .envelope-label span {
          font-size: 9px;
          letter-spacing: 3px;
          color: #87958a;
        }

        .envelope-label strong {
          font-size: 21px;
          font-weight: 400;
        }

        .open-text {
          margin-top: 20px;
          font-size: 11px;
          color: #a98282;
          letter-spacing: 1px;
        }

        .envelope-card:nth-child(2) {
          background: rgba(185, 211, 223, 0.35);
        }

        .envelope-card:nth-child(3) {
          background: rgba(227, 212, 212, 0.45);
        }

        .envelope-card:nth-child(4) {
          background: rgba(220, 225, 217, 0.45);
        }

        .envelope-card:nth-child(5) {
          background: rgba(222, 209, 199, 0.45);
        }

        .bottom-note {
          max-width: 600px;
          margin: 60px auto 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 25px;
          text-align: center;
          color: #76645e;
          font-size: 14px;
          line-height: 1.7;
          position: relative;
          z-index: 2;
        }

        .bottom-note span {
          color: #a98282;
          font-size: 30px;
        }

        .letter-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;
          background: rgba(35, 25, 22, 0.78);
          backdrop-filter: blur(7px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 25px;
          overflow-y: auto;
        }

        .letter-modal {
          width: min(700px, 100%);
          text-align: center;
          position: relative;
        }

        .close-button {
          position: absolute;
          right: -10px;
          top: -15px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: #f6f1ea;
          color: #3b2925;
          font-size: 27px;
          cursor: pointer;
          z-index: 10;
        }

        .modal-bunny {
          font-size: 65px;
          margin-bottom: 10px;
          animation: bunnyBounce 3s ease-in-out infinite;
        }

        @keyframes bunnyBounce {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        .modal-eyebrow {
          color: #d8c7c0;
          margin-bottom: 15px;
        }

        .letter-paper {
          background:
            repeating-linear-gradient(
              to bottom,
              #fffdfa 0,
              #fffdfa 31px,
              rgba(135, 149, 138, 0.16) 32px
            );
          padding: 55px 65px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
          position: relative;
          text-align: left;
        }

        .paper-heart {
          text-align: center;
          color: #a98282;
          font-size: 28px;
          margin-bottom: 15px;
        }

        .letter-paper h2 {
          text-align: center;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 400;
          margin: 0 0 35px;
          color: #3b2925;
        }

        .message {
          color: #5e504b;
          font-size: 17px;
          line-height: 2;
          white-space: pre-line;
        }

        .letter-signature {
          margin-top: 45px;
          text-align: right;
          color: #3b2925;
          line-height: 1.7;
          font-style: italic;
        }

        .close-letter {
          margin-top: 20px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #fff;
          border-radius: 999px;
          padding: 12px 20px;
          cursor: pointer;
        }

        @media (max-width: 800px) {
          .envelope-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .open-when-page {
            padding: 50px 18px;
          }

          .envelope-grid {
            grid-template-columns: 1fr;
            max-width: 350px;
          }

          .letter-paper {
            padding: 40px 25px;
          }

          .message {
            font-size: 15px;
            line-height: 1.9;
          }

          .bottom-note span {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
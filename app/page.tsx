 "use client";

import { useRef, useState } from "react";

type Memory = {
  image: string;
  title: string;
  text: string;
};

type OpenWhenMessage = {
  title: string;
  message: string;
};

const memories: Memory[] = [
  {
    image: "/photos/us-1.png",
    title: "Us",
    text: "One of those little moments that became part of our story.",
  },
  {
    image: "/photos/us-2.png",
    title: "My favorite person",
    text: "Just us, being us.",
  },
  {
    image: "/photos/her-1.jpg",
    title: "My bunny",
    text: "Pretty, crazy, strong and completely you.",
  },
  {
    image: "/photos/us-3.png",
    title: "BUNNIES",
    text: "A little piece of our world.",
  },
  {
    image: "/photos/her-2.jpg",
    title: "My princess",
    text: "The girl behind so many of my favorite memories.",
  },
  {
    image: "/photos/us-4.png",
    title: "Always us",
    text: "Through everything, still us.",
  },
];

const openWhenMessages: OpenWhenMessage[] = [
  {
    title: "Open when you miss me",
    message:
      "hii babyyy ,,i know you miss me right now and Goddd i miss you too soo fucking much and i'm thinking about you rn alottt. Even when we're not together, you're still somewhere in my thoughts. So come here mentally and give your wife a hug. I love you, mami. 🤎",
  },
  {
    title: "Open when you're having a bad day",
    message:
      "hiii mami,,i know youre not having a great time rn but remember were so strong baby and weve gone through other bad things and well get through this as well,,, niko nyuma yako ,,kando yako,,NDANI yako ,,na nakupenda. You don't have to have everything figured out today. Just breathe, baby. I'm with you. 🤎",
  },
  {
    title: "Open when you need reminding that I love you",
    message:
      "heyyy my princesss,,i just want to tell you that i love you soo much ,,youre my gem ,,my perfect flower ,,, i adore you so much. In case you forgot for even one second, let me remind you: you are loved, you are precious to me, and you will always have a very special place in my heart. 🤎",
  },
  {
    title: "Open when you're overthinking",
    message:
      "heyyy babyy ,, breathee ,,calm down ,,calm down tena mara ya mwisho ,,haya sasa ,,come 🥹, trust me im there,,holding your hand ,, caressing you and definitely not touching your thighs 😭. Now breathe again. Whatever is running through your head doesn't need to be solved all at once. One thing at a time, mami. I've got you. 🤎",
  },
  {
    title: "Open when you need a smile",
    message:
      "i thought we talked about this,,,likee mbona usmile? Unataka kusmileia nani wewe mnyama? Isipokuwa mimi na Jontezz 😭. Ebu smile mami,,,we have so much to smile about okayyy. Now give me that pretty smile. Yes, THAT one. 🤎",
  },
];

const littleThings = [
  "Your little dances when you're showing me outfits.",
  "The way we tease each other about people we don't like.",
  "Our deep talks about absolutely everything.",
  "The way you can be completely crazy and still be so beautiful.",
  "Your strong personality.",
  "The way you put me in my place when I need it.",
  "Your voice.",
  "Your official fits.",
  "The fact that somehow, you became home.",
];

const songs = [
  {
    title: "For Certain",
    artist: "PartyNextDoor",
    file: "/music/for-certain.mp3",
  },
  {
    title: "Only You",
    artist: "PartyNextDoor",
    file: "/music/only-you.mp3",
  },
  {
    title: "Say You Won't Let Go",
    artist: "James Arthur",
    file: "/music/say-you-wont-let-go.mp3",
  },
];

function Bunny({ className = "" }: { className?: string }) {
  return (
    <div className={`bunny ${className}`}>
      <div className="ear ear-left" />
      <div className="ear ear-right" />
      <div className="bunny-head">
        <span className="eye eye-left" />
        <span className="eye eye-right" />
        <span className="nose" />
      </div>
      <div className="bunny-body" />
    </div>
  );
}

function Creature({
  color = "blue",
  className = "",
}: {
  color?: "blue" | "pink" | "lavender" | "brown";
  className?: string;
}) {
  return (
    <div className={`creature creature-${color} ${className}`}>
      <div className="creature-ear left" />
      <div className="creature-ear right" />
      <div className="creature-face">
        <span />
        <span />
        <i />
      </div>
      <div className="creature-body" />
    </div>
  );
}

function SoundtrackPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [playing, setPlaying] = useState(false);

  const playSong = async (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = songs[index].file;
    audio.load();

    setCurrentSong(index);

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      if (!audio.src || !audio.src.includes(songs[currentSong].file)) {
        audio.src = songs[currentSong].file;
        audio.load();
      }

      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const nextSong = () => {
    const next = (currentSong + 1) % songs.length;
    playSong(next);
  };

  const previousSong = () => {
    const previous = (currentSong - 1 + songs.length) % songs.length;
    playSong(previous);
  };

  return (
    <section className="soundtrack-section">
      <audio
        ref={audioRef}
        onEnded={nextSong}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className="soundtrack-card">
        <div className={`vinyl ${playing ? "spinning" : ""}`}>
          <div className="vinyl-line line-one" />
          <div className="vinyl-line line-two" />
          <div className="vinyl-center">♡</div>
        </div>

        <div className="soundtrack-info">
          <p className="section-label">OUR SOUNDTRACK</p>

          <h2>Songs that feel like us.</h2>

          <div className="now-playing">
            <span className="playing-dot" />
            <div>
              <small>NOW PLAYING</small>
              <strong>{songs[currentSong].title}</strong>
              <span>{songs[currentSong].artist}</span>
            </div>
          </div>

          <div className="player-controls">
            <button onClick={previousSong} aria-label="Previous song">
              ↶
            </button>

            <button
              className="play-button"
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? "Ⅱ" : "▶"}
            </button>

            <button onClick={nextSong} aria-label="Next song">
              ↷
            </button>
          </div>

          <div className="song-list">
            {songs.map((song, index) => (
              <button
                key={song.title}
                className={`song ${
                  currentSong === index ? "song-active" : ""
                }`}
                onClick={() => playSong(index)}
              >
                <span>0{index + 1}</span>

                <div>
                  <strong>{song.title}</strong>
                  <small>{song.artist}</small>
                </div>

                <b>{currentSong === index && playing ? "♫" : "♡"}</b>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedOpenWhen, setSelectedOpenWhen] =
    useState<OpenWhenMessage | null>(null);
  const [proposalAccepted, setProposalAccepted] = useState(false);

  if (!entered) {
    return (
      <>
        <main className="welcome-screen">
          <div className="welcome-glow" />

          <Creature color="blue" className="welcome-creature one" />
          <Creature color="pink" className="welcome-creature two" />

          <div className="welcome-content">
            <div className="tiny-label">BUNNIES ♡</div>

            <Bunny className="welcome-bunny" />

            <p className="eyebrow">A PRIVATE LITTLE WORLD</p>

            <h1>
              Welcome home,
              <br />
              <span>Bunny 🤎</span>
            </h1>

            <p className="welcome-text">A little place for us.</p>

            <button
              className="enter-button"
              onClick={() => setEntered(true)}
            >
              Tap to enter our little world
              <span>→</span>
            </button>

            <p className="welcome-note">made with love, for my bunny</p>
          </div>
        </main>

        <style jsx global>{styles}</style>
      </>
    );
  }

  return (
    <>
      <main className="site">
        <nav className="nav">
          <button className="logo" onClick={() => setActiveSection(null)}>
            BUNNIES<span>♡</span>
          </button>

          <span className="nav-note">our little world</span>
        </nav>

        <section className="hero">
          <div className="hero-creatures">
            <Creature color="blue" className="hero-creature one" />
            <Creature color="pink" className="hero-creature two" />
            <Creature color="lavender" className="hero-creature three" />
          </div>

          <div className="hero-content">
            <p className="eyebrow">WELCOME BACK, BUNNY</p>

            <h1>
              This is where
              <br />
              <span>we live.</span>
            </h1>

            <p className="hero-text">
              A tiny digital home for our memories, our chaos, our love,
              and all the little things that make us BUNNIES.
            </p>

            <div className="hero-signature">
              <span>yours always,</span>
              <strong>your wife to bunny ♡</strong>
            </div>
          </div>

          <div className="hero-bunny">
            <Bunny />
          </div>
        </section>

        <section className="rooms">
          <div className="section-heading">
            <p className="section-label">OUR LITTLE ROOMS</p>
            <h2>Pick a place to wander.</h2>
          </div>

          <div className="room-grid">
            <button
              className="room room-blue"
              onClick={() => setActiveSection("story")}
            >
              <span>01</span>
              <strong>Our Story</strong>
              <small>how we became us →</small>
            </button>

            <button
              className="room room-sage"
              onClick={() => setActiveSection("memories")}
            >
              <span>02</span>
              <strong>Our Memories</strong>
              <small>little pieces of us →</small>
            </button>

            <button
              className="room room-mauve"
              onClick={() => setActiveSection("letters")}
            >
              <span>03</span>
              <strong>Love Letters</strong>
              <small>things I need you to know →</small>
            </button>

            <button
              className="room room-taupe"
              onClick={() => setActiveSection("open")}
            >
              <span>04</span>
              <strong>Open When...</strong>
              <small>for every version of you →</small>
            </button>

            <button
              className="room room-cream"
              onClick={() => setActiveSection("future")}
            >
              <span>05</span>
              <strong>Our Future</strong>
              <small>where we're going →</small>
            </button>

            <button
              className="room room-brown"
              onClick={() => setActiveSection("secret")}
            >
              <span>06</span>
              <strong>Secret Burrow</strong>
              <small>pssst... →</small>
            </button>
          </div>
        </section>

        <SoundtrackPlayer />

        <section className="things-section">
          <div className="things-heading">
            <p className="section-label">THE LITTLE THINGS</p>
            <h2>Things that make me melt.</h2>
          </div>

          <div className="things-list">
            {littleThings.map((thing, index) => (
              <div className="thing" key={thing}>
                <span>0{index + 1}</span>
                <p>{thing}</p>
                <span>♡</span>
              </div>
            ))}
          </div>
        </section>

        <section className="promise-section">
          <Creature color="brown" className="promise-creature" />

          <p className="section-label">OUR PROMISE</p>

          <h2>
            “We promised not
            <br />
            to leave each other.”
          </h2>

          <p>And somehow, through everything, we're still here.</p>
        </section>

        <footer>
          <div>BUNNIES ♡</div>
          <p>Always my missing piece. Always my bunny. Always my light.</p>
        </footer>
      </main>

      {activeSection === "story" && (
        <div className="modal-overlay" onClick={() => setActiveSection(null)}>
          <div className="modal story-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close"
              onClick={() => setActiveSection(null)}
            >
              ×
            </button>

            <p className="section-label">OUR STORY</p>

            <h2>Somehow, we became us.</h2>

            <div className="story-text">
              <p>
                We met online and started talking after being introduced.
                There wasn't some huge movie-style moment where we officially
                announced that we were together.
              </p>

              <p>
                We just... started dating. Somewhere between the conversations,
                the teasing, the feelings and everything else, it became us.
              </p>

              <p>
                I was in campus when it all started, and somehow you made it
                very difficult for me not to fall for you.
              </p>

              <p>
                On Applelita's birthday, you introduced me to your family.
                Most of them already knew me as your friend, but when you
                specifically introduced me to JB as your girlfriend...
                yeah. That felt really good.
              </p>

              <p>
                January was hard. Really hard. We broke up, found our way back
                to each other, and somehow came back stronger.
              </p>

              <p>
                And now here we are. Still teasing each other. Still having
                deep talks. Still talking about our future. Still BUNNIES.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSection === "memories" && (
        <div className="modal-overlay" onClick={() => setActiveSection(null)}>
          <div
            className="modal memories-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActiveSection(null)}
            >
              ×
            </button>

            <p className="section-label">OUR MEMORIES</p>

            <h2>Little pieces of us.</h2>

            <div className="memory-grid">
              {memories.map((memory) => (
                <div className="memory-card" key={memory.image}>
                  <img src={memory.image} alt={memory.title} />
                  <div>
                    <strong>{memory.title}</strong>
                    <p>{memory.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === "letters" && (
        <div className="modal-overlay" onClick={() => setActiveSection(null)}>
          <div
            className="modal letter-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActiveSection(null)}
            >
              ×
            </button>

            <p className="section-label">A LOVE LETTER</p>

            <h2>For My Perfect Bunny</h2>

            <div className="letter-paper">
              <p>
                No matter how difficult things become, no matter what
                circumstances we find ourselves in, I will always choose you.
              </p>

              <p>
                You are the missing piece that makes my puzzle feel complete.
                I'm not perfect, and you know that better than anyone, but you
                still choose me. And honestly, that is one of my biggest
                whys.
              </p>

              <p>
                You see me. You give me joy. You give me peace. You are one of
                the lights in my life.
              </p>

              <p>
                I love your little dances when you're showing me outfits. I
                love teasing you. I love our deep talks. I love your crazy,
                beautiful, strong personality. I even love when you put me in
                my place when I need it.
              </p>

              <p>
                One day I want us to go somewhere far away together. Somewhere
                beautiful. Somewhere like Santorini, because I know how much
                you love it.
              </p>

              <p>
                BUNNIES is our little digital version of everything we are:
                messy, sweet, playful, emotional, ridiculous and full of love.
              </p>

              <p>
                I choose you.
                <br />
                Always my missing piece.
                <br />
                Always my bunny.
                <br />
                Always my light.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSection === "open" && !selectedOpenWhen && (
        <div className="modal-overlay" onClick={() => setActiveSection(null)}>
          <div
            className="modal open-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActiveSection(null)}
            >
              ×
            </button>

            <p className="section-label">OPEN WHEN...</p>

            <h2>For every version of you.</h2>

            <div className="open-list">
              {openWhenMessages.map((item) => (
                <button
                  key={item.title}
                  className="open-card"
                  onClick={() => setSelectedOpenWhen(item)}
                >
                  <span>♡</span>
                  <strong>{item.title}</strong>
                  <small>open me →</small>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === "open" && selectedOpenWhen && (
        <div className="modal-overlay">
          <div className="modal open-letter-modal">
            <button
              className="close"
              onClick={() => setSelectedOpenWhen(null)}
            >
              ×
            </button>

            <p className="section-label">OPEN WHEN...</p>

            <h2>{selectedOpenWhen.title}</h2>

            <div className="open-letter">
              {selectedOpenWhen.message}
            </div>

            <button
              className="back-button"
              onClick={() => setSelectedOpenWhen(null)}
            >
              ← Back to all letters
            </button>
          </div>
        </div>
      )}

      {activeSection === "future" && (
        <div className="modal-overlay" onClick={() => setActiveSection(null)}>
          <div
            className="modal future-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setActiveSection(null)}
            >
              ×
            </button>

            <p className="section-label">OUR FUTURE</p>

            <h2>Let's go somewhere far away.</h2>

            <div className="future-image">
              <div className="sun" />
              <div className="island">
                <div className="house one" />
                <div className="house two" />
                <div className="house three" />
              </div>
            </div>

            <div className="future-copy">
              <span>01 — SANTORINI</span>

              <p>
                One day, I want us somewhere beautiful, somewhere neither of
                us has to worry about anything except where we're going to eat
                next.
              </p>

              <strong>
                You + me + somewhere far away.
              </strong>
            </div>
          </div>
        </div>
      )}

      {activeSection === "secret" && (
        <div className="modal-overlay">
          <div className="modal secret-modal">
            {!proposalAccepted ? (
              <>
                <div className="ring-bunny">
                  <Bunny />
                  <div className="ring">♡</div>
                </div>

                <p className="section-label">PSST...</p>

                <h2>You found the secret burrow.</h2>

                <p className="secret-text">
                  I know I've asked you this approximately 100 times already...
                  but I have one more very important question.
                </p>

                <h3>
                  Will you be my wife?
                  <br />
                  Again. And again. And again.
                </h3>

                <p className="secret-small">
                  Until we're old and you're tired of hearing me ask.
                </p>

                <div className="proposal-buttons">
                  <button
                    className="yes-button"
                    onClick={() => setProposalAccepted(true)}
                  >
                    YES, WIFE TO BUNNY 🤎
                  </button>

                  <button
                    className="ask-button"
                    onClick={() => setProposalAccepted(true)}
                  >
                    ASK ME AGAIN 😭
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="accepted-heart">♡</div>

                <p className="section-label">I KNEW IT</p>

                <h2>You said yes. Again.</h2>

                <p className="secret-text">
                  I knew you'd say yes. You always do.
                </p>

                <p className="secret-text">
                  And somehow, I'll probably ask you again tomorrow.
                </p>

                <button
                  className="yes-button"
                  onClick={() => setActiveSection(null)}
                >
                  COME HERE, WIFE 🤎
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{styles}</style>
    </>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #f6f1ea;
    color: #3b2925;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    font: inherit;
  }

  .welcome-screen {
    min-height: 100vh;
    background: #3b2925;
    color: #f6f1ea;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  .welcome-glow {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: rgba(185, 211, 223, 0.1);
    filter: blur(80px);
  }

  .welcome-content {
    position: relative;
    z-index: 5;
    text-align: center;
    max-width: 650px;
  }

  .tiny-label {
    letter-spacing: 5px;
    font-size: 11px;
    margin-bottom: 35px;
    color: #b9d3df;
  }

  .eyebrow,
  .section-label {
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    font-weight: 700;
    color: #87958a;
    margin: 0 0 18px;
  }

  .welcome-screen .eyebrow {
    color: #b9d3df;
  }

  .welcome-content h1 {
    font-family: Georgia, serif;
    font-size: clamp(45px, 8vw, 85px);
    line-height: 0.95;
    font-weight: 400;
    margin: 15px 0 25px;
  }

  .welcome-content h1 span {
    color: #b9d3df;
    font-style: italic;
  }

  .welcome-text {
    font-family: Georgia, serif;
    font-size: 20px;
    opacity: 0.8;
  }

  .enter-button {
    margin-top: 25px;
    border: 1px solid rgba(246, 241, 234, 0.3);
    background: rgba(246, 241, 234, 0.08);
    color: #f6f1ea;
    padding: 17px 24px;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .enter-button:hover {
    background: #b9d3df;
    color: #3b2925;
    transform: translateY(-3px);
  }

  .enter-button span {
    margin-left: 15px;
  }

  .welcome-note {
    font-size: 11px;
    opacity: 0.5;
    margin-top: 35px;
  }

  .site {
    min-height: 100vh;
    overflow: hidden;
  }

  .nav {
    height: 80px;
    padding: 0 6vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(59, 41, 37, 0.1);
    background: #f6f1ea;
  }

  .logo {
    border: 0;
    background: transparent;
    color: #3b2925;
    font-family: Georgia, serif;
    font-size: 22px;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .logo span {
    color: #a98282;
    margin-left: 6px;
  }

  .nav-note {
    font-family: Georgia, serif;
    font-style: italic;
    opacity: 0.55;
  }

  .hero {
    min-height: 650px;
    background: #f6f1ea;
    display: flex;
    align-items: center;
    position: relative;
    padding: 90px 12vw;
  }

  .hero-content {
    max-width: 700px;
    position: relative;
    z-index: 2;
  }

  .hero h1 {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: clamp(60px, 9vw, 120px);
    line-height: 0.86;
    margin: 0;
    letter-spacing: -5px;
  }

  .hero h1 span {
    color: #a98282;
    font-style: italic;
  }

  .hero-text {
    max-width: 480px;
    font-size: 16px;
    line-height: 1.8;
    margin-top: 35px;
    color: #695752;
  }

  .hero-signature {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: Georgia, serif;
  }

  .hero-signature span {
    font-size: 13px;
    opacity: 0.55;
    font-style: italic;
  }

  .hero-signature strong {
    font-size: 17px;
  }

  .hero-bunny {
    position: absolute;
    right: 12vw;
    bottom: 90px;
    transform: scale(1.3);
  }

  .rooms {
    background: #3b2925;
    color: #f6f1ea;
    padding: 110px 8vw;
  }

  .rooms .section-heading {
    margin-bottom: 50px;
  }

  .rooms h2,
  .things-section h2,
  .soundtrack-section h2 {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: clamp(35px, 5vw, 65px);
    margin: 0;
  }

  .rooms .section-label {
    color: #b9d3df;
  }

  .room-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
  }

  .room {
    min-height: 260px;
    padding: 30px;
    border: 0;
    text-align: left;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s ease;
    color: #3b2925;
  }

  .room:hover {
    transform: translateY(-8px);
  }

  .room span {
    font-size: 11px;
    opacity: 0.55;
  }

  .room strong {
    font-family: Georgia, serif;
    font-size: 30px;
    font-weight: 400;
  }

  .room small {
    font-size: 12px;
    opacity: 0.65;
  }

  .room-blue {
    background: #b9d3df;
  }

  .room-sage {
    background: #87958a;
  }

  .room-mauve {
    background: #a98282;
  }

  .room-taupe {
    background: #b9a59b;
  }

  .room-cream {
    background: #f6f1ea;
  }

  .room-brown {
    background: #c3a99c;
  }

  .soundtrack-section {
    padding: 110px 8vw;
    background: #b9d3df;
  }

  .soundtrack-card {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 80px;
    align-items: center;
  }

  .vinyl {
    width: min(330px, 70vw);
    aspect-ratio: 1;
    border-radius: 50%;
    background: #3b2925;
    position: relative;
    margin: auto;
    box-shadow: 15px 20px 40px rgba(59, 41, 37, 0.2);
  }

  .vinyl.spinning {
    animation: spin 5s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .vinyl::before,
  .vinyl::after {
    content: "";
    position: absolute;
    inset: 12%;
    border: 1px solid rgba(246, 241, 234, 0.18);
    border-radius: 50%;
  }

  .vinyl::after {
    inset: 27%;
  }

  .vinyl-line {
    position: absolute;
    inset: 39%;
    border: 1px solid rgba(246, 241, 234, 0.15);
    border-radius: 50%;
  }

  .line-two {
    inset: 45%;
  }

  .vinyl-center {
    position: absolute;
    inset: 43%;
    border-radius: 50%;
    background: #a98282;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f6f1ea;
    z-index: 2;
  }

  .soundtrack-info h2 {
    margin-bottom: 30px;
  }

  .now-playing {
    display: flex;
    gap: 13px;
    align-items: center;
    margin-bottom: 25px;
  }

  .playing-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #a98282;
  }

  .now-playing div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .now-playing small {
    font-size: 8px;
    letter-spacing: 2px;
    opacity: 0.55;
  }

  .now-playing strong {
    font-family: Georgia, serif;
    font-size: 18px;
  }

  .now-playing span {
    font-size: 12px;
    opacity: 0.6;
  }

  .player-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
  }

  .player-controls button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(59, 41, 37, 0.25);
    background: transparent;
    color: #3b2925;
    cursor: pointer;
  }

  .player-controls .play-button {
    width: 58px;
    height: 58px;
    background: #3b2925;
    color: #f6f1ea;
    border: 0;
  }

  .song-list {
    display: flex;
    flex-direction: column;
  }

  .song {
    width: 100%;
    border: 0;
    border-top: 1px solid rgba(59, 41, 37, 0.15);
    background: transparent;
    padding: 16px 5px;
    display: grid;
    grid-template-columns: 40px 1fr 30px;
    text-align: left;
    align-items: center;
    cursor: pointer;
    color: #3b2925;
  }

  .song:hover,
  .song-active {
    background: rgba(246, 241, 234, 0.25);
  }

  .song > span {
    font-size: 10px;
    opacity: 0.5;
  }

  .song div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .song strong {
    font-family: Georgia, serif;
    font-weight: 400;
  }

  .song small {
    font-size: 11px;
    opacity: 0.55;
  }

  .song b {
    font-weight: 400;
  }

  .things-section {
    padding: 110px 8vw;
    background: #f6f1ea;
  }

  .things-list {
    max-width: 900px;
    margin: 55px auto 0;
  }

  .thing {
    border-top: 1px solid rgba(59, 41, 37, 0.15);
    padding: 23px 0;
    display: grid;
    grid-template-columns: 50px 1fr 30px;
    align-items: center;
    gap: 20px;
  }

  .thing span {
    font-size: 11px;
    opacity: 0.45;
  }

  .thing p {
    margin: 0;
    font-family: Georgia, serif;
    font-size: 19px;
  }

  .promise-section {
    position: relative;
    padding: 130px 20px;
    text-align: center;
    background: #87958a;
    color: #f6f1ea;
    overflow: hidden;
  }

  .promise-section .section-label {
    color: #f6f1ea;
    opacity: 0.7;
  }

  .promise-section h2 {
    font-family: Georgia, serif;
    font-size: clamp(40px, 6vw, 75px);
    font-weight: 400;
    line-height: 1;
    margin: 20px 0;
  }

  .promise-section > p:last-child {
    opacity: 0.75;
  }

  .promise-creature {
    position: absolute;
    right: 8%;
    bottom: -15px;
    transform: scale(0.7);
  }

  footer {
    padding: 50px 8vw;
    background: #3b2925;
    color: #f6f1ea;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
  }

  footer div {
    font-family: Georgia, serif;
    letter-spacing: 2px;
  }

  footer p {
    margin: 0;
    opacity: 0.6;
    font-size: 12px;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(59, 41, 37, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    overflow-y: auto;
  }

  .modal {
    width: min(900px, 100%);
    max-height: 90vh;
    overflow-y: auto;
    background: #f6f1ea;
    color: #3b2925;
    padding: 60px;
    position: relative;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
  }

  .close {
    position: absolute;
    right: 25px;
    top: 20px;
    border: 0;
    background: transparent;
    font-size: 30px;
    cursor: pointer;
    color: #3b2925;
  }

  .modal h2 {
    font-family: Georgia, serif;
    font-size: clamp(35px, 5vw, 60px);
    font-weight: 400;
    line-height: 1;
    margin: 0 0 35px;
  }

  .story-text,
  .letter-paper {
    font-family: Georgia, serif;
    font-size: 18px;
    line-height: 1.9;
    color: #5f504b;
  }

  .story-text p,
  .letter-paper p {
    margin-bottom: 25px;
  }

  .memory-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .memory-card {
    background: #ebe3da;
  }

  .memory-card img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .memory-card div {
    padding: 18px;
  }

  .memory-card strong {
    font-family: Georgia, serif;
    font-size: 20px;
  }

  .memory-card p {
    font-size: 12px;
    line-height: 1.6;
    opacity: 0.65;
  }

  .letter-paper {
    background: #ebe3da;
    padding: 35px;
  }

  .open-list {
    display: grid;
    gap: 10px;
  }

  .open-card {
    background: #ebe3da;
    border: 0;
    padding: 22px;
    display: grid;
    grid-template-columns: 35px 1fr auto;
    text-align: left;
    align-items: center;
    cursor: pointer;
    color: #3b2925;
    transition: 0.2s ease;
  }

  .open-card:hover {
    background: #b9d3df;
    transform: translateX(5px);
  }

  .open-card strong {
    font-family: Georgia, serif;
    font-size: 18px;
  }

  .open-card small {
    opacity: 0.5;
  }

  .open-letter {
    background: #ebe3da;
    padding: 40px;
    font-family: Georgia, serif;
    font-size: 19px;
    line-height: 1.9;
    color: #5f504b;
  }

  .back-button {
    margin-top: 20px;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: #3b2925;
  }

  .future-image {
    height: 280px;
    background: #b9d3df;
    position: relative;
    overflow: hidden;
    margin-bottom: 35px;
  }

  .sun {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f6f1ea;
    position: absolute;
    right: 15%;
    top: 30px;
  }

  .island {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: #87958a;
    clip-path: polygon(0 60%, 20% 35%, 45% 50%, 65% 25%, 100% 55%, 100% 100%, 0 100%);
  }

  .house {
    position: absolute;
    bottom: 65px;
    width: 55px;
    height: 45px;
    background: #f6f1ea;
  }

  .house::before {
    content: "";
    position: absolute;
    top: -22px;
    left: -5px;
    border-left: 33px solid transparent;
    border-right: 33px solid transparent;
    border-bottom: 25px solid #a98282;
  }

  .house.one {
    left: 25%;
  }

  .house.two {
    left: 45%;
    bottom: 75px;
  }

  .house.three {
    left: 65%;
  }

  .future-copy span {
    font-size: 10px;
    letter-spacing: 3px;
    opacity: 0.55;
  }

  .future-copy p {
    font-family: Georgia, serif;
    font-size: 20px;
    line-height: 1.7;
  }

  .future-copy strong {
    font-family: Georgia, serif;
    font-size: 22px;
  }

  .secret-modal {
    text-align: center;
    max-width: 650px;
  }

  .ring-bunny {
    position: relative;
    width: 130px;
    height: 160px;
    margin: 0 auto 25px;
  }

  .ring-bunny .bunny {
    transform: scale(0.6);
    transform-origin: top center;
  }

  .ring {
    position: absolute;
    right: 5px;
    bottom: 25px;
    width: 45px;
    height: 45px;
    border: 7px solid #b9d3df;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a98282;
    font-size: 20px;
    background: #f6f1ea;
  }

  .secret-text {
    max-width: 500px;
    margin: 0 auto 20px;
    line-height: 1.7;
    color: #695752;
  }

  .secret-modal h3 {
    font-family: Georgia, serif;
    font-size: 27px;
    font-weight: 400;
    line-height: 1.4;
  }

  .secret-small {
    font-size: 12px;
    opacity: 0.55;
  }

  .proposal-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .yes-button,
  .ask-button {
    border: 0;
    padding: 15px 20px;
    cursor: pointer;
    border-radius: 999px;
  }

  .yes-button {
    background: #3b2925;
    color: #f6f1ea;
  }

  .ask-button {
    background: #b9d3df;
    color: #3b2925;
  }

  .accepted-heart {
    font-size: 80px;
    color: #a98282;
    margin-bottom: 15px;
  }

  .bunny {
    width: 110px;
    height: 150px;
    position: relative;
    margin: auto;
  }

  .ear {
    position: absolute;
    width: 30px;
    height: 70px;
    border-radius: 50% 50% 45% 45%;
    background: #f6f1ea;
    border: 2px solid #3b2925;
    top: 0;
    z-index: 0;
  }

  .ear-left {
    left: 20px;
    transform: rotate(-8deg);
  }

  .ear-right {
    right: 20px;
    transform: rotate(8deg);
  }

  .bunny-head {
    position: absolute;
    width: 82px;
    height: 70px;
    border-radius: 50%;
    background: #f6f1ea;
    border: 2px solid #3b2925;
    left: 14px;
    top: 50px;
    z-index: 2;
  }

  .eye {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #3b2925;
    top: 27px;
  }

  .eye-left {
    left: 25px;
  }

  .eye-right {
    right: 25px;
  }

  .nose {
    position: absolute;
    width: 7px;
    height: 5px;
    border-radius: 50%;
    background: #a98282;
    left: 36px;
    top: 40px;
  }

  .bunny-body {
    position: absolute;
    width: 65px;
    height: 55px;
    border-radius: 50% 50% 45% 45%;
    background: #f6f1ea;
    border: 2px solid #3b2925;
    left: 22px;
    top: 105px;
  }

  .creature {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .creature-face {
    position: absolute;
    width: 70px;
    height: 65px;
    border-radius: 45% 45% 40% 40%;
    left: 15px;
    top: 15px;
    z-index: 2;
  }

  .creature-blue .creature-face {
    background: #8db8c9;
  }

  .creature-pink .creature-face {
    background: #d49aab;
  }

  .creature-lavender .creature-face {
    background: #a99bc5;
  }

  .creature-brown .creature-face {
    background: #a98282;
  }

  .creature-ear {
    position: absolute;
    width: 25px;
    height: 35px;
    border-radius: 50%;
    top: 0;
  }

  .creature-ear.left {
    left: 15px;
    transform: rotate(-25deg);
  }

  .creature-ear.right {
    right: 15px;
    transform: rotate(25deg);
  }

  .creature-blue .creature-ear {
    background: #8db8c9;
  }

  .creature-pink .creature-ear {
    background: #d49aab;
  }

  .creature-lavender .creature-ear {
    background: #a99bc5;
  }

  .creature-brown .creature-ear {
    background: #a98282;
  }

  .creature-face span {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #3b2925;
    top: 28px;
  }

  .creature-face span:first-child {
    left: 20px;
  }

  .creature-face span:nth-child(2) {
    right: 20px;
  }

  .creature-face i {
    position: absolute;
    width: 10px;
    height: 5px;
    border-bottom: 2px solid #3b2925;
    border-radius: 50%;
    left: 30px;
    top: 40px;
  }

  .creature-body {
    position: absolute;
    width: 55px;
    height: 35px;
    left: 23px;
    bottom: 0;
    border-radius: 50%;
  }

  .creature-blue .creature-body {
    background: #8db8c9;
  }

  .creature-pink .creature-body {
    background: #d49aab;
  }

  .creature-lavender .creature-body {
    background: #a99bc5;
  }

  .creature-brown .creature-body {
    background: #a98282;
  }

  .welcome-bunny {
    transform: scale(0.85);
    margin-bottom: 5px;
  }

  .welcome-creature {
    position: absolute;
    opacity: 0.8;
  }

  .welcome-creature.one {
    left: 8%;
    bottom: 10%;
  }

  .welcome-creature.two {
    right: 8%;
    top: 15%;
  }

  .hero-creature {
    position: absolute;
  }

  .hero-creature.one {
    top: 60px;
    right: 15%;
  }

  .hero-creature.two {
    bottom: 70px;
    left: 5%;
    transform: scale(0.7);
  }

  .hero-creature.three {
    top: 130px;
    right: 5%;
    transform: scale(0.55);
  }

  @media (max-width: 800px) {
    .hero {
      padding: 80px 8vw 180px;
    }

    .hero-bunny {
      right: 30px;
      bottom: 20px;
      transform: scale(0.8);
    }

    .room-grid {
      grid-template-columns: 1fr;
    }

    .soundtrack-card {
      grid-template-columns: 1fr;
      gap: 45px;
    }

    .memory-grid {
      grid-template-columns: 1fr;
    }

    .modal {
      padding: 45px 25px;
    }

    footer {
      flex-direction: column;
      align-items: flex-start;
    }

    .promise-creature {
      opacity: 0.35;
    }
  }

  @media (max-width: 500px) {
    .nav {
      padding: 0 20px;
    }

    .nav-note {
      display: none;
    }

    .hero h1 {
      letter-spacing: -3px;
    }

    .hero-creatures {
      opacity: 0.5;
    }

    .things-section,
    .rooms,
    .soundtrack-section {
      padding-left: 25px;
      padding-right: 25px;
    }

    .thing p {
      font-size: 16px;
    }

    .open-card {
      grid-template-columns: 25px 1fr;
    }

    .open-card small {
      display: none;
    }

    .letter-paper,
    .open-letter {
      padding: 25px;
      font-size: 16px;
    }
  }
`;
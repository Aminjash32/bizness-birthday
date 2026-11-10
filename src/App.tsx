import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Heart,
  Music2,
  Pause,
  Sparkles,
  X,
} from "lucide-react";
import PetalField from "./components/PetalField";
import SectionHeading from "./components/SectionHeading";
import { memories } from "./data/memories";
import "./styles/app.css";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function App() {
  const [entered, setEntered] = useState(false);
  const [activeMemory, setActiveMemory] = useState(0);
  const [revealedCookies, setRevealedCookies] = useState<number[]>([]);
  const [candlesLit, setCandlesLit] = useState(true);
  const [letterOpen, setLetterOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [musicNotice, setMusicNotice] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const reduceMotion = useReducedMotion();

  const currentMemory = memories[activeMemory];

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.pause();
      setMusicOn(false);
      return;
    }
    try {
      await audio.play();
      setMusicOn(true);
      setMusicNotice(false);
    } catch {
      setMusicNotice(true);
    }
  };

  const moveMemory = (direction: number) => {
    setActiveMemory(
      (index) => (index + direction + memories.length) % memories.length,
    );
  };

  const scrollTo = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music/birthday-song.mp3`}
        loop
        preload="none"
      />
      <PetalField />
      <header className="site-nav">
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
        >
          bloom<span>♡</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#memories">Memories</a>
          <a href="#bakery">Bakery</a>
          <a href="#garden">Garden</a>
          <a href="#letter">A note</a>
        </nav>
        <button
          className="music-button"
          onClick={toggleMusic}
          aria-label={musicOn ? "Pause music" : "Play music"}
        >
          {musicOn ? <Pause size={16} /> : <Music2 size={16} />}
          <span>{musicOn ? "Pause" : "Your Birthday Soundtrack"}</span>
        </button>
      </header>
      {musicNotice && (
        <div className="music-notice" role="status">
          Add your song as <b>public/music/birthday-song.mp3</b> to enable the
          player.{" "}
          <button onClick={() => setMusicNotice(false)} aria-label="Dismiss">
            <X size={14} />
          </button>
        </div>
      )}

      <main id="top">
        <section className={`welcome ${entered ? "welcome-entered" : ""}`}>
          <div className="welcome-orb orb-one" />
          <div className="welcome-orb orb-two" />
          <motion.div
            className="welcome-inner"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          >
            <motion.div variants={fadeUp} className="tiny-flower">
              ✿
            </motion.div>
            <motion.p variants={fadeUp} className="eyebrow">
              A LITTLE WORLD, MADE JUST FOR YOU
            </motion.p>
            <AnimatePresence mode="wait">
              {!entered ? (
                <motion.div
                  key="intro"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <h1>
                    Hey, <em>Bizness Woman.</em>
                  </h1>
                  <p className="hero-copy">
                    I saved you a little corner of the internet.
                    <br />
                    It is filled with flowers, memories and a whole lot of love.
                  </p>
                  <motion.button
                    className="primary-button envelope-button"
                    onClick={() => setEntered(true)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="envelope-art">
                      <span>♡</span>
                    </span>{" "}
                    Open your surprise <Heart size={16} fill="currentColor" />
                  </motion.button>
                  <p className="hand-note">psst... this one's just for you</p>
                </motion.div>
              ) : (
                <motion.div
                  key="greeting"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="eyebrow">NOVEMBER 11 · YOUR DAY</p>
                  <h1>
                    Happy Birthday,
                    <br />
                    <em>Bizness Woman!</em>
                  </h1>
                  <p className="hero-copy">
                    A new chapter, a thousand little joys,
                    <br />
                    and all the beautiful things you deserve.
                  </p>
                  <button
                    className="primary-button"
                    onClick={() => scrollTo("memories")}
                  >
                    Come see what I made <ArrowDown size={17} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <div className="hero-side-note">
            a friendship worth celebrating <span>♡</span>
          </div>
          <div className="hero-flower hero-flower-left">🌷</div>
          <div className="hero-flower hero-flower-right">🌷</div>
          <div className="scroll-cue">
            <span /> scroll a little
          </div>
        </section>

        <section className="intro-note section-wrap">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
          >
            <span className="eyebrow">A SMALL REMINDER</span>
            <p className="intro-quote">
              Some people make life feel a little lighter just by being in it.{" "}
              <em>You are one of those people.</em>
            </p>
            <span className="hand-note">
              and I hope you never forget that ✿
            </span>
          </motion.div>
        </section>

        <section id="memories" className="memories-section section-wrap">
          <SectionHeading
            eyebrow="THE LITTLE THINGS I KEEP"
            title="A Frame Full of Safaa"
            subtitle="A few snapshots from the camera roll of a friendship I am really grateful for."
          />
          <div className="memory-layout">
            <div
              className="stack-area"
              aria-label="Interactive photo memory stack"
            >
              <div className="stack-shadow" />
              {memories
                .slice(0, Math.min(memories.length, 5))
                .map((_, position) => {
                  const offset = (position - 2 + 5) % 5;
                  const index =
                    (activeMemory + offset - 2 + memories.length) %
                    memories.length;
                  const item = memories[index];
                  const depth = position - 2;
                  return (
                    <motion.button
                      key={`${item.id}-${position}`}
                      className={`memory-card ${position === 2 ? "memory-card-active" : ""}`}
                      style={
                        {
                          zIndex: position === 2 ? 8 : 5 - Math.abs(depth),
                          "--card-rotate": `${depth * 8}deg`,
                          "--card-x": `${depth * 28}px`,
                          "--card-y": `${Math.abs(depth) * 7}px`,
                        } as CSSProperties
                      }
                      animate={{
                        x: depth * 27,
                        y: Math.abs(depth) * 7,
                        rotate: depth * 8,
                        scale:
                          position === 2 ? 1 : 0.91 - Math.abs(depth) * 0.025,
                      }}
                      whileHover={{
                        y: Math.abs(depth) * 7 - 12,
                        scale: position === 2 ? 1.035 : 0.94,
                      }}
                      onClick={() => setActiveMemory(index)}
                      aria-label={`Show memory ${index + 1}: ${item.caption}`}
                    >
                      <div className="polaroid-photo">
                        <img
                          src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, "")}`}
                          alt={item.caption}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement?.classList.add(
                              "photo-placeholder",
                            );
                          }}
                        />
                        <span className="photo-placeholder-label">
                          your memory goes here ♡
                        </span>
                      </div>
                      <span className="polaroid-caption">{item.caption}</span>
                      <span className="tape" />
                    </motion.button>
                  );
                })}
              <span className="stack-doodle">♡</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.aside
                className="memory-note"
                key={currentMemory.id}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35 }}
              >
                <span className="eyebrow">
                  MEMORY NO. {String(activeMemory + 1).padStart(2, "0")}
                </span>
                <h3>{currentMemory.caption}</h3>
                <p>{currentMemory.note}</p>
                <div className="memory-controls">
                  <button
                    className="round-button"
                    onClick={() => moveMemory(-1)}
                    aria-label="Previous memory"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <span>
                    {String(activeMemory + 1).padStart(2, "0")} <i>/</i>{" "}
                    {String(memories.length).padStart(2, "0")}
                  </span>
                  <button
                    className="round-button"
                    onClick={() => moveMemory(1)}
                    aria-label="Next memory"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
                <button
                  className="text-button"
                  onClick={() =>
                    setActiveMemory((activeMemory + 1) % memories.length)
                  }
                >
                  Surprise me with another <Sparkles size={14} />
                </button>
              </motion.aside>
            </AnimatePresence>
          </div>
          <p className="section-footnote">
            Tip: tap any card in the stack to bring that memory forward.
          </p>
        </section>

        <section id="bakery" className="bakery-section">
          <div className="section-wrap bakery-inner">
            <SectionHeading
              eyebrow="FRESH FROM THE HEART"
              title="The birthday bakery"
              subtitle="A tiny bakery with one very important special: a recipe for the loveliest year ahead."
            />
            <div className="bakery-grid">
              <motion.div className="cake-card" whileHover={{ y: -5 }}>
                <span className="cake-sparkle sparkle-a">✦</span>
                <span className="cake-sparkle sparkle-b">✧</span>
                <div className="cake-illustration">
                  <div className="candles">
                    {[0, 1, 2].map((n) => (
                      <span
                        key={n}
                        className={`candle ${candlesLit ? "lit" : ""}`}
                      >
                        <i />
                      </span>
                    ))}
                  </div>
                  <div className="cake-top">
                    <span>♡</span>
                  </div>
                  <div className="cake-middle" />
                  <div className="cake-bottom" />
                  <div className="cake-plate" />
                </div>
                <h3>Make a little wish</h3>
                <p>
                  {candlesLit
                    ? "The candles are glowing just for you."
                    : "Wish made. May it find its way to you."}
                </p>
                <button
                  className="primary-button small-button"
                  onClick={() => setCandlesLit(!candlesLit)}
                >
                  {candlesLit ? "Blow out the candles" : "Light them again"}{" "}
                  <Sparkles size={15} />
                </button>
              </motion.div>
              <div className="recipe-card">
                <div className="recipe-topline">
                  <span>THE HOUSE SPECIAL</span>
                  <span>♡</span>
                </div>
                <h3>
                  Recipe for a<br />
                  <em>wonderful year</em>
                </h3>
                <p className="recipe-subtitle">
                  Baked especially for you, with extra love.
                </p>
                <ul>
                  <li>
                    <span>2 cups</span> of everyday happiness
                  </li>
                  <li>
                    <span>3 handfuls</span> of belly laughs
                  </li>
                  <li>
                    <span>A generous scoop</span> of new adventures
                  </li>
                  <li>
                    <span>Unlimited</span> love and good people
                  </li>
                  <li>
                    <span>A pinch</span> of beautiful surprises
                  </li>
                </ul>
                <div className="recipe-footer">
                  Mix with courage. Bake with joy. Enjoy every little bite.{" "}
                  <span>✿</span>
                </div>
              </div>
            </div>
            <div className="cookie-row">
              <p>
                Pick a cookie. There is a tiny wish hiding underneath each one.
              </p>
              <div className="cookies">
                {["🍪", "🧁", "🍓", "🥐", "🍰"].map((cookie, i) => (
                  <button
                    key={i}
                    className={`cookie ${revealedCookies.includes(i) ? "cookie-open" : ""}`}
                    onClick={() =>
                      setRevealedCookies((prev) =>
                        prev.includes(i)
                          ? prev.filter((n) => n !== i)
                          : [...prev, i],
                      )
                    }
                    aria-label={`Reveal sweet wish ${i + 1}`}
                  >
                    <span>{cookie}</span>
                    <small>
                      {
                        [
                          "You deserve soft days.",
                          "Keep chasing your happy.",
                          "May good things find you.",
                          "More reasons to celebrate.",
                          "You make life sweeter.",
                        ][i]
                      }
                    </small>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="garden" className="garden-section section-wrap">
          <SectionHeading
            eyebrow="A GARDEN FOR YOU"
            title="A tulip for every wish"
            subtitle="Tap a flower and let it bloom. Each one carries a little wish for your new year."
          />
          <div className="garden-scene">
            <div className="garden-sun" />
            <div className="garden-flowers">
              {[
                ["May your days feel gentle.", "🌷"],
                ["May your dreams grow wild.", "🌷"],
                ["May laughter find you often.", "🌷"],
                ["May you feel loved, always.", "🌷"],
                ["May wonderful things surprise you.", "🌷"],
                ["May you never doubt your magic.", "🌷"],
                ["May this year be kind to you.", "🌷"],
              ].map(([wish, flower], i) => (
                <motion.button
                  key={i}
                  className="garden-flower"
                  onClick={(e) => e.currentTarget.classList.toggle("bloomed")}
                  whileHover={{ y: -8, rotate: i % 2 ? 5 : -5 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <span className="flower-emoji">{flower}</span>
                  <span className="flower-wish">{wish}</span>
                  <span className="stem" />
                </motion.button>
              ))}
            </div>
            <div className="garden-ground" />
            <span className="garden-note">
              a little wish garden, just for you ♡
            </span>
          </div>
        </section>

        <section id="letter" className="letter-section">
          <div className="section-wrap letter-wrap">
            <SectionHeading
              eyebrow="SOME THINGS DESERVE TO BE SAID"
              title="A little note, from me to you"
              subtitle="No big speech. Just something I hope you carry with you."
            />
            <motion.div
              className={`letter-envelope ${letterOpen ? "is-open" : ""}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="letter-paper">
                <span className="letter-flower">✿</span>

                <p className="letter-dear">Dear Safaa,</p>

                <p>
                  Funny how some people enter our lives when we least expect
                  them to, and somehow end up becoming people we cannot imagine
                  not having around. Ours was one of those unexpected
                  friendships, and honestly, I am really glad life brought you
                  my way.
                </p>

                <p>
                  You have been a little light in some of my darkest days, and I
                  don't think I tell you that enough. Through all the ups and
                  downs, the silence, the chaos and everything in between, you
                  have somehow always managed to stay. Firm, kind, patient and
                  just wonderfully you. That means more to me than I could ever
                  properly put into words.
                </p>

                <p>
                  I know I have been a little distant lately, and maybe I
                  haven't always been the best at showing how much I appreciate
                  you. But please never mistake my silence for indifference. I
                  respect you immensely, I care about you more than I probably
                  let on, and I hope you never have to question that.
                </p>

                <p>
                  You are genuinely one of those rare people anyone would be
                  lucky to have by their side. A wonderful person, an even
                  better companion, and someone who deserves all the good things
                  this world has to offer. I hope life is extra kind to you,
                  brings you countless reasons to smile, and gives you back all
                  the happiness you bring to others.
                </p>

                <p>
                  And please, keep that beautiful smile of yours alive. Even on
                  the difficult days. The world could always use a little more
                  of your sunshine.
                </p>

                <p>
                  I know you wanted a handwritten note, and I promise I haven't
                  forgotten that. I'm just offering you this little corner of
                  the internet instead, with a few words I really wanted you to
                  have. It's not quite pen on paper, but every word comes from
                  the heart. So, please accept this little something from me. ♡
                </p>

                <p className="letter-signoff">
                  Happy birthday Safaa, you wonderful human. ♡
                </p>

                <p className="letter-from">
                  Always cheering for you,
                  <br />
                  Batman 🦇
                </p>
              </div>
              <button
                className="seal-button"
                onClick={() => setLetterOpen(!letterOpen)}
                aria-label={letterOpen ? "Close the letter" : "Open the letter"}
              >
                <Heart size={24} fill="currentColor" />
              </button>
            </motion.div>
            <p className="letter-hint">
              {letterOpen
                ? "A little love, sent your way."
                : "Tap the little heart to open your letter."}
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-flower">🌷</div>
          <h2>
            Here is to you, <em>Bizness Woman.</em>
          </h2>
          <p>May your life be as lovely as a garden in bloom.</p>
          <div className="footer-heart">made with ♡, just for you</div>
          <button className="back-top" onClick={() => scrollTo("top")}>
            Back to the beginning ↑
          </button>
        </footer>
      </main>
    </>
  );
}

export default App;

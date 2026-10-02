import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSound } from "./useSound";

/**
 * Professional 2D cartoon puppy illustrations and animations.
 * Uses consistent transparent WebP assets derived from the user's storybook puppy reference.
 */

// ---------------------------------------------------------------------------
// 1. CORNER PEEPING PUPPY (Appearing near navigation at bottom-left)
// ---------------------------------------------------------------------------
export function PuppyMascot() {
  const [hiding, setHiding] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const { play } = useSound();

  const handlePointerEnter = () => {
    play("bark");
    setWiggle(true);
    setTimeout(() => setWiggle(false), 600);
  };

  return (
    <>
      <div
        aria-hidden
        className="fixed hidden md:block select-none"
        style={{
          left: -10,
          bottom: -10,
          zIndex: 25,
          pointerEvents: "auto",
          transition: "transform 0.45s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transform: hiding ? "translate(-140px, 140px)" : "translate(0px, 0px)",
        }}
        onMouseEnter={() => setHiding(true)}
        onPointerEnter={handlePointerEnter}
        onMouseLeave={() => setTimeout(() => setHiding(false), 900)}
      >
        <div
          className="relative cursor-pointer transition-transform duration-300"
          style={{
            transform: wiggle ? "scale(1.06) rotate(3deg)" : "scale(1)",
          }}
        >
          <img
            src="/puppy/puppy_peeking.webp"
            alt="Cute golden puppy peeking over the page"
            width={165}
            height={115}
            className="drop-shadow-sm select-none pointer-events-none"
            style={{
              filter: "drop-shadow(1px 2px 4px rgba(45, 25, 12, 0.15))",
            }}
          />
        </div>
      </div>
      <PetThePuppyHint hiding={hiding} />
    </>
  );
}

function PetThePuppyHint({ hiding }: { hiding: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none fixed bottom-24 left-28 z-[26] hidden md:block">
      <p className="-rotate-6 font-hand text-xl text-ink-soft select-none">
        {hiding ? "hehe 🐾 fetch!" : "woof! pet me 🐾"}
      </p>
      <svg
        width="105"
        height="75"
        viewBox="0 0 105 75"
        fill="none"
        className="-ml-12 mt-1 text-ink-soft"
      >
        <path
          d="M98 8 C77 10 84 35 59 38 C38 41 42 61 17 62"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        <path
          d="M27 53 L15 62 L29 68"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 2. SLEEPING PUPPY WITH GENTLE BREATHING (Matches user reference image)
// ---------------------------------------------------------------------------
export function AnimatedSleepingPuppy({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  const { play } = useSound();

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      style={style}
      onClick={() => play("bark")}
      title="shh... puppy is sleeping"
    >
      {/* Floating Zzz letters */}
      <div
        className="absolute -top-6 right-6 font-marker text-ink-soft flex items-baseline gap-1 pointer-events-none select-none opacity-75"
        style={{ animation: "puppy-zzz-drift 6s ease-in-out infinite" }}
      >
        <span style={{ fontSize: "11px" }}>z</span>
        <span style={{ fontSize: "14px" }}>z</span>
        <span style={{ fontSize: "18px" }}>Z</span>
        <span style={{ fontSize: "13px" }}>✨</span>
      </div>

      {/* Gentle natural breathing */}
      <div
        style={{
          animation: "puppy-breathe 5.5s ease-in-out infinite",
          transformOrigin: "center 75%",
        }}
      >
        <img
          src="/puppy/puppy_sleeping.webp"
          alt="Adorable golden puppy sleeping peacefully"
          width={190}
          height={116}
          className="select-none pointer-events-none"
          style={{
            filter: "drop-shadow(2px 4px 6px rgba(45, 25, 12, 0.12))",
          }}
        />
      </div>

      <p className="font-marker text-xs text-center mt-1 opacity-70 select-none" style={{ color: "var(--color-ink)" }}>
        sweet puppy dreams ~ 🐾
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. SITTING & BLINKING PUPPY WITH WAGGING TAIL
// ---------------------------------------------------------------------------
export function SittingPuppy({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  const [isBlinking, setIsBlinking] = useState(false);
  const { play } = useSound();

  // Natural blinking cycle: blink every ~4.2 seconds for 160ms
  useEffect(() => {
    let blinkTimeout: number;
    const interval = window.setInterval(() => {
      setIsBlinking(true);
      blinkTimeout = window.setTimeout(() => {
        setIsBlinking(false);
      }, 160);
    }, 4200);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(blinkTimeout);
    };
  }, []);

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      style={style}
      onClick={() => play("bark")}
      title="Good boy! Pet the puppy"
    >
      {/* Subtle joyful tail-wagging & breathing */}
      <div
        style={{
          animation: "puppy-wag-gentle 3.2s ease-in-out infinite, puppy-breathe 5.5s ease-in-out infinite",
          transformOrigin: "center bottom",
        }}
      >
        <img
          src={isBlinking ? "/puppy/puppy_sitting_blink.webp" : "/puppy/puppy_sitting.webp"}
          alt="Happy golden puppy sitting and wagging tail"
          width={155}
          height={197}
          className="select-none pointer-events-none transition-opacity duration-75"
          style={{
            filter: "drop-shadow(2px 4px 6px rgba(45, 25, 12, 0.12))",
          }}
        />
      </div>
      <p className="font-marker text-xs text-center mt-1 opacity-70 select-none" style={{ color: "var(--color-ink)" }}>
        wag more, bark less 🐾
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 4. PUPPY IN COZY BASKET
// ---------------------------------------------------------------------------
export function PuppyInBasket({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  const { play } = useSound();

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      style={style}
      onClick={() => play("bark")}
      title="Cozy puppy in wicker basket"
    >
      <div
        style={{
          animation: "puppy-breathe 6s ease-in-out infinite",
          transformOrigin: "center bottom",
        }}
      >
        <img
          src="/puppy/puppy_basket.webp"
          alt="Cute golden puppy nestled inside a wicker basket"
          width={180}
          height={151}
          className="select-none pointer-events-none"
          style={{
            filter: "drop-shadow(2px 4px 7px rgba(45, 25, 12, 0.14))",
          }}
        />
      </div>
      <p className="font-marker text-xs text-center mt-1 opacity-70 select-none" style={{ color: "var(--color-ink)" }}>
        cozy basket spot ~
        <br />
        do not disturb 🐾
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. CENTER WHEEL PUPPY (Running / trotting inside sketchbook wheel)
// ---------------------------------------------------------------------------
export function WheelPuppy({ speed }: { speed: "idle" | "hover" | "sprint" }) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Speed-adjusted animation timings
  const bobDuration = speed === "sprint" ? "0.50s" : speed === "hover" ? "0.70s" : "1.10s";

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsBlinking(true);
      window.setTimeout(() => setIsBlinking(false), 160);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
      <style>{`
        @keyframes wheel-pup-trot {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(3px) rotate(1.5deg) scale(1.02, 0.98); }
          50% { transform: translateY(-5px) rotate(-1.8deg) scale(0.98, 1.02); }
          75% { transform: translateY(-1.5px) rotate(0.8deg); }
        }
        @keyframes wheel-pup-shadow {
          0%, 100% { transform: scaleX(1); opacity: 0.22; }
          50% { transform: scaleX(0.75); opacity: 0.10; }
        }
      `}</style>

      {/* Prominent cartoon puppy in center of wheel */}
      <div
        className="flex flex-col items-center"
        style={{
          animation: `wheel-pup-trot ${bobDuration} ease-in-out infinite`,
          transformOrigin: "center 85%",
        }}
      >
        <img
          src={isBlinking ? "/puppy/puppy_wheel_center_blink.webp" : "/puppy/puppy_wheel_center.webp"}
          alt="Golden cartoon puppy trotting in center of wheel"
          width={132}
          height={168}
          className="select-none pointer-events-none drop-shadow-md"
          style={{
            maxWidth: "88%",
            height: "auto",
            filter: "drop-shadow(2px 4px 6px rgba(45, 25, 12, 0.16))",
          }}
        />
        {/* Ground contact shadow */}
        <div
          className="w-20 h-2.5 rounded-full -mt-1"
          style={{
            background: "color-mix(in oklab, var(--color-ink) 70%, transparent)",
            animation: `wheel-pup-shadow ${bobDuration} ease-in-out infinite`,
          }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 6. SECTION NAVIGATION PAW PRINT TRAIL (Triggered on section change)
// ---------------------------------------------------------------------------
export function PawNavigationEffect({ activeSection }: { activeSection: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, [activeSection]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden>
      {[
        { x: "25%", y: "45%", rot: -18, delay: 0 },
        { x: "32%", y: "42%", rot: 15, delay: 0.1 },
        { x: "39%", y: "46%", rot: -10, delay: 0.2 },
        { x: "46%", y: "43%", rot: 18, delay: 0.3 },
      ].map((p, i) => (
        <motion.div
          key={`${activeSection}-${i}`}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: p.delay }}
          className="absolute"
          style={{
            left: p.x,
            top: p.y,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-terracotta)" opacity="0.6">
            <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 1 3 3 3s3-1 3-3c0-1.66-1.34-3-3-3z" />
            <circle cx="7.5" cy="11.5" r="2.2" />
            <circle cx="10.5" cy="8.5" r="2.2" />
            <circle cx="13.5" cy="8.5" r="2.2" />
            <circle cx="16.5" cy="11.5" r="2.2" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

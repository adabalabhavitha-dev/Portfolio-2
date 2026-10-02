interface Props {
  speed: "idle" | "hover" | "sprint";
}

/**
 * Realistic hand-drawn Golden Retriever / Beagle Puppy running happily inside the wheel.
 * Features true canine anatomy: floppy bouncing ears, happy panting tongue, feathery wagging tail,
 * expressive puppy eyes, and four running legs with paw pads.
 */
export function RunningPuppy({ speed }: Props) {
  // Cycle duration based on running speed
  const cycle = speed === "sprint" ? "0.22s" : speed === "hover" ? "0.38s" : "0.64s";

  return (
    <svg
      viewBox="0 0 160 115"
      width="100%"
      height="100%"
      style={{ overflow: "visible", filter: "url(#sketch-wobble)" }}
    >
      <style>{`
        .pup-body {
          animation: pup-body-bob ${cycle} ease-in-out infinite;
          transform-origin: 85px 60px;
        }
        .pup-head {
          animation: pup-head-bob ${cycle} ease-in-out infinite;
          transform-origin: 50px 45px;
        }
        .pup-ear {
          animation: pup-ear-flap ${cycle} ease-in-out infinite;
          transform-origin: 48px 30px;
        }
        .pup-tail {
          animation: pup-tail-wag ${cycle} ease-in-out infinite;
          transform-origin: 122px 52px;
        }
        .pup-tongue {
          animation: pup-tongue-bob ${cycle} ease-in-out infinite;
          transform-origin: 30px 58px;
        }
        .pup-front-a {
          animation: pup-run-front-a ${cycle} ease-in-out infinite;
          transform-origin: 62px 66px;
        }
        .pup-front-b {
          animation: pup-run-front-b ${cycle} ease-in-out infinite;
          transform-origin: 70px 68px;
        }
        .pup-back-a {
          animation: pup-run-back-a ${cycle} ease-in-out infinite;
          transform-origin: 104px 64px;
        }
        .pup-back-b {
          animation: pup-run-back-b ${cycle} ease-in-out infinite;
          transform-origin: 114px 62px;
        }
        .pup-shadow {
          animation: pup-shadow-scale ${cycle} ease-in-out infinite;
          transform-origin: 86px 98px;
        }
        .pup-blink {
          animation: pup-blink 4.5s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }

        /* Canine Gallop / Trot Animations */
        @keyframes pup-body-bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(2.5px) rotate(1.5deg) scale(1.02, 0.98); }
          50% { transform: translateY(-4px) rotate(-2deg) scale(0.98, 1.02); }
          75% { transform: translateY(-1.5px) rotate(0.5deg); }
        }
        @keyframes pup-head-bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(1.5px) rotate(2deg); }
          50% { transform: translateY(-3px) rotate(-3deg); }
          75% { transform: translateY(-0.5px) rotate(1deg); }
        }
        @keyframes pup-ear-flap {
          0%, 100% { transform: rotate(-8deg); }
          30% { transform: rotate(18deg) translateY(-2px); }
          65% { transform: rotate(-14deg); }
        }
        @keyframes pup-tail-wag {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(22deg); }
        }
        @keyframes pup-tongue-bob {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(1.5px) scaleY(1.15); }
        }
        @keyframes pup-run-front-a {
          0% { transform: translate(0px, 0px) rotate(34deg); }
          25% { transform: translate(-6px, -4px) rotate(8deg); }
          50% { transform: translate(-14px, -6px) rotate(-24deg); }
          75% { transform: translate(7px, -6px) rotate(-4deg); }
          100% { transform: translate(0px, 0px) rotate(34deg); }
        }
        @keyframes pup-run-front-b {
          0% { transform: translate(-14px, -6px) rotate(-24deg); }
          25% { transform: translate(7px, -6px) rotate(-4deg); }
          50% { transform: translate(0px, 0px) rotate(34deg); }
          75% { transform: translate(-6px, -4px) rotate(8deg); }
          100% { transform: translate(-14px, -6px) rotate(-24deg); }
        }
        @keyframes pup-run-back-a {
          0% { transform: translate(-9px, -4px) rotate(-24deg); }
          25% { transform: translate(5px, -7px) rotate(-10deg); }
          50% { transform: translate(11px, 1px) rotate(24deg); }
          75% { transform: translate(1px, -3px) rotate(6deg); }
          100% { transform: translate(-9px, -4px) rotate(-24deg); }
        }
        @keyframes pup-run-back-b {
          0% { transform: translate(11px, 1px) rotate(24deg); }
          25% { transform: translate(1px, -3px) rotate(6deg); }
          50% { transform: translate(-9px, -4px) rotate(-24deg); }
          75% { transform: translate(5px, -7px) rotate(-10deg); }
          100% { transform: translate(11px, 1px) rotate(24deg); }
        }
        @keyframes pup-shadow-scale {
          0%, 100% { transform: scaleX(1); opacity: 0.18; }
          50% { transform: scaleX(0.82); opacity: 0.08; }
        }
        @keyframes pup-blink {
          0%, 94%, 100% { transform: scaleY(1); }
          96% { transform: scaleY(0.12); }
        }
      `}</style>

      {/* Ground Shadow */}
      <ellipse
        className="pup-shadow"
        cx="86"
        cy="99"
        rx="54"
        ry="5.5"
        fill="var(--color-ink)"
        opacity="0.16"
      />

      {/* BACKGROUND LEGS (Drawn behind body with darker shading) */}
      <g stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Back Leg B (behind) */}
        <path
          className="pup-back-b"
          d="M 110 64 C 117 68 128 75 125 87 Q 123 93 118 96 Q 115 97 112 96 Q 109 97 106 94 C 108 86 104 78 100 66 Z"
          fill="color-mix(in oklab, var(--color-terracotta) 85%, #3d2008)"
          opacity="0.88"
        />
        {/* Front Leg B (behind) */}
        <path
          className="pup-front-b"
          d="M 66 67 C 66 78 54 87 53 93 Q 55 96 59 95 Q 62 97 65 95 Q 68 97 70 94 C 76 86 80 77 80 67 Z"
          fill="color-mix(in oklab, var(--color-terracotta) 85%, #3d2008)"
          opacity="0.88"
        />
      </g>

      {/* TAIL (Fluffy golden feathered puppy tail curving high with fur fringe) */}
      <g className="pup-body">
        <path
          className="pup-tail"
          d="M 122 52 C 142 42 153 25 142 12 C 135 6 128 14 133 22 C 140 32 134 42 124 45"
          fill="var(--color-mustard)"
          stroke="var(--color-ink)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Fur fringes on the tail */}
        <path
          className="pup-tail"
          d="M 128 40 Q 138 34 144 24 M 132 46 Q 142 40 148 30"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.2"
          opacity="0.4"
          strokeLinecap="round"
        />
      </g>

      {/* BODY TORSO (Canine anatomy with ribcage, belly, and flank) */}
      <g className="pup-body">
        {/* Main Torso */}
        <path
          d="M 52 46 C 68 30 106 29 124 44 C 135 54 130 75 116 82 C 94 91 62 84 48 68 C 42 60 45 52 52 46 Z"
          fill="var(--color-mustard)"
          stroke="var(--color-ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Caramel mantle saddle on back */}
        <path
          d="M 60 40 C 78 30 104 31 122 43 C 128 50 126 62 118 68 C 102 54 78 52 60 40 Z"
          fill="var(--color-terracotta)"
          opacity="0.35"
        />

        {/* Fluffy cream chest and belly fluff */}
        <path
          d="M 49 60 C 58 72 74 81 92 81 C 76 83 58 78 48 68 Z"
          fill="var(--color-cream)"
          opacity="0.85"
        />

        {/* Soft sketch fur strokes on rump and shoulder */}
        <path
          d="M 108 45 Q 114 54 109 61 M 94 40 Q 100 48 95 56 M 58 58 Q 63 65 60 72"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.4"
          opacity="0.3"
          strokeLinecap="round"
        />
      </g>

      {/* HEAD GROUP (Anatomical puppy head with realistic snout, floppy ears, and open panting mouth) */}
      <g className="pup-head">
        {/* Floppy Left / Back Ear */}
        <path
          className="pup-ear"
          d="M 46 25 C 38 18 28 22 26 36 C 24 50 32 62 40 60 C 44 58 46 48 46 38 Z"
          fill="var(--color-terracotta)"
          stroke="var(--color-ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Inner ear soft pink warmth */}
        <path
          className="pup-ear"
          d="M 32 34 C 30 44 35 52 39 51 C 41 50 42 42 42 34 Z"
          fill="var(--color-peach)"
          opacity="0.5"
        />

        {/* Head Crown & Face structure */}
        <path
          d="M 44 26 C 58 24 72 32 72 46 C 72 60 58 68 44 67 C 32 66 28 54 32 42 C 34 34 38 27 44 26 Z"
          fill="var(--color-mustard)"
          stroke="var(--color-ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Muzzle extending forward (Canine snout) */}
        <path
          d="M 36 44 C 26 44 20 48 20 54 C 20 60 28 65 38 65 C 44 65 48 60 48 54 C 48 48 44 44 36 44 Z"
          fill="color-mix(in oklab, var(--color-mustard) 90%, var(--color-cream))"
          stroke="var(--color-ink)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Open happy puppy mouth (lower jaw) */}
        <path
          d="M 23 57 C 23 63 32 66 38 64"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Pink panting tongue lolling out */}
        <g className="pup-tongue">
          <path
            d="M 24 57 C 21 62 23 68 28 68 C 32 68 33 63 32 58 Z"
            fill="#f48fb1"
            stroke="var(--color-ink)"
            strokeWidth="1"
          />
          {/* Tongue midline crease */}
          <line x1="27" y1="58" x2="27" y2="66" stroke="#c2185b" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* Cute dog nose leather with nostrils */}
        <path
          d="M 19 50 C 18 47 23 45 25 47 C 27 48 27 52 24 53 C 21 54 19 52 19 50 Z"
          fill="#2b170a"
          stroke="var(--color-ink)"
          strokeWidth="1"
        />
        {/* Nostril glint */}
        <ellipse cx="23" cy="48" rx="1.2" ry="0.8" fill="#4a2c16" />

        {/* Whisker freckle dots on muzzle */}
        <circle cx="28" cy="51" r="0.7" fill="var(--color-ink)" opacity="0.5" />
        <circle cx="31" cy="53" r="0.7" fill="var(--color-ink)" opacity="0.5" />
        <circle cx="33" cy="50" r="0.7" fill="var(--color-ink)" opacity="0.5" />

        {/* Floppy Right Ear (Draped naturally over the crown) */}
        <path
          className="pup-ear"
          d="M 52 26 C 62 24 69 32 67 46 C 65 58 56 65 50 63 C 46 61 46 48 48 36 Z"
          fill="var(--color-terracotta)"
          stroke="var(--color-ink)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Warm pink blush on cheeks */}
        <circle cx="48" cy="54" r="5" fill="var(--color-peach)" opacity="0.5" />

        {/* Eye: Soulful, warm dark chocolate puppy eye */}
        <ellipse
          className="pup-blink"
          cx="43"
          cy="40"
          rx="5"
          ry="6"
          fill="#2d1607"
          stroke="var(--color-ink)"
          strokeWidth="1.4"
        />
        {/* Warm amber iris rim */}
        <ellipse cx="43" cy="41" rx="4.2" ry="4.8" fill="#5a3111" />
        {/* Black pupil */}
        <circle cx="43" cy="41" r="3.2" fill="#180b03" />
        {/* Bright white primary spark catchlight */}
        <circle cx="41.5" cy="38.5" r="1.6" fill="white" />
        {/* Secondary soft reflection glint */}
        <circle cx="44.5" cy="42" r="0.8" fill="white" opacity="0.85" />
        {/* Eyebrow fur tuft */}
        <path
          d="M 38 33 Q 43 31 48 33"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* FOREGROUND LEGS (Drawn last so they reside in front of body) */}
      <g stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="var(--color-mustard)">
        {/* Front Leg A (reaching forward, true puppy paw with pads) */}
        <path
          className="pup-front-a"
          d="M 58 66 C 58 77 46 86 45 92 Q 47 95 50 94 Q 53 96 56 94 Q 59 96 61 93 C 67 85 71 76 71 66 Z"
        />
        {/* Back Leg A (driving off with puppy pads) */}
        <path
          className="pup-back-a"
          d="M 103 64 C 109 68 120 75 117 87 Q 115 93 110 95 Q 107 97 104 95 Q 101 97 98 94 C 100 86 96 77 92 64 Z"
        />
      </g>

      {/* Puppy paw pads on foreground feet */}
      <g fill="var(--color-peach)" opacity="0.85">
        <ellipse className="pup-front-a" cx="50" cy="94" rx="1.5" ry="1.2" />
        <ellipse className="pup-front-a" cx="54" cy="95" rx="1.5" ry="1.2" />
        <ellipse className="pup-back-a" cx="106" cy="95" rx="1.6" ry="1.3" />
        <ellipse className="pup-back-a" cx="111" cy="94" rx="1.6" ry="1.3" />
      </g>
    </svg>
  );
}

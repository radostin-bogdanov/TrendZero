/**
 * Wave divider component
 * SVG wave for smooth section transitions between Hero and Problem
 */
export function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden>
      <svg
        className="relative block w-full h-12 sm:h-16"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L50 105C100 90 200 60 300 45C400 30 500 30 600 37.5C700 45 800 60 900 67.5C1000 75 1100 75 1150 75L1200 75V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
          fill="hsl(var(--muted) / 0.5)"
        />
      </svg>
    </div>
  );
}

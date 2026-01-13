export function GrainOverlay() {
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999]"
        style={{ filter: 'url(#noiseFilter)' }}
      />
    </>
  );
}

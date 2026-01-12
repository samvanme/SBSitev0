import PropTypes from 'prop-types';

/**
 * Waveform - Reusable audio waveform visualization
 *
 * @example
 * <Waveform state="playing" color="brand" />
 * <Waveform state="paused" color="white" bars={12} />
 * <Waveform state="inactive" color="brand" />
 */
export default function Waveform({
  state = 'playing',
  color = 'brand',
  bars = 16,
}) {
  const colorClasses = {
    brand: 'bg-brand-blue',
    white: 'bg-white',
  };

  const bgColor = colorClasses[color] || colorClasses.brand;

  // Generate bar heights and delays for natural waveform appearance
  const generateBars = () => {
    return Array.from({ length: bars }, (_, i) => {
      // Create varied heights using modular arithmetic
      const heightVariation = 16 + (i % 3) * 8 + ((i * 7) % 5) * 2;
      // Stagger animation delays
      const delay = (i * 0.1) % 1.6;

      return { height: heightVariation, delay };
    });
  };

  const barData = generateBars();

  return (
    <div
      className="h-14 bg-slate-800 border-2 border-white/10 flex items-center justify-center gap-0.5 px-4"
      role="img"
      aria-label={`Audio waveform - ${state}`}
    >
      {barData.map((bar, i) => (
        <div
          key={i}
          className={`
            w-1 ${bgColor}
            ${state === 'playing' ? 'animate-waveform motion-reduce:animate-none' : ''}
            ${state === 'paused' ? 'opacity-60' : ''}
            ${state === 'inactive' ? 'opacity-30' : ''}
            motion-reduce:opacity-60
          `}
          style={{
            height: state === 'inactive' ? '8px' : `${bar.height}px`,
            animationDelay: state === 'playing' ? `${bar.delay}s` : undefined,
            transition: 'height 0.3s ease, opacity 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

Waveform.propTypes = {
  /** Animation state */
  state: PropTypes.oneOf(['playing', 'paused', 'inactive']),
  /** Bar color theme */
  color: PropTypes.oneOf(['brand', 'white']),
  /** Number of bars to display */
  bars: PropTypes.number,
};

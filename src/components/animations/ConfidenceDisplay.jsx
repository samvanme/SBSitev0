import PropTypes from 'prop-types';

/**
 * ConfidenceDisplay - Show AI confidence/certainty levels
 *
 * @example
 * <ConfidenceDisplay value={94} format="percentage" />
 * <ConfidenceDisplay value={75} format="level" />
 * <ConfidenceDisplay value={50} format="bar" />
 */
export default function ConfidenceDisplay({
  value,
  format = 'percentage',
  size = 'md',
}) {
  const sizeClasses = {
    sm: { text: 'text-xs', bar: 'h-1 w-16', badge: 'px-2 py-0.5' },
    md: { text: 'text-sm', bar: 'h-2 w-24', badge: 'px-3 py-1' },
  };

  const sizes = sizeClasses[size];

  // Determine confidence level and color
  const getLevel = (val) => {
    if (val >= 80) return { label: 'HIGH', color: 'emerald' };
    if (val >= 50) return { label: 'MEDIUM', color: 'amber' };
    return { label: 'LOW', color: 'red' };
  };

  const level = getLevel(value);

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-500',
      bgLight: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
    },
    amber: {
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
    },
    red: {
      bg: 'bg-red-500',
      bgLight: 'bg-red-500/10',
      border: 'border-red-500/30',
      text: 'text-red-400',
    },
  };

  const colors = colorClasses[level.color];

  // Percentage format - simple number display
  if (format === 'percentage') {
    return (
      <span
        className={`${sizes.badge} ${colors.bgLight} border ${colors.border} ${colors.text} ${sizes.text} font-mono inline-flex items-center gap-1`}
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Confidence: ${value}%`}
      >
        {value}%
      </span>
    );
  }

  // Level format - label display (HIGH/MEDIUM/LOW)
  if (format === 'level') {
    return (
      <span
        className={`${sizes.badge} ${colors.bgLight} border ${colors.border} ${colors.text} ${sizes.text} font-mono uppercase tracking-wide inline-flex items-center gap-2`}
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Confidence level: ${level.label}`}
      >
        <span className={`w-1.5 h-1.5 ${colors.bg}`} />
        {level.label}
      </span>
    );
  }

  // Bar format - visual progress bar
  if (format === 'bar') {
    return (
      <div
        className="inline-flex items-center gap-2"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Confidence: ${value}%`}
      >
        <div className={`${sizes.bar} bg-slate-800 border border-white/10`}>
          <div
            className={`h-full ${colors.bg} transition-all duration-300`}
            style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
          />
        </div>
        <span className={`${sizes.text} font-mono ${colors.text}`}>
          {value}%
        </span>
      </div>
    );
  }

  return null;
}

ConfidenceDisplay.propTypes = {
  /** Confidence value 0-100 */
  value: PropTypes.number.isRequired,
  /** Display format */
  format: PropTypes.oneOf(['percentage', 'level', 'bar']),
  /** Component size */
  size: PropTypes.oneOf(['sm', 'md']),
};

const MILLISECONDS_IN_YEAR = 31536000000;
const MILLISECONDS_IN_MONTH = 2592000000;
const MILLISECONDS_IN_DAY = 86400000;
const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_MINUTE = 60000;

const INTERVALS = [
  { label: 'year', divisor: MILLISECONDS_IN_YEAR },
  { label: 'month', divisor: MILLISECONDS_IN_MONTH },
  { label: 'day', divisor: MILLISECONDS_IN_DAY },
  { label: 'hour', divisor: MILLISECONDS_IN_HOUR },
  { label: 'minute', divisor: MILLISECONDS_IN_MINUTE },
];

export default function getTimeDifference(createdDate, intervals = INTERVALS) {
  const currentDate = new Date();
  const timeDifference = currentDate - createdDate;

  for (const interval of intervals) {
    const value = Math.floor(timeDifference / interval.divisor);
    if (value >= 1) {
      return value === 1
        ? `1 ${interval.label} ago`
        : `${value} ${interval.label}s ago`;
    }
  }

  return 'just now';
}

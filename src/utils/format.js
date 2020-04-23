import { formatDistance, parseISO } from 'date-fns';

export default function format(time) {
  return formatDistance(parseISO(time), new window.Date(), {
    addSuffix: true,
  });
}

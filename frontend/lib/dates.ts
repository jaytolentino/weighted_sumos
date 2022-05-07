import { range } from 'lodash';
import { DateTime } from 'luxon';

const thisYear = () => DateTime.now().year;

// e.g. Sep 24, 2021
const todayLocaleString = () => DateTime.now().toLocaleString(DateTime.DATE_MED);

// e.g. September 24, 2021
const toFullDate = (iso: string) => (
  DateTime.fromISO(iso).toLocaleString(DateTime.DATE_FULL)
);

// e.g. 9/24/2021
const toShortDate = (iso: string) => (
  DateTime.fromISO(iso).toLocaleString(DateTime.DATE_SHORT)
);

// e.g. Sep 24, 2021
const toMediumDate = (iso: string) => (
  DateTime.fromISO(iso).toLocaleString(DateTime.DATE_MED)
);

// e.g. 9/24/21
const toTwoDigitShortDate = (iso: string) => (
  DateTime.fromISO(iso).toLocaleString({ month: '2-digit', day: '2-digit', year: '2-digit' })
);

const yearsBefore = (start: DateTime, yearsCount: number): number[] => (
  range(start.year, start.year - yearsCount)
);

export {
  thisYear,
  todayLocaleString,
  toFullDate,
  toMediumDate,
  toShortDate,
  toTwoDigitShortDate,
  yearsBefore,
}
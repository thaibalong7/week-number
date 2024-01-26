import { DayMapper, WeekIndexed } from "./types";

export const DAY_MAPPER: DayMapper = {
  'mon': 1,
  'tues': 2,
  'wed': 3,
  'thus': 4,
  'fri': 5,
  'sat': 6,
  'sun': 0,
  0: 'sun',
  1: 'mon',
  2: 'tues',
  3: 'wed',
  4: 'thus',
  5: 'fri',
  6: 'sat',
}

export const DEFAULT_WEEK_INDEXED: WeekIndexed = /**/['mon', 'tues', 'wed', 'thus', 'fri', 'sat', 'sun'];
export const ISO_WEEK_INDEXED: WeekIndexed = /*---*/['sun', 'mon', 'tues', 'wed', 'thus', 'fri', 'sat'];

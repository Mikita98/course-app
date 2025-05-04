import RadioButton from "@/components/RadioButton.tsx";
import {FC} from "react";
import {CourseSessionInfo, Instructor, Location, Pricing} from "@/types";
import {DateTime} from "luxon";

const formatDatesWithLuxon = (dates: [number, number][], timezone: string): string => {
  const formattedDates = dates.map(([startTimestamp]) => {
    const date = DateTime.fromSeconds(startTimestamp).setZone(timezone);
    return {
      dayName: date.toFormat('EEEE'),
      month: date.toFormat('MMMM'),
      day: date.toFormat('d')
    };
  });

  if (dates.length === 1) {
    const {dayName, month, day} = formattedDates[0];
    return `${dayName}, ${month} ${day}`;
  }

  const {month} = formattedDates[0];
  const dayNames = formattedDates.map(d => d.dayName).join(' & ');
  const days = formattedDates.map(d => d.day).join(' & ');

  return `${dayNames}, ${month} ${days}`;
};


const formatTimeRange = (dates: [number, number][], timezone: string): string => {
  const [startTime, endTime] = dates[0];

  const start = DateTime.fromSeconds(startTime).setZone(timezone)
    .toFormat('h:mm a');

  const end = DateTime.fromSeconds(endTime).setZone(timezone)
    .toFormat('h:mm a');

  const formattedStart = start.replace(':00', '');
  const formattedEnd = end.replace(':00', '');

  return `${formattedStart} - ${formattedEnd}`;
};


const formatTimezone = (timezone: string): string => {
  const cityName = timezone.split('/').pop() || timezone;

  if (cityName === 'New_York') {
    return 'New York City';
  }


  return cityName.replace('_', ' ');
};

const formatPrice = (pricing: Pricing): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    useGrouping: false,
    maximumFractionDigits: 0
  });
  return `${formatter.format(pricing.amount)} USD`;
};

const formatValidUntil = (timestamp: number): string => {
  return DateTime.fromSeconds(timestamp)
    .toFormat('MMMM d'); // 'MMMM' for full month name, 'd' for day of month
};


interface CourseSessionProps {
  id: number
  selected: number;
  dates: CourseSessionInfo['dates'];
  instructors: Instructor[];
  location: Location;
  pricing: Pricing;
  onSelect: (value: number) => void;
}

export const CourseSession: FC<CourseSessionProps> = ({
                                                        id,
                                                        dates,
                                                        instructors,
                                                        location,
                                                        pricing,
                                                        selected,
                                                        onSelect
                                                      }) => {

  const formattedDates = formatDatesWithLuxon(dates, location.timezone);
  const formattedTimeRange = formatTimeRange(dates, location.timezone)
  const formattedTimeZone = formatTimezone(location.timezone)
  const formattedPrice = formatPrice(pricing)
  const formattedValidUntil = formatValidUntil(pricing.valid_until)
  const instructor = instructors[0]

  return (
    <div className="py-8 px-6 w-full w-[472px] w-full border-2 border-solid border-neutral-80 rounded-2">
      <div className="flex gap-2 items-center">
        <RadioButton
          modelValue={selected}
          onChange={onSelect}
          value={id}
        />
        <p className="text-primary-30 text-heading-small">Virtual Course</p>
      </div>

      <div className="mt-2 flex pl-8 gap-4 justify-between">
        <div>
          <p className="text-title-small-bold break-words">{formattedDates}</p>
          <p className="text-title-small-regular mt-2">{formattedTimeRange}</p>
          <p className="text-body-medium-regular mt-2">{formattedTimeZone} Time</p>
          <p className="text-body-medium-regular mt-4">{formattedPrice} Until {formattedValidUntil}</p>
        </div>

        <div className="shrink-0">
          <img
            src={instructor.portrait_image}
            alt={`${instructor.first_name} ${instructor.last_name}`}
            className="w-20 h-20 rounded-full object-cover"
          />
          <p className="text-body-medium-regular">Instructor:</p>
          <p className="text-body-medium-regular">{instructor.first_name} {instructor.last_name}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseSession
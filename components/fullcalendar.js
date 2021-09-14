import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'

export default function FullCalendar(props) {
  return (
    <Calendar {...props} plugins={[dayGridPlugin]} />
  );
}
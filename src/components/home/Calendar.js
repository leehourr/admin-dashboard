import React, { useState } from "react";
import Header from "../Ui/Header";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!C
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import listPlugin from "@fullcalendar/list"; // a plugin!
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
  const [currentEvent, setCurrentEvent] = useState([]);

  const dateClickHandler = (selected) => {
    const title = prompt("Enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (!title) return;
    if (selected) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const eventHandler = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <div>
      <Header title="CALENDAR" subtitle="Full Interactive Calendar Page" />
      <div className="w-full h-full flex items-start justify-between gap-4 ">
        <div className="w-[20%] h-full p-3  shadow-[5px_5px_7px_rgba(0,0,0,0.2),-5px_-5px_9px_rgba(255,255,255,10)] dark:shadow-[10px_10px_20px_rgba(43,43,43),-5px_-5px_9px_rgba(59,59,59)]">
          <h1>Events</h1>
          <ul className="bg-[#4E4F50] p-3 rounded-lg">
            {currentEvent.map((i) => (
              <li
                key={i.id}
                className=" bg-cyan-700 dark:bg-cyan-600 p-3 rounded-lg my-2"
              >
                <h2>{i.title}</h2>
                <h3 className="font-bold">
                  {formatDate(i.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </h3>
              </li>
            ))}
          </ul>
        </div>
        {/* calendar  */}
        <div className="w-full flex-grow ml-[15px]">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={dateClickHandler}
            eventClick={eventHandler}
            eventsSet={(events) => setCurrentEvent(events)}
            initialEvents={[
              { id: "1234", title: "Dating Makima", date: "2023-03-16" },
              { id: "1233", title: "Go buy a lambo", date: "2023-03-17" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

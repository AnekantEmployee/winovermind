"use client";

import { useState } from "react";

export default function ProgramCalendarSection() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 1)); // February 2026

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Events data
  const events = [
    { date: 6, type: "digital", title: "Digital Workshop", span: 1 },
    { date: 8, type: "residential", title: "Residential Program", span: 3 },
    { date: 15, type: "residential", title: "Residential Program", span: 1 },
    { date: 17, type: "residential", title: "Residential Program", span: 1 },
    { date: 18, type: "residential", title: "Residential Program", span: 1 },
    { date: 21, type: "residential", title: "Residential Program", span: 3 },
    { date: 20, type: "residential", title: "Residential Program", span: 2 },
    { date: 22, type: "residential", title: "Residential Program", span: 3 },
  ];

  const getEventForDate = (day: number) => {
    return events.find((event) => event.date === day);
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/ChatGPT Image Feb 17, 2026, 10_50_45 AM 1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase text-xs font-semibold tracking-wider mb-3">
            PROGRAM CALENDAR
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Program <span className="text-teal-600">Calendar</span>
          </h2>
          <p className="text-gray-600 text-base">
            Browse our program schedule and sign up for our upcoming sessions.
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-3xl shadow-xl p-4 md:p-8 mb-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button
              onClick={previousMonth}
              className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h3 className="text-base md:text-xl font-semibold text-gray-900">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button
              onClick={nextMonth}
              className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2 md:mb-4">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-xs md:text-sm font-medium text-gray-600 py-1 md:py-2"
              >
                <span className="sm:hidden">{day.slice(0, 1)}</span>
                <span className="hidden sm:inline">{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDay }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="h-24 md:h-28 border border-gray-100 rounded-lg"
              ></div>
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const event = getEventForDate(day);

              return (
                <div
                  key={day}
                  className="relative h-24 md:h-28 border border-gray-100 rounded-lg"
                >
                  <div className="absolute inset-2 flex flex-col justify-center gap-1">
                    <div className="text-center text-xs md:text-sm font-medium text-gray-700">
                      {day}
                    </div>
                    {event && (
                      <div
                        className={`min-h-[2.5rem] md:min-h-[3rem] rounded-md md:rounded-lg flex items-center justify-center text-center text-[9px] leading-tight md:text-xs text-white font-medium px-1 py-1 ${
                          event.type === "residential"
                            ? "bg-teal-600"
                            : "bg-teal-400"
                        }`}
                        style={{
                          gridColumn:
                            event.span > 1 ? `span ${event.span}` : "auto",
                        }}
                      >
                        {event.title}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-600"></div>
              <span className="text-xs md:text-sm text-gray-600">
                Residential
              </span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-teal-400"></div>
              <span className="text-xs md:text-sm text-gray-600">Digital</span>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg transition shadow-lg hover:shadow-xl">
            View All Sessions
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { openingHours } from "@/config/clinic";

export function OpeningHours() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    setTodayIndex((new Date().getDay() + 6) % 7);
  }, []);

  return (
    <div className="card hours">
      <h3>Horário de atendimento</h3>
      <dl>
        {openingHours.map((entry, index) => (
          <div key={entry.day} className={index === todayIndex ? "today" : undefined}>
            <dt>{entry.day}</dt>
            <dd>{entry.hours}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

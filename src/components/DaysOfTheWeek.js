import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function DaysOfTheWeek() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  return (
    <div>
        <h3>Today is: 
            <span className="badge badge-secondary">{day}</span>
        </h3>
        <h3>
            {prevDay && 
                <span>Previous work day was: 
                    <span className="badge badge-dark">{prevDay}</span>
                </span>
            }
        </h3>
        <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

export default DaysOfTheWeek;

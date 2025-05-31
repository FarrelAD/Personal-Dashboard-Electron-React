import { useEffect, useState } from "react";
import DragRegion from "../Components/DragRegion";
import YourTasks from "../Components/Dashboard/YourTasks";
import YourProductivityApps from "../Components/Dashboard/YourProductivityApps";
import YourProjects from "../Components/Dashboard/YourProjects";
import { getCurrentDate } from "../Utils/DateAndTimeHelper";

function Dashboard() {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState("Good morning!");

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    function updateGreeting() {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good evening");
      } else {
        setGreeting("Good night");
      }
    }

    updateGreeting();

    const now = new Date();
    const msUntilNextHour =
      (60 - now.getMinutes()) * 60 * 1000 -
      now.getSeconds() * 1000 -
      now.getMilliseconds();

    const timeoutHourlyID = setTimeout(() => {
      updateGreeting();
      setInterval(updateGreeting, 60 * 60 * 1000);
    }, msUntilNextHour);

    return () => {
      clearInterval(timerID);
      clearInterval(timeoutHourlyID);
    };
  }, []);

  return (
    <div className="bg-white w-full min-h-screen text-black px-24 py-16 flex flex-col gap-9 select-none">
      <DragRegion />

      <div className="flex justify-between items-center">
        <h1 className="py-4 text-4xl font-bold">{greeting}, User!</h1>
        <div className="text-right">
          <p className="font-semibold">{getCurrentDate()}</p>
          <p className="text-2xl">{time.toLocaleTimeString()}</p>
        </div>
      </div>

      <YourTasks />
      <YourProductivityApps />
      <YourProjects />

    </div>
  );
}

export default Dashboard;

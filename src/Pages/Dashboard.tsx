import { useEffect, useState } from "react";
import appsList from "../data/AppsList";
import { Card, CardFooter } from "@fluentui/react-components";
import { loadAssetByName } from "../Utils/AssetLoader";
import DailyTasks from "../Components/DailyTasks";
import { Calendar } from "@fluentui/react-calendar-compat";

function Dashboard() {
  const [socMedLogoUrls, setSocMedLogoUrls] = useState<(string | null)[]>([]);
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

  useEffect(() => {
    async function loadAllSocMedLogo() {
      const urls = await Promise.all(
        appsList.map((app, index) => loadAssetByName(appsList, index))
      );
      setSocMedLogoUrls(urls);
    }

    loadAllSocMedLogo();
  }, [appsList]);

  const now = new Date();
  const date = now.getDate();
  const month = now.toLocaleString("en-US", { month: "long" });
  const year = now.getFullYear();
  const currentDate = `${date} ${month} ${year}`;

  return (
    <div className="bg-white min-w-screen w-full min-h-screen text-black px-24 py-16 flex flex-col gap-9 select-none">
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-4xl font-bold">{greeting}, User!</h1>
        <div className="text-right">
          <p className="font-semibold">{currentDate}</p>
          <p className="text-2xl">{time.toLocaleTimeString()}</p>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row justify-between gap-8">
        <DailyTasks />
        <Calendar />
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="font-bold text-2xl">Your Productivity App</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {appsList.map((val, index) => (
            <Card
              key={index}
              className="flex! flex-col! justify-between justify-self-center hover:cursor-pointer h-40 w-32"
            >
              <div className="w-full h-full">
                <img
                  src={socMedLogoUrls[index]}
                  alt="App logo"
                  className="p-4 w-full h-full"
                />
              </div>
              <CardFooter className="text-center">
                <p className="font-semibold w-full">{val.name}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

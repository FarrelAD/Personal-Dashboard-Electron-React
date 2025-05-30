import { useEffect, useState } from "react";
import appsList from "../data/AppsList";
import { Card, CardFooter, CardPreview } from "@fluentui/react-components";
import { loadAssetByName } from "../Utils/AssetLoader";

function Dashboard() {
  const [socMedLogoUrls, setSocMedLogoUrls] = useState<(string | null)[]>([]);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
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
    <div className="bg-white min-w-screen w-fit min-h-screen h-fit text-black px-24 py-16 flex flex-col gap-9 select-none">
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-4xl font-bold">Hello User!</h1>
        <div className="text-right">
          <p className="font-semibold">{currentDate}</p>
          <p className="text-2xl">{time.toLocaleTimeString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
        {appsList.map((val, index) => (
          <Card key={index} className="hover:cursor-pointer xl:max-h-36 xl:max-w-56">
            <CardPreview>
              <img src={socMedLogoUrls[index]} alt="App logo" className="p-8 md:p-14 lg:p-16 xl:py-4 xl:h-8 " />
            </CardPreview>
            <CardFooter className="text-center">
              <p className="font-semibold w-full">{val.name}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <footer className="bg-amber-100 w-full h-36 rounded-lg shadow-md"></footer>
    </div>
  );
}

export default Dashboard;

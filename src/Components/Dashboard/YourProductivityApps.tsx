import { Card, CardFooter } from "@fluentui/react-components";
import AppsList from "../../data/AppsList";
import { useEffect, useState } from "react";
import { loadAssetByName } from "../../Utils/AssetLoader";

function YourProductivityApps() {
  const [socMedLogoUrls, setSocMedLogoUrls] = useState<(string | null)[]>([]);

  useEffect(() => {
    async function loadAllSocMedLogo() {
      const urls = await Promise.all(
        AppsList.map((app, index) => loadAssetByName(AppsList, index))
      );
      setSocMedLogoUrls(urls);
    }

    loadAllSocMedLogo();
  }, [AppsList]);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-bold text-2xl">Your Productivity App</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] gap-x-6 gap-y-12">
        {AppsList.map((val, index) => (
          <Card
            key={index}
            className="flex! flex-col! justify-between justify-self-center hover:cursor-pointer h-40 w-32 lg:h-fit lg:w-24 hover:bg-gray-200!"
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
  );
}

export default YourProductivityApps;

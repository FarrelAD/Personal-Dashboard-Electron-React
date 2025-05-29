import { useEffect, useState } from "react"
import Card from "./Components/Card";
import appsList from "./data/apps-list";

function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerID);
    }, []);

    const now = new Date();
    const date = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();
    const currentDate = `${date} ${month} ${year}`;

    return (
        <div className="bg-gray-900 min-w-screen w-fit min-h-screen h-fit text-white px-24 py-16 flex flex-col gap-9">
            <div className="flex justify-between items-center">
                <h1 className="py-4 text-4xl font-bold">Hello User!</h1>
                <div className="text-right">
                    <p className="font-semibold">{currentDate}</p>
                    <p className="text-2xl">{time.toLocaleTimeString()}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
                {appsList.map((val, index) => (
                    <Card key={index} title={val.name} url={val.url} />
                ))}
            </div>

            <footer className="bg-cyan-950 w-full h-36 rounded-lg shadow-lg shadow-black">

            </footer>
        </div>
    );
}

export default App;

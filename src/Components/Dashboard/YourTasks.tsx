import { Calendar } from "@fluentui/react-calendar-compat";
import DailyTasks from "../DailyTasks";


function YourTasks() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-8">
      <DailyTasks />
      <Calendar />
    </section>
  );
}

export default YourTasks;

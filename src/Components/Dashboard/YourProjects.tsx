import { Card, ProgressBar, Text } from "@fluentui/react-components";
import UserProjects from "../../data/UserProjects";

function YourProjects() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="font-bold text-2xl">Your Projects</h1>
      <div className="flex flex-col gap-6 overflow-y-auto">
        {UserProjects.map((project, index) => (
          <Card
            key={index}
            className="w-full rounded-2xl! bg-purple-50! p-8! hover:cursor-pointer hover:bg-purple-200!"
          >
            <div className="flex justify-between items-center gap-8 h-fit">
              <Text as="h5" weight="semibold" size={500} className="w-36">
                {project.name}
              </Text>
              <div className="w-full flex gap-6 items-center">
                <ProgressBar
                  value={project.progress}
                  max={100}
                  thickness="large"
                  shape="rounded"
                />
                <Text as="p">{project.progress}%</Text>
              </div>
            </div>

            <div className="flex flex-col gap-0 h-fit">
              <div>Start date: {project.startDate}</div>
              <div>Target finish: {project.targetFinish}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default YourProjects;

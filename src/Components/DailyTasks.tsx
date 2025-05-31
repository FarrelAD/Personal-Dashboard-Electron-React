import { Card, Text } from "@fluentui/react-components";
import UserTasks from "../data/UserTasks";

function DailyTasks() {
    return (
        <Card className="bg-amber-100! rounded-xl! w-full px-10! py-8!">
            <Text as="h2" size={600} weight="semibold">Your Task</Text>

            <div className="h-40 overflow-y-auto">
                {UserTasks.map((task, index) => (
                    <Card key={index} className="bg-inherit! hover:cursor-pointer hover:bg-amber-200!">
                        <Text as="p">{task.startTime}</Text>
                        <Text as="h5" weight="semibold">{task.title}</Text>
                    </Card>
                ))}
            </div>
        </Card>
    );
}

export default DailyTasks;
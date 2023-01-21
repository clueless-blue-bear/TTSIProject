import { User } from "./user.model";
import { Task } from "./task.model";
import { TaskTests } from "./task-tests.model";

export interface Solution {
    id: number;
    task: number;
    taskName: string;
    user: string;
    result: string;
}
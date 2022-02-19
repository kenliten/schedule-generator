import { Subject } from "./subject";
import { Grade } from "./grade";

export interface Teacher {
    name: string;
    grades: Grade[];
    subjects: Subject[];
    hoursByWeek: number;
}

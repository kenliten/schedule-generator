import { Grade } from "./grade";
import { Subject } from "./subject";
import { Teacher } from "./teacher";

export interface Session {
    type: SessionType;
    hour: SessionHour;
    teacher: Teacher;
    grade: Grade;
    subject: Subject;
}

export enum SessionType {
    SIMPLE,
    DOUBLE,
}

export enum SessionHour {
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIXTH,
    SEVENTH,
    EIGHTH,
}

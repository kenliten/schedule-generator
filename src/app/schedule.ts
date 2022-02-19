import { Session } from "./session";

export interface Schedule {
    day: SchoolDay;
    sessions: Session[];
}

export enum SchoolDay {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
}
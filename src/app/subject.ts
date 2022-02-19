export interface Subject {
    type: SubjectType;
    hoursByWeek: number;
}

export enum SubjectType {
    SPANISH,
    ENGLISH,
    FRENCH,
    MATH,
    HISTORY,
    SCIENCE,
    ART,
    SPORTS,
    RELIGION,
    WORKSHOP,
}

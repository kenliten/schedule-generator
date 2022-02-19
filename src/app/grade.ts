export interface Grade {
    type: GradeType;
    label: string;
}

export enum GradeType {
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIX,
}
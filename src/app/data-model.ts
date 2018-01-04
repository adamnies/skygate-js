export class FormControl {
    value: any;
    question: String;
    questionType: any;
    conditionType?: String;
    conditionValue?: String;
    subinputs?: FormControl[];
}

export const QUESTION_TYPES = [
    'Yes/No',
    'Text',
    'Number'
];

export const CONDITION_TYPES = [
    'Equals',
    'Greater',
    'Less'
];

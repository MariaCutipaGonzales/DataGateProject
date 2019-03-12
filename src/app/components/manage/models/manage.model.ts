export class ManageListBackend {
    id: number;
    key_name: string;
    description: string;
    type: string;
    possible_values: Array<IPossibleValues>;
    sensitivy: string;
    flgSensitivy: boolean;
}

interface IPossibleValues {
    value: string;
    description: string;
}

export interface IManage {
    id:number;
    keyName:string;
    description:string;
    type: string;
    possibleValues: IPossibleValues[];
    sensitivy: string;
    flgSensitivy: boolean;
}

export class ListDataManageViewer extends ManageListBackend {
    id:number;
    keyName:string;
    description:string;
    type: string;
    possibleValues: IPossibleValues[];
    sensitivy: string;
    flgSensitivy: boolean;
    constructor(list: ManageListBackend) {
        super();
        this.id = list.id;
        this.keyName = list.key_name;
        this.description = list.description;
        this.type = list.type;
        this.possibleValues = list.possible_values;
        this.sensitivy = list.sensitivy;
        this.flgSensitivy = list.flgSensitivy;
    }
}

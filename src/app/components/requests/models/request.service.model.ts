export class RequestListBack {
    id: number;
    date: string;
    reason: string;
    status: string;
    statusCode: number;
}

export class ListDataViewer extends RequestListBack {
    public statusClass: string;
    constructor(list: RequestListBack) {
        super();
        this.id = list.id;
        this.date = list.date;
        this.reason = list.reason;
        this.status = list.status;
        this.statusCode = list.statusCode;
        this.statusClass = transformClass[list.status];
    }
}

const transformClass: { [key: string]: string } = {
    'Pending': 'state state--pending',
    'Approved': 'state state--approved',
    'Denied': 'state state--denied',
};

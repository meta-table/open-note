export interface INote {
    readonly id: string;
    content: {
        title: string;
        body: string;
    }
    date: {
        readonly created: number;
        updated: number;
    }
    meta: {
        parent: string[];
        permission: string; // 'writable', 'read_only', 'forced_read_only'
        selectedLine?: number;
    }
}
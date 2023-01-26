import {INote} from "../interfaces";

const helper = {
    formatDate: (date: string) => {
        const formatDate = new Date(date)
            .toDateString()
            .split(' ')
            .slice(-3)
            .join(' ');

        return formatDate.substring(0, formatDate.length - 5).concat(', ') + formatDate.substring(formatDate.length, formatDate.length - 4);
    },

    countStatus: (val: string, status: string, arr: INote[]) => {
        return arr.filter(item => item.noteStatus === status && item.category === val).length;
    },

    guid: () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },
}

export {
    helper,
}

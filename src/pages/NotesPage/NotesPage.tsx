import {FC} from "react";

import {ArchNotes, Notes, Statistic} from "../../components";

const NotesPage: FC = () => {
    return (
        <div className={"mb-10"}>
            <h2 className={"text-2xl text-gray-700 mt-5 ml-5"}>Active Notes</h2>
            <Notes/>
            <h2 className={"text-2xl text-gray-700 mt-5 ml-5"}>Statistic</h2>
            <Statistic/>
            <h2 className={"text-2xl text-gray-700 mt-5 ml-5"}>Archived Notes</h2>
            <ArchNotes/>
        </div>
    );
};

export {NotesPage};
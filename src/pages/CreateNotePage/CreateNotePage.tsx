import {FC} from "react";

import {CreateNoteForm} from "../../components";
import {Link} from "react-router-dom";

const CreateNotePage: FC = () => {

    return (
        <div>
            <Link to={'/'} className={"mt-5 mr-0 mb-1 ml-5 p-0 text-sm hover:underline before:content-['<<']"}> Back</Link>
            <CreateNoteForm/>
        </div>
    );
};

export {CreateNotePage};
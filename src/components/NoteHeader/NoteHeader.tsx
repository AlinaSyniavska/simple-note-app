import {FC} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileZipper, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

import "../../index.css";

const NoteHeader: FC = () => {
    return (
        <div>
            <div className={"note noteHeader"}>
                <div className={"noteName"}>Name</div>
                <div className={"noteCreated"}>Created</div>
                <div className={"noteCategory"}>Category</div>
                <div className={"noteContent"}>Content</div>
                <div className={"noteDates"}>Dates</div>
                <div className={"btnControl"}>
                    <div className={"btnEdit"}>
                        <FontAwesomeIcon icon={faPen}  color={'dark'} />
                    </div>
                    <div className={"btnArch"}>
                        <FontAwesomeIcon icon={faFileZipper}  color={'dark'} />
                    </div>
                    <div className={"btnTrash"}>
                        <FontAwesomeIcon icon={faTrash}  color={'dark'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export {NoteHeader};
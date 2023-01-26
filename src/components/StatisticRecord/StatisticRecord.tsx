import {FC, useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarCheck,
    faHeadSideVirus,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {helper} from "../../helpers";
import {useAppSelector} from "../../hooks";
import {noteStatus} from "../../constants";

import "../../index.css";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

interface IProps {
    category: string,
}

const StatisticRecord: FC<IProps> = ({category}) => {
    const {notes} = useAppSelector(state => state.noteReducer);
    const [icon, setIcon] = useState<IconProp>(faCalendarCheck);

    useEffect(() => {
        switch (category) {
            case 'Task':
                setIcon(faCalendarCheck);
                break;
            case 'Random Thought':
                setIcon(faHeadSideVirus);
                break;
            case 'Idea':
                setIcon(faLightbulb);
                break;
            default:
                setIcon(faCalendarCheck);
        }
    }, [])

    return (
        <div>
            <div className={"note noteItem"}>
                <div className={"noteName"}><FontAwesomeIcon icon={icon}/>  {category}</div>
                <div className={"noteContent"}>{helper.countStatus(category, noteStatus.ACTIVE, notes)}</div>
                <div className={"noteContent"}>{helper.countStatus(category, noteStatus.ARCHIVED, notes)}</div>
            </div>
        </div>
    );
};

export {StatisticRecord};
import {FC} from "react";

import "../../index.css";

const StatisticHeader: FC = () => {
    return (
        <div>
            <div className={"note noteHeader"}>
                <div className={"noteName"}>Note Category</div>
                <div className={"noteContent"}>Active</div>
                <div className={"noteContent"}>Archived</div>
            </div>
        </div>
    );
};

export {StatisticHeader};
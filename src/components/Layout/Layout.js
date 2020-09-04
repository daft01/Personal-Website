import React from 'react';

import Aux from "../../hoc/Aux";
import BoardBuilder from "../../containers/BoardBuilder/BoardBuilder";

const layout = () => (
    <Aux>
        <div>Nav Bar</div>
        <BoardBuilder />
    </Aux>
);

export default layout;
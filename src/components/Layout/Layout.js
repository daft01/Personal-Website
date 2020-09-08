import React from 'react';

import Aux from "../../hoc/Aux";
import BoardBuilder from "../../containers/BoardBuilder/BoardBuilder";
import Navbar from "../Navbar/Navbar";
const layout = () => (
    <Aux>
        <Navbar />
        <BoardBuilder />
    </Aux>
);

export default layout;
import React from "react";
import { observer } from "mobx-react";

class View extends React.Component {
    render() {
        return (
            <div>View</div>
        );
    }
}

export default observer(View)

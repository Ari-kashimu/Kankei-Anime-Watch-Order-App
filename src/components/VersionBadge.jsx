import React from "react";
import pkg from "../../package.json";

const VersionBadge = () => {
    return (
        <div className="absolute bg-rose-500 m-3 py-1 px-2 rounded ">
            Beta v{pkg.version}
        </div>
    );
};

export default VersionBadge;

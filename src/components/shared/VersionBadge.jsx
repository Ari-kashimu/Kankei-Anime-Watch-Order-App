import React from "react";
import pkg from "../../../package.json";

const VersionBadge = () => {
    return (
        <div className="rounded text-neutral-300 text-sm max-[900px]:text-xs font-semibold ">
            v{pkg.version}
        </div>
    );
};

export default VersionBadge;

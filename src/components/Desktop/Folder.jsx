import React from "react";

export default function Folder({ children }){
    return (
        <div className="folder-window">
            <div className="folder-content">
                {children}
            </div>
        </div>
    )
};
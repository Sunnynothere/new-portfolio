import React from "react";
import Folder from "./Folder";

const Window = ({ folderName, onClose, children }) => {
    return (
        <div className="window-overlay">
        <Folder>
          <div className="window-header">
            <span className="window-title">/{folderName}</span>
            <span className="close-button" onClick={onClose}>[x]</span>
          </div>
          <div className="window-content">
            {children}
          </div>
        </Folder>
      </div>
    )
};

export default Window;
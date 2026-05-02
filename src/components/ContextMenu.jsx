import React from "react";
import "../styles/contextmenu.css";

const ContextMenu = ({ x, y, show, options, onClose }) => {
    if (!show) return null;

    return (
        <div
            className="context-menu"
            style={{ top: y, left: x }}
            onClick={(e) => e.stopPropagation()}
        >
            {options.map((option, index) => (
                <React.Fragment key={index}>
                    {option.divider ? (
                        <div className="context-menu-divider" />
                    ) : (
                        <div
                            className={`context-menu-item ${option.className || ""}`}
                            onClick={() => {
                                option.onClick();
                                onClose();
                            }}
                        >
                            {option.icon}
                            <span>{option.label}</span>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ContextMenu;
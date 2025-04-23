import React from "react";

export default function Introduction() {
    return (
        <div className="introduction-content">
            <div className="profile-name">
                <div className="profile-pic">
                    <img src="/assets/Folder-introduction/option-two.png" className="picture" />
                </div>
                <h1 className="name">Hello! I am <span>SOL</span></h1>
            </div>
            <div className="profile-letter">
                <div className="notebook-paper">
                <p><span className="greeting">Hey there!</span> <span className="role">WEB DEVELOPER</span> with a real passion for front-end and design. My goal is to be able to create beautiful, user-friendly interfaces.</p>
                <p>I love turning design concepts into interactive experiences, always learning new tricks and design trends to keep <span className="emphasis">my skills fresh!</span></p>
                </div>
            </div>
        </div>
    )
};
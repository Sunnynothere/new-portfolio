import React from "react";

const skills = [
    { name: 'HMTL', src: '/assets/Folder-skills/html.png' },
    { name: 'CSS', src: '/assets/Folder-skills/css.png' },
    { name: 'Sass', src: '/assets/Folder-skills/sass.png' },
    { name: 'Tailwind', src: '/assets/Folder-skills/tailwind.png' },
    { name: 'Figma', src: '/assets/Folder-skills/figma.png' },
    { name: 'JavaScript', src: '/assets/Folder-skills/javascript.png' },
    { name: 'React', src: '/assets/Folder-skills/react.png' },
    { name: 'Redux', src: '/assets/Folder-skills/redux.png' },
    { name: 'NodeJs', src: '/assets/Folder-skills/nodejs.png' },
    { name: 'express', src: '/assets/Folder-skills/express.png' },
    { name: 'postgre', src: '/assets/Folder-skills/postgre.png' }
];

export default function Skills() {
    return (
        <div className="skills-content">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    <img src={skill.src} alt={skill.name} className="skill-icon" />
                </div>
            ))}
        </div>
    )
};
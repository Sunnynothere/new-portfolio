import React from "react";

const social = [
    { name: 'Github', src: '/assets/Static-page/github.png', url: 'https://github.com/Sunnynothere' },
    { name: 'LinkedIn', src: '/assets/Static-page/linkedin.png', url: 'https://linkedin.com/in/lizarragagrigonisol' }
];

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>grigonisol@hotmail.com</h1>
            <div className="social-icons">
                {social.map((each, index) => (
                    <a key={index} href={each.url} target="_blank" className="icon-link" >
                        <div className="icon-contact">
                            <img src={each.src} alt={each.name} className="icon" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
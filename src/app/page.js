'use client'

import React, { useState } from "react";
import Window from "@/components/Desktop/Window";
import Introduction from "@/components/Content/Introduction";
import Skills from "@/components/Content/Skills";
import Projects from "@/components/Content/Projects";
import Contact from "@/components/Content/Contact";

const folderItem = [
  { name: 'Introduction' },
  { name: 'Skills' },
  { name: 'Projects' },
  { name: 'Contact' }
];



export default function Home() {

  const [openFolder, setOpenFolder] = useState(null);

  const handleFolderClick = (folderName) => {
    setOpenFolder(folderName)
  };

  const handleCloseWindow = () => {
    setOpenFolder(null)
  }; 

  return (
    <main className="portfolio-main">
      <div className="portfolio-header">
        <h1 className="title">PORTFOLIO</h1>
        <div className="title-subtitle-two">
          <h1 className="title">COFFEESE</h1>
          <h2 className="subtitle">WEB DEVELOPER</h2>
        </div>
      </div>

      <div className="all-content">
          <div className="portfolio-content">
            <div className="nav-container">
              <span className="close-button"><a>[x]</a></span>

              <div className="nav-links">
                <div className="folders">

                  {folderItem.map((item, index) => (
                    <div className="folder" key={index} onClick={() => handleFolderClick(item.name)}>
                      <a href={item.href}>
                        <img src='/assets/Static-page/folder.png' alt="folder" />
                      </a>
                      <span className="nav-text">{item.name}</span>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chick-ilustration">
          <img src='/assets/Static-page/chick-nobg.png' alt='pollito' className="chick-img"/>
        </div>

        {openFolder && (
        <Window folderName={openFolder} onClose={handleCloseWindow}>
          {openFolder === 'Introduction' && <Introduction />}
          {openFolder === 'Skills' && <Skills />}
        </Window>
      )}
    </main>
  );
}

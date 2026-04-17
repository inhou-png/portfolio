import "./style.scss";

export default function System() {
    return (
        <div id="system">
            <div id="splash" className="splash_screen">
                <div id="mac-loader" ></div>


                <div id="mac-welcome">
                    <div className="welcome_screen">
                        <div className="welcome_illustration"></div>
                        <span>Welcome to Macintosh</span>
                    </div>
                </div>
            </div>

            <div id="desktop">
                <div className="header">
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Special</li>
                    </ul>
                </div>

                <div className="drag-zone">
                    <div className="drag-item">
                        <figure id="folder" className="icon folder">
                            <svg width="60" viewBox="0 0 47 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="6" width="45" height="29" rx="1.5" fill="white" stroke="black" />
                                <path d="M7.41421 1.58579L3 6H22L18.0959 1.66207C17.7166 1.24064 17.1762 1 16.6093 1H8.82843C8.29799 1 7.78929 1.21071 7.41421 1.58579Z" fill="white" stroke="black" />
                            </svg>
                        </figure>

                        <span>Projetos Web</span>
                    </div>

                    <div className="drag-item">
                        <figure id="folder" className="icon folder">
                            <svg width="60" viewBox="0 0 47 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="6" width="45" height="29" rx="1.5" fill="white" stroke="black" />
                                <path d="M7.41421 1.58579L3 6H22L18.0959 1.66207C17.7166 1.24064 17.1762 1 16.6093 1H8.82843C8.29799 1 7.78929 1.21071 7.41421 1.58579Z" fill="white" stroke="black" />
                            </svg>
                        </figure>

                        <span>Projetos2</span>
                    </div>

                    <div className="window">
                        <div className="header-window">
                            <div className="window-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <button className="window-btn"></button>

                            <div className="window-title">
                                <span>Projetos</span>
                            </div>

                            <button className="window-btn"></button>

                        </div>
                        <div className="content">
                            <div></div>
                            <div className="scroll"></div>
                        </div>
                        <div className="footer">
                            <div className="scroll"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

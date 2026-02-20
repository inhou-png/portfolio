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
                <div className="header"></div>
            </div>
        </div>
    )
}

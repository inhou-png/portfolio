import "./style.scss";
import { useRef } from "react";
import Image from "next/image";

//icons
import ts from "@/icons/ts.png"
export default function System() {
    const webProjectsRef = useRef(null);
    const stacksRef = useRef(null);

    function closeWindow(elementRef: any) {
        elementRef.current.style.display = "none";
    }

    function openWindow(elementRef: any) {
        elementRef.current.style.display = "block";
    }

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
                    <div className="drag-item" onClick={() => {
                        console.log("webProjectsRef", webProjectsRef);
                        openWindow(webProjectsRef);
                    }}>
                        <figure id="folder" className="icon folder">
                            <svg width="60" viewBox="0 0 47 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="6" width="45" height="29" rx="1.5" fill="white" stroke="black" />
                                <path d="M7.41421 1.58579L3 6H22L18.0959 1.66207C17.7166 1.24064 17.1762 1 16.6093 1H8.82843C8.29799 1 7.78929 1.21071 7.41421 1.58579Z" fill="white" stroke="black" />
                            </svg>
                        </figure>

                        <span>Projetos Web</span>
                    </div>

                    <div className="drag-item" onClick={() => {
                        openWindow(stacksRef);
                    }}>
                        <figure id="folder" className="icon folder">
                            <svg width="60" viewBox="0 0 47 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="6" width="45" height="29" rx="1.5" fill="white" stroke="black" />
                                <path d="M7.41421 1.58579L3 6H22L18.0959 1.66207C17.7166 1.24064 17.1762 1 16.6093 1H8.82843C8.29799 1 7.78929 1.21071 7.41421 1.58579Z" fill="white" stroke="black" />
                            </svg>
                        </figure>

                        <span>Stacks</span>
                    </div>

                    <div className="window drag-item" ref={webProjectsRef}>
                        <div className="header-window">
                            <div className="window-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <button className="window-btn" onClick={() => {
                                closeWindow(webProjectsRef);
                            }}></button>

                            <div className="window-title">
                                <span>Projetos Web</span>
                            </div>

                            <button className="window-btn"></button>

                        </div>
                        <div className="content">
                            <div className="itens">
                                <div>
                                    <figure id="folder" className="icon folder">
                                        <svg width="60" height="60" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 4H18V8H14V4Z" fill="#212121" />
                                            <path d="M14 0H18V4H14V0Z" fill="#212121" />
                                            <path d="M18 0H22V4H18V0Z" fill="#212121" />
                                            <path d="M22 0H26V4H22V0Z" fill="#212121" />
                                            <path d="M26 0H30V4H26V0Z" fill="#212121" />
                                            <path d="M30 0H34V4H30V0Z" fill="#212121" />
                                            <path d="M34 0H38V4H34V0Z" fill="#212121" />
                                            <path d="M38 0H42V4H38V0Z" fill="#212121" />
                                            <path d="M42 0H46V4H42V0Z" fill="#212121" />
                                            <path d="M46 0H50V4H46V0Z" fill="#212121" />
                                            <path d="M50 0H54V4H50V0Z" fill="#212121" />
                                            <path d="M54 0H58V4H54V0Z" fill="#212121" />
                                            <path d="M58 0H62V4H58V0Z" fill="#212121" />
                                            <path d="M62 0H66V4H62V0Z" fill="#212121" />
                                            <path d="M66 0H70V4H66V0Z" fill="#212121" />
                                            <path d="M70 0H74V4H70V0Z" fill="#212121" />
                                            <path d="M74 0H78V4H74V0Z" fill="#212121" />
                                            <path d="M78 0H82V4H78V0Z" fill="#212121" />
                                            <path d="M82 0H86V4H82V0Z" fill="#212121" />
                                            <path d="M86 0H90V4H86V0Z" fill="#212121" />
                                            <path d="M90 4H94V8H90V4Z" fill="#212121" />
                                            <path d="M94 8H98V12H94V8Z" fill="#212121" />
                                            <path d="M98 12H102V16H98V12Z" fill="#212121" />
                                            <path d="M102 16H106V20H102V16Z" fill="#212121" />
                                            <path d="M106 20H110V24H106V20Z" fill="#212121" />
                                            <path d="M110 24H114V28H110V24Z" fill="#212121" />
                                            <path d="M110 28H114V32H110V28Z" fill="#212121" />
                                            <path d="M110 32H114V36H110V32Z" fill="#212121" />
                                            <path d="M110 36H114V40H110V36Z" fill="#212121" />
                                            <path d="M110 40H114V44H110V40Z" fill="#212121" />
                                            <path d="M110 44H114V48H110V44Z" fill="#212121" />
                                            <path d="M110 48H114V52H110V48Z" fill="#212121" />
                                            <path d="M110 52H114V56H110V52Z" fill="#212121" />
                                            <path d="M110 56H114V60H110V56Z" fill="#212121" />
                                            <path d="M110 60H114V64H110V60Z" fill="#212121" />
                                            <path d="M110 64H114V68H110V64Z" fill="#212121" />
                                            <path d="M110 68H114V72H110V68Z" fill="#212121" />
                                            <path d="M110 72H114V76H110V72Z" fill="#212121" />
                                            <path d="M110 76H114V80H110V76Z" fill="#212121" />
                                            <path d="M110 80H114V84H110V80Z" fill="#212121" />
                                            <path d="M110 84H114V88H110V84Z" fill="#212121" />
                                            <path d="M110 88H114V92H110V88Z" fill="#212121" />
                                            <path d="M110 92H114V96H110V92Z" fill="#212121" />
                                            <path d="M110 96H114V100H110V96Z" fill="#212121" />
                                            <path d="M110 100H114V104H110V100Z" fill="#212121" />
                                            <path d="M110 104H114V108H110V104Z" fill="#212121" />
                                            <path d="M110 108H114V112H110V108Z" fill="#212121" />
                                            <path d="M110 112H114V116H110V112Z" fill="#212121" />
                                            <path d="M110 116H114V120H110V116Z" fill="#212121" />
                                            <path d="M110 120H114V124H110V120Z" fill="#212121" />
                                            <path d="M110 124H114V128H110V124Z" fill="#212121" />
                                            <path d="M106 124H110V128H106V124Z" fill="#212121" />
                                            <path d="M102 124H106V128H102V124Z" fill="#212121" />
                                            <path d="M26 16H30V20H26V16Z" fill="#212121" />
                                            <path d="M26 40H30V44H26V40Z" fill="#212121" />
                                            <path d="M26 64H30V68H26V64Z" fill="#212121" />
                                            <path d="M26 88H30V92H26V88Z" fill="#212121" />
                                            <path d="M26 112H30V116H26V112Z" fill="#212121" />
                                            <path d="M50 16H54V20H50V16Z" fill="#212121" />
                                            <path d="M50 64H54V68H50V64Z" fill="#212121" />
                                            <path d="M62 64H66V68H62V64Z" fill="#212121" />
                                            <path d="M62 40H66V44H62V40Z" fill="#212121" />
                                            <path d="M62 44H66V48H62V44Z" fill="#212121" />
                                            <path d="M86 44H90V48H86V44Z" fill="#212121" />
                                            <path d="M62 48H66V52H62V48Z" fill="#212121" />
                                            <path d="M86 48H90V52H86V48Z" fill="#212121" />
                                            <path d="M62 52H66V56H62V52Z" fill="#212121" />
                                            <path d="M86 52H90V56H86V52Z" fill="#212121" />
                                            <path d="M62 56H66V60H62V56Z" fill="#212121" />
                                            <path d="M86 56H90V60H86V56Z" fill="#212121" />
                                            <path d="M62 60H66V64H62V60Z" fill="#212121" />
                                            <path d="M86 60H90V64H86V60Z" fill="#212121" />
                                            <path d="M50 28H54V32H50V28Z" fill="#212121" />
                                            <path d="M50 32H54V36H50V32Z" fill="#212121" />
                                            <path d="M50 36H54V40H50V36Z" fill="#212121" />
                                            <path d="M50 40H54V44H50V40Z" fill="#212121" />
                                            <path d="M50 44H54V48H50V44Z" fill="#212121" />
                                            <path d="M50 48H54V52H50V48Z" fill="#212121" />
                                            <path d="M50 52H54V56H50V52Z" fill="#212121" />
                                            <path d="M54 52H58V56H54V52Z" fill="#212121" />
                                            <path d="M58 52H62V56H58V52Z" fill="#212121" />
                                            <path d="M66 64H70V68H66V64Z" fill="#212121" />
                                            <path d="M66 40H70V44H66V40Z" fill="#212121" />
                                            <path d="M54 28H58V32H54V28Z" fill="#212121" />
                                            <path d="M70 64H74V68H70V64Z" fill="#212121" />
                                            <path d="M70 40H74V44H70V40Z" fill="#212121" />
                                            <path d="M58 28H62V32H58V28Z" fill="#212121" />
                                            <path d="M74 64H78V68H74V64Z" fill="#212121" />
                                            <path d="M74 40H78V44H74V40Z" fill="#212121" />
                                            <path d="M74 36H78V40H74V36Z" fill="#212121" />
                                            <path d="M74 32H78V36H74V32Z" fill="#212121" />
                                            <path d="M62 28H66V32H62V28Z" fill="#212121" />
                                            <path d="M78 64H82V68H78V64Z" fill="#212121" />
                                            <path d="M78 40H82V44H78V40Z" fill="#212121" />
                                            <path d="M66 28H70V32H66V28Z" fill="#212121" />
                                            <path d="M82 64H86V68H82V64Z" fill="#212121" />
                                            <path d="M82 40H86V44H82V40Z" fill="#212121" />
                                            <path d="M70 28H74V32H70V28Z" fill="#212121" />
                                            <path d="M86 64H90V68H86V64Z" fill="#212121" />
                                            <path d="M86 40H90V44H86V40Z" fill="#212121" />
                                            <path d="M74 28H78V32H74V28Z" fill="#212121" />
                                            <path d="M98 64H102V68H98V64Z" fill="#212121" />
                                            <path d="M98 88H102V92H98V88Z" fill="#212121" />
                                            <path d="M98 112H102V116H98V112Z" fill="#212121" />
                                            <path d="M98 40H102V44H98V40Z" fill="#212121" />
                                            <path d="M74 16H78V20H74V16Z" fill="#212121" />
                                            <path d="M74 88H78V92H74V88Z" fill="#212121" />
                                            <path d="M74 112H78V116H74V112Z" fill="#212121" />
                                            <path d="M98 124H102V128H98V124Z" fill="#212121" />
                                            <path d="M94 124H98V128H94V124Z" fill="#212121" />
                                            <path d="M90 124H94V128H90V124Z" fill="#212121" />
                                            <path d="M86 124H90V128H86V124Z" fill="#212121" />
                                            <path d="M82 124H86V128H82V124Z" fill="#212121" />
                                            <path d="M78 124H82V128H78V124Z" fill="#212121" />
                                            <path d="M74 124H78V128H74V124Z" fill="#212121" />
                                            <path d="M70 124H74V128H70V124Z" fill="#212121" />
                                            <path d="M66 124H70V128H66V124Z" fill="#212121" />
                                            <path d="M62 124H66V128H62V124Z" fill="#212121" />
                                            <path d="M58 124H62V128H58V124Z" fill="#212121" />
                                            <path d="M54 124H58V128H54V124Z" fill="#212121" />
                                            <path d="M50 124H54V128H50V124Z" fill="#212121" />
                                            <path d="M46 124H50V128H46V124Z" fill="#212121" />
                                            <path d="M42 124H46V128H42V124Z" fill="#212121" />
                                            <path d="M38 124H42V128H38V124Z" fill="#212121" />
                                            <path d="M34 124H38V128H34V124Z" fill="#212121" />
                                            <path d="M30 124H34V128H30V124Z" fill="#212121" />
                                            <path d="M26 124H30V128H26V124Z" fill="#212121" />
                                            <path d="M22 124H26V128H22V124Z" fill="#212121" />
                                            <path d="M106 24H110V28H106V24Z" fill="#212121" />
                                            <path d="M102 24H106V28H102V24Z" fill="#212121" />
                                            <path d="M98 24H102V28H98V24Z" fill="#212121" />
                                            <path d="M94 24H98V28H94V24Z" fill="#212121" />
                                            <path d="M90 24H94V28H90V24Z" fill="#212121" />
                                            <path d="M86 24H90V28H86V24Z" fill="#212121" />
                                            <path d="M86 20H90V24H86V20Z" fill="#212121" />
                                            <path d="M86 16H90V20H86V16Z" fill="#212121" />
                                            <path d="M86 12H90V16H86V12Z" fill="#212121" />
                                            <path d="M86 8H90V12H86V8Z" fill="#212121" />
                                            <path d="M86 4H90V8H86V4Z" fill="#212121" />
                                            <path d="M14 8H18V12H14V8Z" fill="#212121" />
                                            <path d="M14 12H18V16H14V12Z" fill="#212121" />
                                            <path d="M14 16H18V20H14V16Z" fill="#212121" />
                                            <path d="M14 20H18V24H14V20Z" fill="#212121" />
                                            <path d="M14 24H18V28H14V24Z" fill="#212121" />
                                            <path d="M14 28H18V32H14V28Z" fill="#212121" />
                                            <path d="M14 32H18V36H14V32Z" fill="#212121" />
                                            <path d="M14 36H18V40H14V36Z" fill="#212121" />
                                            <path d="M14 40H18V44H14V40Z" fill="#212121" />
                                            <path d="M14 44H18V48H14V44Z" fill="#212121" />
                                            <path d="M14 48H18V52H14V48Z" fill="#212121" />
                                            <path d="M14 52H18V56H14V52Z" fill="#212121" />
                                            <path d="M14 56H18V60H14V56Z" fill="#212121" />
                                            <path d="M14 60H18V64H14V60Z" fill="#212121" />
                                            <path d="M14 64H18V68H14V64Z" fill="#212121" />
                                            <path d="M14 68H18V72H14V68Z" fill="#212121" />
                                            <path d="M14 72H18V76H14V72Z" fill="#212121" />
                                            <path d="M14 76H18V80H14V76Z" fill="#212121" />
                                            <path d="M14 80H18V84H14V80Z" fill="#212121" />
                                            <path d="M14 84H18V88H14V84Z" fill="#212121" />
                                            <path d="M14 88H18V92H14V88Z" fill="#212121" />
                                            <path d="M14 92H18V96H14V92Z" fill="#212121" />
                                            <path d="M14 96H18V100H14V96Z" fill="#212121" />
                                            <path d="M38 96H42V100H38V96Z" fill="#212121" />
                                            <path d="M42 92H46V96H42V92Z" fill="#212121" />
                                            <path d="M46 88H50V92H46V88Z" fill="#212121" />
                                            <path d="M50 88H54V92H50V88Z" fill="#212121" />
                                            <path d="M54 88H58V92H54V88Z" fill="#212121" />
                                            <path d="M58 92H62V96H58V92Z" fill="#212121" />
                                            <path d="M62 96H66V100H62V96Z" fill="#212121" />
                                            <path d="M62 100H66V104H62V100Z" fill="#212121" />
                                            <path d="M62 104H66V108H62V104Z" fill="#212121" />
                                            <path d="M58 108H62V112H58V108Z" fill="#212121" />
                                            <path d="M54 112H58V116H54V112Z" fill="#212121" />
                                            <path d="M50 112H54V116H50V112Z" fill="#212121" />
                                            <path d="M46 112H50V116H46V112Z" fill="#212121" />
                                            <path d="M42 108H46V112H42V108Z" fill="#212121" />
                                            <path d="M14 100H18V104H14V100Z" fill="#212121" />
                                            <path d="M38 100H42V104H38V100Z" fill="#212121" />
                                            <path d="M14 104H18V108H14V104Z" fill="#212121" />
                                            <path d="M38 104H42V108H38V104Z" fill="#212121" />
                                            <path d="M14 108H18V112H14V108Z" fill="#212121" />
                                            <path d="M14 112H18V116H14V112Z" fill="#212121" />
                                            <path d="M14 116H18V120H14V116Z" fill="#212121" />
                                            <path d="M14 120H18V124H14V120Z" fill="#212121" />
                                            <path d="M14 124H18V128H14V124Z" fill="#212121" />
                                            <path d="M18 124H22V128H18V124Z" fill="#212121" />
                                        </svg>

                                    </figure>

                                    <span>Planograma</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">
                                        <svg width="60" height="60" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 124H8V128H4V124Z" fill="#212121" />
                                            <path d="M4 108H8V112H4V108Z" fill="#212121" />
                                            <path d="M8 124H12V128H8V124Z" fill="#212121" />
                                            <path d="M8 108H12V112H8V108Z" fill="#212121" />
                                            <path d="M8 112H12V116H8V112Z" fill="#212121" />
                                            <path d="M8 116H12V120H8V116Z" fill="#212121" />
                                            <path d="M8 120H12V124H8V120Z" fill="#212121" />
                                            <path d="M8 92H12V96H8V92Z" fill="#212121" />
                                            <path d="M8 80H12V84H8V80Z" fill="#212121" />
                                            <path d="M8 64H12V68H8V64Z" fill="#212121" />
                                            <path d="M12 124H16V128H12V124Z" fill="#212121" />
                                            <path d="M12 108H16V112H12V108Z" fill="#212121" />
                                            <path d="M12 92H16V96H12V92Z" fill="#212121" />
                                            <path d="M12 96H16V100H12V96Z" fill="#212121" />
                                            <path d="M12 100H16V104H12V100Z" fill="#212121" />
                                            <path d="M12 104H16V108H12V104Z" fill="#212121" />
                                            <path d="M12 80H16V84H12V80Z" fill="#212121" />
                                            <path d="M12 64H16V68H12V64Z" fill="#212121" />
                                            <path d="M12 68H16V72H12V68Z" fill="#212121" />
                                            <path d="M12 72H16V76H12V72Z" fill="#212121" />
                                            <path d="M12 76H16V80H12V76Z" fill="#212121" />
                                            <path d="M16 124H20V128H16V124Z" fill="#212121" />
                                            <path d="M16 108H20V112H16V108Z" fill="#212121" />
                                            <path d="M16 92H20V96H16V92Z" fill="#212121" />
                                            <path d="M16 80H20V84H16V80Z" fill="#212121" />
                                            <path d="M16 64H20V68H16V64Z" fill="#212121" />
                                            <path d="M20 124H24V128H20V124Z" fill="#212121" />
                                            <path d="M20 108H24V112H20V108Z" fill="#212121" />
                                            <path d="M20 92H24V96H20V92Z" fill="#212121" />
                                            <path d="M20 80H24V84H20V80Z" fill="#212121" />
                                            <path d="M20 84H24V88H20V84Z" fill="#212121" />
                                            <path d="M20 88H24V92H20V88Z" fill="#212121" />
                                            <path d="M20 64H24V68H20V64Z" fill="#212121" />
                                            <path d="M20 52H24V56H20V52Z" fill="#212121" />
                                            <path d="M24 124H28V128H24V124Z" fill="#212121" />
                                            <path d="M24 108H28V112H24V108Z" fill="#212121" />
                                            <path d="M24 92H28V96H24V92Z" fill="#212121" />
                                            <path d="M24 80H28V84H24V80Z" fill="#212121" />
                                            <path d="M24 64H28V68H24V64Z" fill="#212121" />
                                            <path d="M24 60H28V64H24V60Z" fill="#212121" />
                                            <path d="M24 56H28V60H24V56Z" fill="#212121" />
                                            <path d="M24 52H28V56H24V52Z" fill="#212121" />
                                            <path d="M28 124H32V128H28V124Z" fill="#212121" />
                                            <path d="M28 108H32V112H28V108Z" fill="#212121" />
                                            <path d="M28 92H32V96H28V92Z" fill="#212121" />
                                            <path d="M28 80H32V84H28V80Z" fill="#212121" />
                                            <path d="M28 64H32V68H28V64Z" fill="#212121" />
                                            <path d="M28 52H32V56H28V52Z" fill="#212121" />
                                            <path d="M32 124H36V128H32V124Z" fill="#212121" />
                                            <path d="M32 108H36V112H32V108Z" fill="#212121" />
                                            <path d="M32 92H36V96H32V92Z" fill="#212121" />
                                            <path d="M32 80H36V84H32V80Z" fill="#212121" />
                                            <path d="M32 64H36V68H32V64Z" fill="#212121" />
                                            <path d="M32 52H36V56H32V52Z" fill="#212121" />
                                            <path d="M36 124H40V128H36V124Z" fill="#212121" />
                                            <path d="M36 108H40V112H36V108Z" fill="#212121" />
                                            <path d="M36 92H40V96H36V92Z" fill="#212121" />
                                            <path d="M36 80H40V84H36V80Z" fill="#212121" />
                                            <path d="M36 64H40V68H36V64Z" fill="#212121" />
                                            <path d="M36 52H40V56H36V52Z" fill="#212121" />
                                            <path d="M40 124H44V128H40V124Z" fill="#212121" />
                                            <path d="M40 108H44V112H40V108Z" fill="#212121" />
                                            <path d="M40 92H44V96H40V92Z" fill="#212121" />
                                            <path d="M40 80H44V84H40V80Z" fill="#212121" />
                                            <path d="M40 64H44V68H40V64Z" fill="#212121" />
                                            <path d="M40 52H44V56H40V52Z" fill="#212121" />
                                            <path d="M44 56H48V60H44V56Z" fill="#212121" />
                                            <path d="M44 60H48V64H44V60Z" fill="#212121" />
                                            <path d="M44 68H48V72H44V68Z" fill="#212121" />
                                            <path d="M44 72H48V76H44V72Z" fill="#212121" />
                                            <path d="M44 76H48V80H44V76Z" fill="#212121" />
                                            <path d="M44 84H48V88H44V84Z" fill="#212121" />
                                            <path d="M44 88H48V92H44V88Z" fill="#212121" />
                                            <path d="M44 96H48V100H44V96Z" fill="#212121" />
                                            <path d="M44 100H48V104H44V100Z" fill="#212121" />
                                            <path d="M44 104H48V108H44V104Z" fill="#212121" />
                                            <path d="M44 112H48V116H44V112Z" fill="#212121" />
                                            <path d="M44 116H48V120H44V116Z" fill="#212121" />
                                            <path d="M44 120H48V124H44V120Z" fill="#212121" />
                                            <path d="M48 120H52V124H48V120Z" fill="#212121" />
                                            <path d="M48 116H52V120H48V116Z" fill="#212121" />
                                            <path d="M48 112H52V116H48V112Z" fill="#212121" />
                                            <path d="M48 108H52V112H48V108Z" fill="#212121" />
                                            <path d="M48 104H52V108H48V104Z" fill="#212121" />
                                            <path d="M48 100H52V104H48V100Z" fill="#212121" />
                                            <path d="M48 96H52V100H48V96Z" fill="#212121" />
                                            <path d="M48 92H52V96H48V92Z" fill="#212121" />
                                            <path d="M48 88H52V92H48V88Z" fill="#212121" />
                                            <path d="M48 84H52V88H48V84Z" fill="#212121" />
                                            <path d="M48 80H52V84H48V80Z" fill="#212121" />
                                            <path d="M48 76H52V80H48V76Z" fill="#212121" />
                                            <path d="M48 72H52V76H48V72Z" fill="#212121" />
                                            <path d="M48 68H52V72H48V68Z" fill="#212121" />
                                            <path d="M48 64H52V68H48V64Z" fill="#212121" />
                                            <path d="M48 60H52V64H48V60Z" fill="#212121" />
                                            <path d="M48 56H52V60H48V56Z" fill="#212121" />
                                            <path d="M48 52H52V56H48V52Z" fill="#212121" />
                                            <path d="M48 48H52V52H48V48Z" fill="#212121" />
                                            <path d="M48 44H52V48H48V44Z" fill="#212121" />
                                            <path d="M48 40H52V44H48V40Z" fill="#212121" />
                                            <path d="M48 36H52V40H48V36Z" fill="#212121" />
                                            <path d="M48 32H52V36H48V32Z" fill="#212121" />
                                            <path d="M48 28H52V32H48V28Z" fill="#212121" />
                                            <path d="M48 24H52V28H48V24Z" fill="#212121" />
                                            <path d="M48 20H52V24H48V20Z" fill="#212121" />
                                            <path d="M52 20H56V24H52V20Z" fill="#212121" />
                                            <path d="M56 20H60V24H56V20Z" fill="#212121" />
                                            <path d="M60 20H64V24H60V20Z" fill="#212121" />
                                            <path d="M64 20H68V24H64V20Z" fill="#212121" />
                                            <path d="M68 20H72V24H68V20Z" fill="#212121" />
                                            <path d="M68 16H72V20H68V16Z" fill="#212121" />
                                            <path d="M68 12H72V16H68V12Z" fill="#212121" />
                                            <path d="M68 8H72V12H68V8Z" fill="#212121" />
                                            <path d="M68 4H72V8H68V4Z" fill="#212121" />
                                            <path d="M68 0H72V4H68V0Z" fill="#212121" />
                                            <path d="M72 0H76V4H72V0Z" fill="#212121" />
                                            <path d="M76 0H80V4H76V0Z" fill="#212121" />
                                            <path d="M80 0H84V4H80V0Z" fill="#212121" />
                                            <path d="M84 0H88V4H84V0Z" fill="#212121" />
                                            <path d="M84 4H88V8H84V4Z" fill="#212121" />
                                            <path d="M84 8H88V12H84V8Z" fill="#212121" />
                                            <path d="M84 12H88V16H84V12Z" fill="#212121" />
                                            <path d="M88 12H92V16H88V12Z" fill="#212121" />
                                            <path d="M92 12H96V16H92V12Z" fill="#212121" />
                                            <path d="M96 12H100V16H96V12Z" fill="#212121" />
                                            <path d="M100 12H104V16H100V12Z" fill="#212121" />
                                            <path d="M104 12H108V16H104V12Z" fill="#212121" />
                                            <path d="M104 16H108V20H104V16Z" fill="#212121" />
                                            <path d="M104 20H108V24H104V20Z" fill="#212121" />
                                            <path d="M104 24H108V28H104V24Z" fill="#212121" />
                                            <path d="M104 28H108V32H104V28Z" fill="#212121" />
                                            <path d="M108 28H112V32H108V28Z" fill="#212121" />
                                            <path d="M112 28H116V32H112V28Z" fill="#212121" />
                                            <path d="M116 28H120V32H116V28Z" fill="#212121" />
                                            <path d="M120 28H124V32H120V28Z" fill="#212121" />
                                            <path d="M120 32H124V36H120V32Z" fill="#212121" />
                                            <path d="M120 36H124V40H120V36Z" fill="#212121" />
                                            <path d="M120 40H124V44H120V40Z" fill="#212121" />
                                            <path d="M120 44H124V48H120V44Z" fill="#212121" />
                                            <path d="M120 48H124V52H120V48Z" fill="#212121" />
                                            <path d="M120 52H124V56H120V52Z" fill="#212121" />
                                            <path d="M120 56H124V60H120V56Z" fill="#212121" />
                                            <path d="M120 60H124V64H120V60Z" fill="#212121" />
                                            <path d="M120 64H124V68H120V64Z" fill="#212121" />
                                            <path d="M120 68H124V72H120V68Z" fill="#212121" />
                                            <path d="M120 72H124V76H120V72Z" fill="#212121" />
                                            <path d="M120 76H124V80H120V76Z" fill="#212121" />
                                            <path d="M112 76H116V80H112V76Z" fill="#212121" />
                                            <path d="M112 68H116V72H112V68Z" fill="#212121" />
                                            <path d="M112 60H116V64H112V60Z" fill="#212121" />
                                            <path d="M112 52H116V56H112V52Z" fill="#212121" />
                                            <path d="M112 44H116V48H112V44Z" fill="#212121" />
                                            <path d="M120 80H124V84H120V80Z" fill="#212121" />
                                            <path d="M120 84H124V88H120V84Z" fill="#212121" />
                                            <path d="M120 88H124V92H120V88Z" fill="#212121" />
                                            <path d="M120 92H124V96H120V92Z" fill="#212121" />
                                            <path d="M120 96H124V100H120V96Z" fill="#212121" />
                                            <path d="M120 100H124V104H120V100Z" fill="#212121" />
                                            <path d="M120 104H124V108H120V104Z" fill="#212121" />
                                            <path d="M120 108H124V112H120V108Z" fill="#212121" />
                                            <path d="M120 112H124V116H120V112Z" fill="#212121" />
                                            <path d="M120 116H124V120H120V116Z" fill="#212121" />
                                            <path d="M120 120H124V124H120V120Z" fill="#212121" />
                                            <path d="M116 124H120V128H116V124Z" fill="#212121" />
                                            <path d="M112 124H116V128H112V124Z" fill="#212121" />
                                            <path d="M108 124H112V128H108V124Z" fill="#212121" />
                                            <path d="M104 32H108V36H104V32Z" fill="#212121" />
                                            <path d="M100 32H104V36H100V32Z" fill="#212121" />
                                            <path d="M96 32H100V36H96V32Z" fill="#212121" />
                                            <path d="M92 32H96V36H92V32Z" fill="#212121" />
                                            <path d="M104 36H108V40H104V36Z" fill="#212121" />
                                            <path d="M104 40H108V44H104V40Z" fill="#212121" />
                                            <path d="M100 40H104V44H100V40Z" fill="#212121" />
                                            <path d="M96 40H100V44H96V40Z" fill="#212121" />
                                            <path d="M92 40H96V44H92V40Z" fill="#212121" />
                                            <path d="M104 44H108V48H104V44Z" fill="#212121" />
                                            <path d="M104 48H108V52H104V48Z" fill="#212121" />
                                            <path d="M104 52H108V56H104V52Z" fill="#212121" />
                                            <path d="M104 56H108V60H104V56Z" fill="#212121" />
                                            <path d="M104 60H108V64H104V60Z" fill="#212121" />
                                            <path d="M104 64H108V68H104V64Z" fill="#212121" />
                                            <path d="M104 68H108V72H104V68Z" fill="#212121" />
                                            <path d="M104 72H108V76H104V72Z" fill="#212121" />
                                            <path d="M104 76H108V80H104V76Z" fill="#212121" />
                                            <path d="M104 80H108V84H104V80Z" fill="#212121" />
                                            <path d="M104 84H108V88H104V84Z" fill="#212121" />
                                            <path d="M104 88H108V92H104V88Z" fill="#212121" />
                                            <path d="M104 92H108V96H104V92Z" fill="#212121" />
                                            <path d="M104 96H108V100H104V96Z" fill="#212121" />
                                            <path d="M104 100H108V104H104V100Z" fill="#212121" />
                                            <path d="M100 100H104V104H100V100Z" fill="#212121" />
                                            <path d="M100 92H104V96H100V92Z" fill="#212121" />
                                            <path d="M96 100H100V104H96V100Z" fill="#212121" />
                                            <path d="M96 92H100V96H96V92Z" fill="#212121" />
                                            <path d="M92 100H96V104H92V100Z" fill="#212121" />
                                            <path d="M92 92H96V96H92V92Z" fill="#212121" />
                                            <path d="M80 92H84V96H80V92Z" fill="#212121" />
                                            <path d="M76 92H80V96H76V92Z" fill="#212121" />
                                            <path d="M76 100H80V104H76V100Z" fill="#212121" />
                                            <path d="M80 100H84V104H80V100Z" fill="#212121" />
                                            <path d="M104 104H108V108H104V104Z" fill="#212121" />
                                            <path d="M104 108H108V112H104V108Z" fill="#212121" />
                                            <path d="M104 112H108V116H104V112Z" fill="#212121" />
                                            <path d="M104 116H108V120H104V116Z" fill="#212121" />
                                            <path d="M104 120H108V124H104V120Z" fill="#212121" />
                                            <path d="M100 124H104V128H100V124Z" fill="#212121" />
                                            <path d="M96 124H100V128H96V124Z" fill="#212121" />
                                            <path d="M92 124H96V128H92V124Z" fill="#212121" />
                                            <path d="M88 124H92V128H88V124Z" fill="#212121" />
                                            <path d="M84 16H88V20H84V16Z" fill="#212121" />
                                            <path d="M84 20H88V24H84V20Z" fill="#212121" />
                                            <path d="M84 24H88V28H84V24Z" fill="#212121" />
                                            <path d="M84 28H88V32H84V28Z" fill="#212121" />
                                            <path d="M80 28H84V32H80V28Z" fill="#212121" />
                                            <path d="M76 28H80V32H76V28Z" fill="#212121" />
                                            <path d="M84 32H88V36H84V32Z" fill="#212121" />
                                            <path d="M84 36H88V40H84V36Z" fill="#212121" />
                                            <path d="M80 36H84V40H80V36Z" fill="#212121" />
                                            <path d="M76 36H80V40H76V36Z" fill="#212121" />
                                            <path d="M84 40H88V44H84V40Z" fill="#212121" />
                                            <path d="M84 44H88V48H84V44Z" fill="#212121" />
                                            <path d="M84 48H88V52H84V48Z" fill="#212121" />
                                            <path d="M84 52H88V56H84V52Z" fill="#212121" />
                                            <path d="M84 56H88V60H84V56Z" fill="#212121" />
                                            <path d="M84 60H88V64H84V60Z" fill="#212121" />
                                            <path d="M84 64H88V68H84V64Z" fill="#212121" />
                                            <path d="M84 68H88V72H84V68Z" fill="#212121" />
                                            <path d="M84 72H88V76H84V72Z" fill="#212121" />
                                            <path d="M84 76H88V80H84V76Z" fill="#212121" />
                                            <path d="M84 80H88V84H84V80Z" fill="#212121" />
                                            <path d="M84 84H88V88H84V84Z" fill="#212121" />
                                            <path d="M84 88H88V92H84V88Z" fill="#212121" />
                                            <path d="M84 92H88V96H84V92Z" fill="#212121" />
                                            <path d="M84 96H88V100H84V96Z" fill="#212121" />
                                            <path d="M84 100H88V104H84V100Z" fill="#212121" />
                                            <path d="M84 104H88V108H84V104Z" fill="#212121" />
                                            <path d="M84 108H88V112H84V108Z" fill="#212121" />
                                            <path d="M84 112H88V116H84V112Z" fill="#212121" />
                                            <path d="M84 116H88V120H84V116Z" fill="#212121" />
                                            <path d="M84 120H88V124H84V120Z" fill="#212121" />
                                            <path d="M80 124H84V128H80V124Z" fill="#212121" />
                                            <path d="M76 124H80V128H76V124Z" fill="#212121" />
                                            <path d="M72 124H76V128H72V124Z" fill="#212121" />
                                            <path d="M64 124H68V128H64V124Z" fill="#212121" />
                                            <path d="M68 120H72V124H68V120Z" fill="#212121" />
                                            <path d="M68 116H72V120H68V116Z" fill="#212121" />
                                            <path d="M68 112H72V116H68V112Z" fill="#212121" />
                                            <path d="M68 108H72V112H68V108Z" fill="#212121" />
                                            <path d="M68 104H72V108H68V104Z" fill="#212121" />
                                            <path d="M68 100H72V104H68V100Z" fill="#212121" />
                                            <path d="M68 96H72V100H68V96Z" fill="#212121" />
                                            <path d="M68 92H72V96H68V92Z" fill="#212121" />
                                            <path d="M68 88H72V92H68V88Z" fill="#212121" />
                                            <path d="M68 84H72V88H68V84Z" fill="#212121" />
                                            <path d="M68 80H72V84H68V80Z" fill="#212121" />
                                            <path d="M68 76H72V80H68V76Z" fill="#212121" />
                                            <path d="M68 72H72V76H68V72Z" fill="#212121" />
                                            <path d="M68 68H72V72H68V68Z" fill="#212121" />
                                            <path d="M68 64H72V68H68V64Z" fill="#212121" />
                                            <path d="M68 60H72V64H68V60Z" fill="#212121" />
                                            <path d="M68 56H72V60H68V56Z" fill="#212121" />
                                            <path d="M68 52H72V56H68V52Z" fill="#212121" />
                                            <path d="M68 48H72V52H68V48Z" fill="#212121" />
                                            <path d="M68 44H72V48H68V44Z" fill="#212121" />
                                            <path d="M68 40H72V44H68V40Z" fill="#212121" />
                                            <path d="M68 36H72V40H68V36Z" fill="#212121" />
                                            <path d="M68 32H72V36H68V32Z" fill="#212121" />
                                            <path d="M60 32H64V36H60V32Z" fill="#212121" />
                                            <path d="M60 40H64V44H60V40Z" fill="#212121" />
                                            <path d="M60 48H64V52H60V48Z" fill="#212121" />
                                            <path d="M60 56H64V60H60V56Z" fill="#212121" />
                                            <path d="M60 64H64V68H60V64Z" fill="#212121" />
                                            <path d="M60 72H64V76H60V72Z" fill="#212121" />
                                            <path d="M60 80H64V84H60V80Z" fill="#212121" />
                                            <path d="M60 88H64V92H60V88Z" fill="#212121" />
                                            <path d="M56 32H60V36H56V32Z" fill="#212121" />
                                            <path d="M56 40H60V44H56V40Z" fill="#212121" />
                                            <path d="M56 48H60V52H56V48Z" fill="#212121" />
                                            <path d="M56 56H60V60H56V56Z" fill="#212121" />
                                            <path d="M56 64H60V68H56V64Z" fill="#212121" />
                                            <path d="M56 72H60V76H56V72Z" fill="#212121" />
                                            <path d="M56 80H60V84H56V80Z" fill="#212121" />
                                            <path d="M56 88H60V92H56V88Z" fill="#212121" />
                                            <path d="M68 28H72V32H68V28Z" fill="#212121" />
                                            <path d="M68 24H72V28H68V24Z" fill="#212121" />
                                            <path d="M60 124H64V128H60V124Z" fill="#212121" />
                                            <path d="M56 124H60V128H56V124Z" fill="#212121" />
                                            <path d="M52 124H56V128H52V124Z" fill="#212121" />
                                        </svg>
                                    </figure>

                                    <span>Mod-UI</span>
                                </div>
                            </div>
                            <div className="scroll"></div>
                        </div>
                        <div className="footer">
                            <div className="scroll"></div>
                        </div>
                    </div>

                    <div className="window drag-item" ref={stacksRef} style={{ display: "block" }}>
                        <div className="header-window">
                            <div className="window-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <button className="window-btn" onClick={() => {
                                closeWindow(stacksRef);
                            }}></button>

                            <div className="window-title">
                                <span>Stacks</span>
                            </div>

                            <button className="window-btn"></button>

                        </div>
                        <div className="content">
                            <div className="itens">
                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Typescript</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Javascript ES6+</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>MongoDB</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>PostgreSQL</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>AWS</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>DOCKER</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>JEST</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Tailwind</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>GSAP</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>NEXT</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Express</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Nest</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>React</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Angular</span>
                                </div>

                                <div>
                                    <figure id="folder" className="icon folder">


                                    </figure>

                                    <span>Sass</span>
                                </div>
                            </div>
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

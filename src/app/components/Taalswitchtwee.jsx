"use client";

import Link from "next/link";

const TaalSwitchTwee = () => {
    const changeLanguage = (language) => {
        localStorage.setItem("Language", language);
        const event = new CustomEvent("languageChange", { detail: { language } });
        window.dispatchEvent(event);
    };

    return (
        <div>
            <Link href="HeroSection.jsx">
                <button onClick={() => changeLanguage("en")}>English</button>
            </Link>
            <Link href="EmailSection.jsx">
                <button onClick={() => changeLanguage("nl")}>Dutch</button>
            </Link>
        </div>
    );
};

export default TaalSwitchTwee;

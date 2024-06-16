/**
 * Splits text elements and makes a span element for each letter.
 * @param {*} selector
 */
function splitTextIntoSpans(selector) {
    let element = document.querySelector(selector);
    if (element) {
        let text = element.innerText;
        let splitText = text
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("");
        element.innerHTML = splitText;
    }
}

const setLineLength = (lines) => {
    let multiplyVariable = 1;
    let width = 100;
    lines.forEach((line) => {
        line.style.width = `${width * multiplyVariable}%`;
        multiplyVariable *= 0.6;
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // Gsap constants
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    const lines = document.querySelectorAll(".line");
    const lineTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    splitTextIntoSpans(".landing-title");
    splitTextIntoSpans(".info-text-container");

    let letters = document.querySelectorAll(".landing-title > span");
    let infoLetters = document.querySelectorAll(".info-text-container > span");

    t1.from(
        letters,
        {
            y: 600,
            ease: "power3.inOut",
            stagger: 0.075,
            delay: 0.2,
            duration: 1.5,
        },
        0.25
    );

    t1.from(
        infoLetters,
        {
            y: 30,
            ease: "power3.inOut",
            duration: 1,
        },
        1.75
    );

    t1.from(
        ".landing-btn",
        {
            y: 30,
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
            pointerEvents: "none",
        },
        1.75
    );

    t1.from(
        ".copyright",
        {
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
        },
        1.75
    );

    // Enter portfolio animations
    const t2 = gsap.timeline();
    const enterButton = document.querySelector(".landing-btn");
    enterButton.addEventListener("click", () => {
        let elements = [".landing", ".copyright"];

        t2.to(
            elements,
            {
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                display: "none",
            },
            0
        );

        t2.to(".main-content", {
            display: "block",
        });

        setLineLength(lines);

        t2.to(
            lines,
            {
                opacity: 1,
                stagger: 0.08,
                duration: 0.1,
                ease: "power2.in",
                onComplete: () => {
                    lineTimeline.to(
                        lines,
                        {
                            opacity: 0,
                            stagger: 0.08,
                            duration: 0.5,
                            ease: "power3.in",
                        },
                        1
                    );

                    lineTimeline.to(
                        lines,
                        {
                            opacity: 1,
                            stagger: 0.08,
                            duration: 0.5,
                            ease: "power3.in",
                        },
                        1.5
                    );
                },
            },
            1.15
        );

        lineTimeline.delay(1);
    });
});

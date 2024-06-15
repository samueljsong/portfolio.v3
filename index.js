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

document.addEventListener("DOMContentLoaded", () => {
    splitTextIntoSpans(".landing-title");
    splitTextIntoSpans(".info-text-container");

    let letters = document.querySelectorAll(".landing-title > span");
    let infoLetters = document.querySelectorAll(".info-text-container > span");
    console.log(letters);

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    t1.from(letters, {
        y: 600,
        ease: "power3.inOut",
        stagger: 0.075,
        delay: 0.2,
        duration: 1.5,
    });

    t1.from(
        infoLetters,
        {
            y: 30,
            ease: "power3.inOut",
            duration: 1,
        },
        1.5
    );

    t1.from(
        ".landing-btn",
        {
            y: 30,
            opacity: 0,
            ease: "power3.inOut",
            duration: 1,
        },
        1.5
    );

    t1.from(".copyright", {
        opacity: 0,
        ease: "power3.inOut",
        duration: 1,
    });
});

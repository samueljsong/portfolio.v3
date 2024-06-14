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

    let letters = document.querySelectorAll(".landing-title > span");
    console.log(letters);

    gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();

    t1.from(letters, {
        y: 700,
        ease: "power4.out",
        stagger: 0.075,
        delay: 0.2,
        duration: 1.2,
    });
});

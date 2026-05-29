// SERVICE SECTION

const buttons = document.querySelectorAll(".services-buttons button");
const slides = document.querySelectorAll(".bg-slide");

const title = document.querySelector(".services-title");
const info = document.querySelector(".services-info");

const servicesContent = [
    {
        title: "Website-Erstellung",
        info: "Noch keine Website? Ich erstelle Ihnen eine Website von Grund auf. Sie haben volle Kontrolle bei minimalem Aufwand."
    },

    {
        title: "Website-Überarbeitung",
        info: "Sie haben zwar eine Website, aber sind unzufrieden, weil ihre Seite zu alt, zu unprofessionell, nicht umfangreich genug oder einfach nicht das ist, was sie sich vorgestellt haben? Ich überarbeite Ihre Website so, dass Sie endlich stolz auf Ihre Online-Präsenz sein können."
    },

    {
        title: "Slide 3",
        info: "this is the infotext for slide 3. this is the infotext for slide 3. this is the infotext for slide 3. this is the infotext for slide 3."
    },

    {
        title: "Slide 4",
        info: "this is the infotext for slide 4. this is the infotext for slide 4. this is the infotext for slide 4. this is the infotext for slide 4."
    }
];

buttons.forEach((button, index) => {
    
    button.addEventListener("click", () => {

        // Button switch

        buttons.forEach(btn => {
            btn.classList.remove("current-service");
        });

        button.classList.add("current-service");

        // Slide switch

        const currentSlide = document.querySelector(".active");
        

        slides.forEach((slide, i) => {
            slide.classList.remove("previous", "active", "exit-left", "exit-right")

            currentSlide.classList.add("previous");

            if (index > i) {
                slide.classList.add("exit-left");
            } if (index < i) {
                slide.classList.add("exit-right");
            } if (index === i) {
                slides[index].classList.add("active");
                slides[index].classList.remove("exit-left", "exit-right");
            }
        });

        // Text switch

        title.innerHTML = servicesContent[index].title;
        info.innerHTML = servicesContent[index].info;
    });
});
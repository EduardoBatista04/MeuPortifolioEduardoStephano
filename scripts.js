 const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("nav a");
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 80;
                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }
            });
        });
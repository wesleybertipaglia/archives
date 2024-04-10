class RandomGradientGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createGridItem();
    }

    createGridItem() {
        const gradientItem = document.createElement("div");
        gradientItem.classList.add("gradient-item");

        const gradientBtn = document.createElement("button");
        gradientBtn.textContent = "Random Gradient";
        gradientBtn.addEventListener("click", () => {
            this.applyGradient(gradientItem);
        });

        const gradientItemContainer = document.createElement("div");
        gradientItemContainer.classList.add("gradient-item-container");
        gradientItemContainer.appendChild(gradientItem);
        gradientItemContainer.appendChild(gradientBtn);

        this.applyGradient(gradientItem);
        this.container.appendChild(gradientItemContainer);
    }

    getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    }

    getRandomAngle() {
        return Math.floor(Math.random() * 361);
    }

    applyGradient(element) {
        const startColor = this.getRandomColor();
        const endColor = this.getRandomColor();
        const angle = this.getRandomAngle();
        element.style.background = `linear-gradient(${angle}deg, ${startColor}, ${endColor})`;
    }
}

const gradientItem1 = new RandomGradientGenerator("gradientContainer");
const gradientItem2 = new RandomGradientGenerator("gradientContainer");
const gradientItem3 = new RandomGradientGenerator("gradientContainer");
const gradientItem4 = new RandomGradientGenerator("gradientContainer");

class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image,0,0)
        };
        image.src = "images/springForest.png";

        const player = new Image();
        player.onload = () => {
            this.ctx.drawImage(player,0,0)
        }
        player.src = "images/"
    }
};
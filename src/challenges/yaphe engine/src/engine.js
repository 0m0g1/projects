import World2D from "./modules/2D/PhysicsWorld2D.js";

class YapheEngine {
    constructor(constructors = {element: ""}) {
        this.world2Ds = [];
        this.mainLoop = null;
        this.rootElement = document.querySelector(constructors.element);
    }
    createWorld2D(width = window.innerWidth, height = window.innerHeight) {
        const world2D = new World2D(this);
        world2D.createCanvas(width, height);
        this.world2Ds.push(world2D);
        return world2D;
    }
    start() {
        this.mainLoop = setInterval(() => {
            this.world2Ds.forEach((world) => {
                world.update();
                world.show();
            });
        }, 1);
    }
    ingnite() {
        this.start();
    }
}

export default YapheEngine;
import YapheEngine from "../../src/engine.js";

const yapheEngine = new YapheEngine({element: ".yaphe-simulation"});
const world = yapheEngine.createWorld2D();
world.gravity = false;

const rope = world.createRope();
rope.segments = 25;
rope.width = 5;
rope.length = 125;
rope.stiffness = 0.05;
rope.particleRadius = 5;
rope.linkParticles();

rope.particles.forEach((particle) => {
    particle.damping = 0.98;
})

// rope.show()
yapheEngine.ingnite();
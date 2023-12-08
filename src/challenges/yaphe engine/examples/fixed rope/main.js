import YapheEngine from "../../src/engine.js";

const yapheEngine = new YapheEngine({element: ".yaphe-simulation"});
const world = yapheEngine.createWorld2D();

const rope = world.createRope();
rope.length = 200;
rope.segments = 20;
rope.stiffness = 0.05;
rope.particleRadius = 2;
rope.linkParticles();
rope.particles[0].locked = true;
rope.particles.forEach((particle) => {
    particle.damping = 0.97;
})

// rope.show()
yapheEngine.ingnite();
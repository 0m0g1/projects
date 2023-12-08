import YapheEngine from "../../src/engine.js";

const yapheEngine = new YapheEngine({element: ".yaphe-simulation"});
const world = yapheEngine.createWorld2D();
world.gravity = false;

const a = world.createParticle2D(world.center.x, world.center.y - 200);
const b = world.createParticle2D(world.center.x, world.center.y + 100);
a.damping = 0.991;
b.damping = 0.991;
const spring = world.createSpring2D(a, b, 0.005);

yapheEngine.ingnite();
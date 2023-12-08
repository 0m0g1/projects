import YapheEngine from "../../src/engine.js";

const yapheEngine = new YapheEngine({element: ".yaphe-simulation"});
const world = yapheEngine.createWorld2D();
world.bindParticles = false;

const a = world.createParticle2D(world.center.x, world.center.y - 200);
a.locked = true;
const b = world.createParticle2D(world.center.x, world.center.y + 50);
b.mass = 2;
const spring = world.createSpring2D(a, b, 0.001);

yapheEngine.ingnite();
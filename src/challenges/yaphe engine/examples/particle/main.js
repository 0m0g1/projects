import YapheEngine from "../../src/engine.js";

const yapheEngine = new YapheEngine({element: ".yaphe-simulation"});
const world = yapheEngine.createWorld2D();

const a = world.createParticle2D(world.center.x, world.center.y - 200);

yapheEngine.ingnite();
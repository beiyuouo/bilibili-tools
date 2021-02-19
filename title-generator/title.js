import * as mo from "movy";

const TEXT1_POS = [-2.8, 0];
const TEXT2_POS = [2.8, 0];
const DOT_POS = [2, -0.6];
const TITLE_POS = [4, -2]
const IMG_POS = [0, 2]
const SERIES_TITLE = "不会读paper"
const PAPER_TITLE = "First Order Motion Model for Image Animation"
const PAPER_TITLE_POS = [0, -1.5]
const AUTHORS = "Aliaksandr Siarohin, Stéphane Lathuilière, Sergey Tulyakov et al."
const AUTHORS_POS = [0, -2.5]
const IMG_PATH = "img/dl.jpg"


mo.enableBloom();
mo.enableMotionBlur();

const g = mo.addGroup();
const r1 = mo.addCircle({
  scale: 0.1,
  position: [-10, -5],
  parent: g,
  color: "yellow",
});
const r2 = mo.addCircle({
  scale: 0.1,
  position: [10, 5],
  parent: g,
});

r1.moveTo({
  position: [0, 0],
  t: 0.5,
  scale: 1.5,
  ease: "elastic.out(1, 0.75)",
});
r2.moveTo({
  position: [0.1, 0.1, -0.1],
  t: 0.5,
  scale: 1.5,
  ease: "elastic.out(1, 0.75)",
});

g.shake2D({ t: 0.6 });

addParticle({ parent: g, t: 0.5 });

r1.fadeOut({ t: 2 })
// r1.changeOpacity({ opacity: 0.3, t: 2 });
r2.fadeOut({ t: 2 });

// r1.moveTo({
//   position: TEXT1_POS.concat([-0.1]),
//   ease: "expo.in",
//   t: 2,
//   duration: 0.4,
//   scale: 4,
// });
const t1 = mo.addText("北屿", { fontSize: 1.5, position: TEXT1_POS });
t1.grow2({ t: "<0.4" });

// r1.moveTo({
//   position: TEXT2_POS.concat([-0.1]),
//   ease: "expo.in",
//   t: 2.4,
//   duration: 0.4,
// });
const t2 = mo.addText("小智障", { fontSize: 1.5, position: TEXT2_POS, color: "yellow" });
t2.grow2({
  t: "<0.4",
});

// r1.moveTo({ position: DOT_POS, scale: 0.3 });
// r1.changeOpacity({ t: "<", opacity: 1 });

mo.addGlitch({ t: 3.2 });
mo.addGlitch({ t: 3.7 });

const t3 = mo.addText(SERIES_TITLE, { fontSize: 0.6, position: TITLE_POS, color: "white" });
t3.grow2({
  t: "<0.4",
});

mo.pause(1);

t1.fadeOut({ t: 5 });
t2.fadeOut({ t: 5 });
t3.fadeOut({ t: 5 });

mo.addImage(IMG_PATH, { position: IMG_POS, sx: 5, sy: 5 }).fadeIn({
  t: "<0.2",
});


mo.addText(PAPER_TITLE, { fontSize: 0.4, position: PAPER_TITLE_POS, color: "white" }).fadeIn({
  t: "<0.2",
});
mo.addText(AUTHORS, { fontSize: 0.3, position: AUTHORS_POS, color: "white" }).fadeIn({
  t: "<0.2",
});


mo.pause(1);

mo.run();



function addParticle({ position, t }) {
  const particleGroup = mo.addGroup({ scale: 0.5, position });
  for (let i = 0; i < 3; i++) {
    mo.addRectOutline({ parent: particleGroup, opacity: 0.7, scale: 0.8 });
    mo.addTriangleOutline({ parent: particleGroup, opacity: 0.7, scale: 0.8 });
    mo.addCircleOutline({ parent: particleGroup, opacity: 0.7, scale: 0.8 });
  }
  particleGroup.explode2D({ t });
  particleGroup.fadeOut({ t: "1.5", duration: 1 });
}
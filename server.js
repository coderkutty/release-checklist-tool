const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let releases = [];

function getStatus(steps) {
  if (steps.every(s => !s)) return "planned";
  if (steps.every(s => s)) return "done";
  return "ongoing";
}

app.post("/releases", (req, res) => {
  const { name, date, info } = req.body;

  const newRelease = {
    id: Date.now(),
    name,
    date,
    info,
    steps: [false, false, false, false, false],
  };

  newRelease.status = getStatus(newRelease.steps);

  releases.push(newRelease);

  res.json(newRelease);
});

app.get("/releases", (req, res) => {
  releases.forEach(r => {
    r.status = getStatus(r.steps);
  });

  res.json(releases);
});

app.put("/releases/:id/step", (req, res) => {
  const { id } = req.params;
  const { stepIndex } = req.body;

  const release = releases.find(r => r.id == id);

  if (release) {
    release.steps[stepIndex] = !release.steps[stepIndex];
    release.status = getStatus(release.steps);
  }

  res.json(release);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
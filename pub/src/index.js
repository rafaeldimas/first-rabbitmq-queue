const winston = require("winston");

const broker = require("./broker");

async function run() {
  try {
    await broker.start();
  } catch (err) {
    winston.error(err);
    setTimeout(run, 1000);
  }
}

run();

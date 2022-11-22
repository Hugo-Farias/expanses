const timeToRealTime = function (videoTime, speed) {
  const minToSec = videoTime * 60;
  // const time = (minToSec * speed) / 60;
  return minToSec / speed / 60;
};

console.log(Math.trunc(Math.random() * 1000 + 1));

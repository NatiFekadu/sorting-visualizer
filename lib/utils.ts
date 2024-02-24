export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEDD = 1000;

export function getRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Returns a random integer between min and max

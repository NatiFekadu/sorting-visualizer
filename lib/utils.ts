import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { AnimationArrayType, SortingAlgorithmType } from "./types";

export const MIN_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 1000;

export function getRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
  { label: "Bubble Sort", value: "bubble" },
  { label: "Selection Sort", value: "selection" },
  { label: "Insertion Sort", value: "insertion" },
  { label: "Merge Sort", value: "merge" },
  { label: "Quick Sort", value: "quick" },
  // {label:"Heap Sort",value:'heap'},
  // {label:"Counting Sort",value:'counting'},
  // {label:"Radix Sort",value:'radix'},
];
// Returns a random integer between min and max

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  switch (selectedAlgorithm) {
    case "BubbleSort":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}

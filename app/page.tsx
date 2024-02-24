"use client";

import { useContext } from "react";
import { useSortingAlgorithmContext } from "@/context/Visualizer";

export default function Home() {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

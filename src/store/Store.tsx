"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { UserInputs } from "@/types";

interface ChildrenPropsType {
  children: React.ReactNode;
}

export interface GlobalStateType {
  isOpen: boolean;
  rate: number;
  percentile: number;
  score: number;
  openModal: () => void;
  closeModal: () => void;
  globalUserInput: (inputs: UserInputs) => void;
}

const GlobalState = createContext<GlobalStateType | undefined>(undefined);

function StoreProvider({ children }: ChildrenPropsType) {
  const [isClient, setIsClient] = useState(false); //Without this, the useEffect and the if-statement,it gives error regarding hydration.

  const [isOpen, setIsOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) {
    return null;
  }


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function globalUserInput(inputs: UserInputs) {
    setRate(inputs.rate);
    setPercentile(inputs.percentile);
    setScore(inputs.score);
  }

  return (
    <GlobalState.Provider
      value={{
        openModal,
        closeModal,
        globalUserInput,
        isOpen,
        rate,
        percentile,
        score,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
}

function useGlobalState() {
  const context = useContext(GlobalState);
  if (!context) {
    throw new Error("check your context API setup");
  }
  return context;
}

export { StoreProvider, useGlobalState };

"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { LeafsType } from "../(pages)/_types";
import { LeafRequestType } from "../(pages)/(create)/_api/post";

interface CreateState {
  leafForm: LeafRequestType;
  action: {
    handleLeafType: (leaf: LeafsType) => void;
  };
}

const CreateContext = createContext<CreateState>({} as CreateState);

export function CreateProvider({ children }: { children: ReactNode }) {
  const [leafForm, setLeafForm] = useState<LeafRequestType>({
    title: "",
    content: "",
    isAnonymous: false,
    leafType: "bg-leaf0",
  });

  const handleLeafType = (leaf: LeafsType) => {
    setLeafForm(currentForm => ({
      ...currentForm,
      leafType: leaf,
    }));
  };

  return (
    <CreateContext.Provider
      value={{
        leafForm,
        action: {
          handleLeafType,
        },
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export const useCreateContext = () => useContext(CreateContext);

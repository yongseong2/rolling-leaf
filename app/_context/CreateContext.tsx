"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { LeafRequestType } from "../(pages)/(create)/_api";

interface CreateState {
  state: {
    leafForm: LeafRequestType;
  };
}

const CreateContext = createContext<CreateState>({} as CreateState);

export function CreateProvider({ children }: { children: ReactNode }) {
  const [leafForm, setLeafForm] = useState<LeafRequestType>({
    title: "",
    content: "",
    isAnonymous: false,
    leafType: "",
  });

  return (
    <CreateContext.Provider
      value={{
        state: {
          leafForm: leafForm,
        },
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export const useCreateContext = () => useContext(CreateContext);

"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { LeafsType } from "../(pages)/_types";
import { LeafRequestType, createLeaf } from "../(pages)/(create)/_api/post";

interface CreateState {
  state: { leafForm: LeafRequestType };
  action: {
    handleLeafType: (leaf: LeafsType) => void;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleIsAnonymousChange: () => void;
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

  const handleLeafTypeChange = (leaf: LeafsType) => {
    setLeafForm({ ...leafForm, leafType: leaf });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeafForm({ ...leafForm, title: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLeafForm({ ...leafForm, content: e.target.value });
  };

  const handleIsAnonymousChange = () => {
    setLeafForm({ ...leafForm, isAnonymous: !leafForm.isAnonymous });
  };

  return (
    <CreateContext.Provider
      value={{
        state: {
          leafForm,
        },
        action: {
          handleLeafType: handleLeafTypeChange,
          handleTitleChange,
          handleContentChange,
          handleIsAnonymousChange,
        },
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export const useCreateContext = () => useContext(CreateContext);

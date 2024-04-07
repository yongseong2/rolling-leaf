import { ReactNode, MouseEvent } from "react";
import ModalPortal from "./ModalPortal";
import { useModalContext } from "../../_context/ModalContext";

interface Props {
  label?: string;
  children: ReactNode;
  id: string;
  subLabel: string;
}

export function Modal({ id, label, subLabel, children }: Props) {
  const { openModals, closeModal } = useModalContext();
  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {openModals[id] && (
        <ModalPortal>
          <div
            onClick={e => handleBackgroundClick(e)}
            className="fixed inset-0 z-50 flex max-w-screen-md items-end justify-center bg-black/20 transition-opacity duration-200"
          >
            <div
              className={`flex h-2/3 w-screen flex-col justify-between rounded-t-lg bg-light-cream shadow-lg transition-transform duration-200`}
            >
              <div className="flex  items-center justify-between p-4">
                <div className="flex w-full items-center justify-between gap-2 text-lg font-bold">
                  <span>{label}</span>
                  <span className="text-sm">from.{subLabel}</span>
                </div>
              </div>
              <div className="overflow-auto p-4">{children}</div>

              <button
                className="bg-action py-3 font-bold text-white"
                onClick={() => closeModal()}
              >
                닫기
              </button>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}

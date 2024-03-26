"use client";
import IconButton from "./IconButton";
import { useDispatch } from "react-redux";
import { logout } from "@/app/_store/modules/userSlice";
import { useRouter } from "next/navigation";

interface Props {
  path?: string;
  topNavSpace: string;
}

export function TopNavBar({ path, topNavSpace }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  const pathToTitle: { [key: string]: string } = {
    "/camera": "카메라",
  };

  return (
    <div
      className="shadow-bottom-shadow flex w-full items-center justify-between rounded-b-md bg-gray-50 px-6"
      style={{ height: topNavSpace }}
    >
      {!(path && pathToTitle[path]) && (
        <>
          <div
            className="text-gold font-bold"
            onClick={() => router.push("/main")}
          >
            WAKE UP
          </div>
          <IconButton name="Logout" size={30} onClick={handleLogout} />
        </>
      )}
      {path && pathToTitle[path] && (
        <>
          <IconButton
            className="fixed"
            name="Back"
            size={20}
            onClick={() => router.back()}
          />
          <div className="flex-grow text-center font-bold">
            {pathToTitle[path]}
          </div>
        </>
      )}
    </div>
  );
}

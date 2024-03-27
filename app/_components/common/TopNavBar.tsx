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
      className="flex w-full items-center justify-between rounded-b-md bg-c1 px-6 shadow-bottom-shadow"
      style={{ height: topNavSpace }}
    >
      {!(path && pathToTitle[path]) && (
        <>
          <div className="font-bold" onClick={() => router.push("/main")}>
            나뭇잎 롤링페이퍼
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
          <div className="grow text-center font-bold">{pathToTitle[path]}</div>
        </>
      )}
    </div>
  );
}

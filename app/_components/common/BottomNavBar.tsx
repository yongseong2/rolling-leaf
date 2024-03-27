import { useRouter } from "next/navigation";
import * as Icons from "@/app/_asset/icons/iconIndex";
import Icon from "./Icon";

interface Props {
  bottomNavSpace: string;
}
interface ButtonObject {
  name: keyof typeof Icons;
  title: string;
  func: () => void;
}

export function BottomNavBar({ bottomNavSpace }: Props) {
  const router = useRouter();
  const bottomMenu: ButtonObject[] = [
    { name: "Profile", title: "프로필", func: () => console.log("안녕") },
  ];
  return (
    <div
      className="absolute bottom-0 flex w-full items-center justify-around rounded-t-md bg-slate-50 shadow-top-shadow"
      style={{ height: bottomNavSpace }}
    >
      {bottomMenu.map(item => {
        return (
          <button
            key={item.name}
            className="w-fit transition-opacity duration-300 hover:opacity-60"
            onClick={() => item.func()}
          >
            <div className="flex items-center justify-center">
              <Icon name={item.name} />
            </div>
            {/* <p className="mt-1 text-center text-xs font-bold">{item.title}</p> */}
          </button>
        );
      })}
    </div>
  );
}

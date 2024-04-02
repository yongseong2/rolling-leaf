import Icon from "./Icon";
import { colors } from "../_design/colors";
import IconButton from "./IconButton";
import { routes } from "../_routes";
import { useParams, usePathname, useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname.startsWith("/home");
  const params = useParams();
  return (
    <header className="flex w-full items-center justify-between px-5 py-4">
      {!isHome ? (
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center"
        >
          <Icon size={16} name="Back" color={colors.c0} />
          <p className="text-sm text-c0">뒤로가기</p>
        </button>
      ) : (
        <div></div>
      )}
      {isHome ? (
        <IconButton
          className="flex size-8 items-center justify-center rounded-full bg-c2"
          name="Plus"
          color={colors.c0}
          onClick={() =>
            router.push(`${routes["select-leaf"]}/${params.userId}`)
          }
        />
      ) : (
        <div className="size-8"></div>
      )}
    </header>
  );
}

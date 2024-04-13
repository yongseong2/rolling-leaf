import Icon from "./Icon";
import { colors } from "../_design/colors";
import IconButton from "./IconButton";
import { routes } from "../_routes";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import MailIcon from "../_asset/icons/flowbite/MailIcon";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname.startsWith("/home");
  const params = useParams();
  const { data: session } = useSession();
  const isMine = session?.user.id === params.recipientId;

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
      {session && isHome ? (
        <div className="flex items-center gap-3">
          {!isMine && (
            <button
              className="flex items-center gap-2 rounded-md bg-c2 p-1 text-c0"
              onClick={() => router.push(`${routes.home}/${session.user.id}`)}
            >
              <MailIcon />내 편지함
            </button>
          )}
          <IconButton
            className="flex size-8 items-center justify-center rounded-full bg-c2"
            name="Plus"
            color={colors.c0}
            onClick={() =>
              router.push(`${routes["select-leaf"]}/${params.recipientId}`)
            }
          />
        </div>
      ) : (
        <button
          onClick={() => router.push("/login")}
          className="rounded-md bg-c2 p-1 text-sm text-c0"
        >
          로그인
        </button>
      )}
    </header>
  );
}

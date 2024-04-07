import ShareIcon from "@/app/_asset/icons/flowbite/ShareIcon";
import Button from "@/app/_components/Button";
import { kakaoShare } from "@/app/_util/kakaoShare";

interface Props {
  recipientName?: string;
  recipientId: string;
}

export function ShareButton({ recipientId, recipientName }: Props) {
  const handleShare = () => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    }
    if (recipientName) {
      window.Kakao.Share.sendDefault(kakaoShare(recipientId, recipientName));
    }
  };
  return (
    <Button
      onClick={() => handleShare()}
      className="border-2 border-dashed text-lg font-bold text-white"
    >
      <ShareIcon />
      공유하기
    </Button>
  );
}

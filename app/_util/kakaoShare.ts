export function kakaoShare(recipientId: string, recipientName: string) {
  return {
    objectType: "feed",
    content: {
      title: `${recipientName}님의 롤링 페이퍼를 구경하세요`,
      imageUrl: "#",
      link: {
        mobileWebUrl: "#",
        webUrl: "#",
      },
    },
    itemContent: {
      profileText: "나뭇잎 롤링페이퍼",
      profileImageUrl:
        "https://rolling-leaf.vercel.app/_next/image?url=%2Fimages%2Fleaves%2Fleaf0.png&w=828&q=75",
    },
    buttons: [
      {
        title: "나뭇잎 롤링페이퍼로 이동",
        link: {
          mobileWebUrl: `https://rolling-leaf.vercel.app/home/${recipientId}`,
          webUrl: `https://rolling-leaf.vercel.app/home/${recipientId}`,
        },
      },
    ],
  };
}

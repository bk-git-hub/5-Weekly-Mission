declare global {
  interface Window {
    Kakao: any;
  }
}

export function kakaoShare(route: string): void {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init('596ed3a4fcb13779c60a5e27d3ab4266'); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Share.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: 'Linkbrary', // 인자값으로 받은 title
        description: `위클리미션`, // 인자값으로 받은 title
        imageUrl:
          'https://image6.uhdpaper.com/wallpaper-hd/yeji-itzy-uhdpaper.com-hd-6.1786.jpg',
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],

      installTalk: true,
    });
  }
}

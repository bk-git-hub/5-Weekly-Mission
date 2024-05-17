import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js'
          integrity='sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01'
          crossOrigin='anonymous'
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

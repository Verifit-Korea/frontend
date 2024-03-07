// function base64url(source: Buffer): string {
//     return source.toString('base64')
//         .replace(/=/g, '')
//         .replace(/\+/g, '-')
//         .replace(/\//g, '_');
// }
// g
// export function createJWT(header: any, payload: any, secretKey: string): string {
//     // 헤더와 페이로드를 JSON 형식으로 만들고 Base64로 인코딩
//     const encodedHeader = base64url(Buffer.from(JSON.stringify(header)));
//     const encodedPayload = base64url(Buffer.from(JSON.stringify(payload)));
//
//     // 서명 생성npm install crypto-js
//     const signature = CryptoJS.HmacSHA256(encodedHeader + '.' + encodedPayload, secretKey)
//         .toString(CryptoJS.enc.Base64);
//
//     // 헤더, 페이로드, 서명을 합쳐서 JWT 생성
//     const jwt = `${encodedHeader}.${encodedPayload}.${base64url(Buffer.from(signature))}`;
//
//     return jwt;
// }

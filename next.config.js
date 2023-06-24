/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  env: {
    // 서버 사이드 렌더링 시 가져올 값 작성
    // EX) customKey: 'my-value',
  },
}

module.exports = nextConfig

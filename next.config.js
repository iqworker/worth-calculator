/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出，生成 out 目录
  trailingSlash: true,  // 避免路由问题
  images: {
    unoptimized: true,  // 静态导出不支持图像优化（项目有 title.png 等）
  },
};

module.exports = nextConfig;

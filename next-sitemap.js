module.exports = {
  siteUrl: process.env.HOST || 'https://k1-next.vercel.app',
  generateRobotsTxt: true, // ← robots.txt が不要なら false でおk
  outDir: './out'
}
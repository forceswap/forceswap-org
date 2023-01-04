const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'App',
        link: 'https://app.forceswap.org/#/',
        description: 'Swap tokens and supply liquidity'
      },
      {
        name: 'Analytics',
        link: 'https://info.forceswap.org/',
        description: 'forceswap analytics and historical data'
      },
      {
        name: 'Token Lists',
        link: 'https://tokens.forceswap.org/',
        description: 'Standard Ethereum token list standard.'
      },
      {
        name: 'forceHawk',
        link: 'https://kwiskwap.org/',
        description: 'Something Interesting Coming Soon'
      },
    ]
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: '/docs/v1' //This was v2
      },
      { name: 'GitHub', link: 'https://github.com/forceswap' },
      { name: 'Whitepaper', link: '/whitepaper.pdf' },
      { name: 'Bug Bounty', link: '/bug-bounty' }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Telegram', link: 'https://t.me/forceswap' },
      { name: 'Twitter', link: 'https://twitter.com/forceswapdex' },
      { name: 'Reddit', link: 'https://reddit.com/r/forceswap' },
      { name: 'Github', link: 'https://gitub.com/forceswap' },
      { name: 'Medium', link: 'https://www.medium.com/@forceswap' }
    ]
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Info',
        link: '/about'
      },
      {
        name: 'FAQ',
        link: 'docs/v1/faq'
      },
      {
        name: 'Jobs',
        link: '/about#jobs'
      },
    ]
  }
]

module.exports = menu

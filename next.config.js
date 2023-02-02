const headers = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers,
      },
      {
        source: '/',
        headers,
      },
    ];
  }
};

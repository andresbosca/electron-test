module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }

    return config;
  },
  images: {
    domains: ['localhost', 'bit.ly', 'www.google.com', 'encrypted-tbn0.gstatic.com'],
  },
};

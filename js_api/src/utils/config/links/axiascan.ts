export default {
  chains: {
    // 'Centrifuge Mainnet': 'centrifuge',
    // Edgeware: 'edgeware',
    // Kulupu: 'kulupu',
    AXIALunar: "axialunar",
    AXIA: "axia",
    "AXIA CC1": "axia-cc1",
  },
  create: (chain: string, path: string, data: any) =>
    `https://axiascan.io/${chain}/${path}/${data.toString()}`,
  isActive: true,
  paths: {
    address: "account",
    block: "block",
    council: "council/motion",
    extrinsic: "transaction",
    proposal: "democracy/proposal",
    referendum: "democracy/referendum",
    techcomm: "techcomm/proposal",
    treasury: "treasury/proposal",
  },
  url: "https://axiascan.io/",
};

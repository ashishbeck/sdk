export default {
  chains: {
    "Acala Mandala TC4": "acala-testnet",
    AXIALunar: "axialunar",
    "AXIALunar CC3": "axialunar",
    AXIASolar: "axiasolar",
    "AXIASolar CC1": "axiasolar-cc1",
    AlphaNet: "alphanet",
  },
  create: (chain: string, path: string, data: any) =>
    `https://${chain}.subscan.io/${path}/${data.toString()}`,
  isActive: true,
  paths: {
    address: "account",
    block: "block",
    council: "council",
    extrinsic: "extrinsic",
    proposal: "democracy_proposal",
    referendum: "referenda",
    techcomm: "tech",
    treasury: "treasury",
  },
  url: "https://subscan.io/",
};

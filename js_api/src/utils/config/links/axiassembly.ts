export default {
  chains: {
    AXIALunar: "axialunar",
    "AXIALunar CC3": "axialunar",
    AXIA: "axia",
  },
  create: (chain: string, path: string, data: any) =>
    `https://${chain}.axiassembly.io/${path}/${data.toString()}`,
  isActive: true,
  paths: {
    council: "motion",
    proposal: "proposal",
    referendum: "referendum",
    treasury: "treasury",
  },
  url: "https://axiassembly.io/",
};

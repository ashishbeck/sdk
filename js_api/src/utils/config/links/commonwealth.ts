const HASH_PATHS = ["proposal/councilmotion"];

export default {
  chains: {
    Edgeware: "edgeware",
    AXIALunar: "axialunar",
    "AXIALunar CC3": "axialunar",
  },
  create: (chain: string, path: string, data: any, hash: string) =>
    `https://commonwealth.im/${chain}/${path}/${
      HASH_PATHS.includes(path) ? hash || "" : data.toString()
    }`,
  isActive: true,
  paths: {
    council: "proposal/councilmotion",
    proposal: "proposal/democracyproposal",
    referendum: "proposal/referendum",
    treasury: "proposal/treasuryproposal",
  },
  url: "https://commonwealth.im/",
};

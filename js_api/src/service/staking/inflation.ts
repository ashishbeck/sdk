// Copyright 2017-2021 @axia-js/app-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@axia-js/api';

import { AXIALUNAR_GENESIS, AXIA_GENESIS } from '../../constants/networkSpect';

export interface Inflation {
  inflation: number;
  stakedReturn: number;
}

interface InflationParams {
  falloff: number;
  idealStake: number;
  maxInflation: number;
  minInflation: number;
}

const DEFAULT_PARAMS: InflationParams = {
  falloff: 0.05,
  idealStake: 0.5,
  maxInflation: 0.1,
  minInflation: 0.025
};

const KNOWN_PARAMS: Record<string, InflationParams> = {
  [AXIALUNAR_GENESIS]: { ...DEFAULT_PARAMS, idealStake: 0.75 },
  [AXIA_GENESIS]: { ...DEFAULT_PARAMS, idealStake: 0.75 }
};

export function getInflationParams (api: ApiPromise): InflationParams {
  return KNOWN_PARAMS[api.genesisHash.toHex()] || DEFAULT_PARAMS;
}

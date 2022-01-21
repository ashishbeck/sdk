import 'dart:async';

import 'package:axiawallet_sdk/api/api.dart';
import 'package:axiawallet_sdk/service/account.dart';
import 'package:axiawallet_sdk/service/assets.dart';
import 'package:axiawallet_sdk/service/gov.dart';
import 'package:axiawallet_sdk/service/keyring.dart';
import 'package:axiawallet_sdk/service/parachain.dart';
import 'package:axiawallet_sdk/service/recovery.dart';
import 'package:axiawallet_sdk/service/setting.dart';
import 'package:axiawallet_sdk/service/staking.dart';
import 'package:axiawallet_sdk/service/tx.dart';
import 'package:axiawallet_sdk/service/uos.dart';
import 'package:axiawallet_sdk/service/walletConnect.dart';
import 'package:axiawallet_sdk/service/webViewRunner.dart';
import 'package:axiawallet_sdk/storage/keyring.dart';

/// The service calling JavaScript API of `axia-js/api` directly
/// through [WebViewRunner], providing APIs for [AXIAWalletApi].
class SubstrateService {
  ServiceKeyring keyring;
  ServiceSetting setting;
  ServiceAccount account;
  ServiceTx tx;

  ServiceStaking staking;
  ServiceGov gov;
  ServiceParachain parachain;
  ServiceAssets assets;
  ServiceUOS uos;
  ServiceRecovery recovery;

  ServiceWalletConnect walletConnect;

  WebViewRunner _web;

  WebViewRunner get webView => _web;

  Future<void> init(
    Keyring keyringStorage, {
    WebViewRunner webViewParam,
    Function onInitiated,
    String jsCode,
  }) async {
    keyring = ServiceKeyring(this);
    setting = ServiceSetting(this);
    account = ServiceAccount(this);
    tx = ServiceTx(this);
    staking = ServiceStaking(this);
    gov = ServiceGov(this);
    parachain = ServiceParachain(this);
    assets = ServiceAssets(this);
    uos = ServiceUOS(this);
    recovery = ServiceRecovery(this);

    walletConnect = ServiceWalletConnect(this);

    _web = webViewParam ?? WebViewRunner();
    await _web.launch(keyring, keyringStorage, onInitiated, jsCode: jsCode);
  }
}

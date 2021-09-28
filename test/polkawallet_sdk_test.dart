import 'package:flutter_test/flutter_test.dart';

import 'package:axiawallet_sdk/axiawallet_sdk.dart';

void main() {
  group('sdk test', () {
    test('init sdk', () async {
      final sdk = WalletSDK();
      expect(sdk.api, isNull);
    });
  });
}

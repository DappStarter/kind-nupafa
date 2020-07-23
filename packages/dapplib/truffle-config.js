require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food trap return machine slow coral light army gaze'; 
let testAccounts = [
"0x2d69c60e9c490ec7afe2b51ccb31e6431bdd982435fb13f18cd43f46c6beadec",
"0x95d0d85e55a494f72c20e4f72b1d1a9d633307d8393012e4d4ac96d1f08a157f",
"0xe55e82f3bfef9bac72ffc0b42be4a7113fdf39a82483ce9a3a0b340a2541b5b7",
"0xbee8a6fcf46a81abefd0fbca6753f39bec6847263836bcbb7e68b44dadc81718",
"0x2e346fa463d4b0ff602cc387b2cd36700267737dd59c36a6d7dbe6d7b75aba47",
"0xc80ccac2e59320ddb174a9d7b5bd2ae6efa616f620ab560f1dd2aa3a4d454f76",
"0x694b4fefd0b6d986c9cb4c2cc0d1ea65ddfcd9615ebbecd184f6dd7ea604878b",
"0xd4c0eddd38b4734210eb3f94ea45548ca88dac322d2aae0e88f5476d200fc42e",
"0xa475319c489429a956f0f18940063dec567a83d1480f18ecd06ebfe9a656faaf",
"0x1faa186cdbcb8007bd3b8fc638b58467c06805b4febb3c74c3da3cf52aa90d62"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

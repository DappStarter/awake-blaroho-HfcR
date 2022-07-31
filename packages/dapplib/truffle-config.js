require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach curtain magic evil half kangaroo army general'; 
let testAccounts = [
"0x48a9e2f6096127b563f46d1788337cd7510fd2e049b4a5f170c6d39221fcc9b5",
"0xb07f3b2cb906f39e495bb6dca260901da80fb28dbc611f034091feb7258659ff",
"0x22bfcbe50f4847b5332248d16589e0f49deb4c5e612e7bef5710d99272f31b4f",
"0x8502aad7aa525051503e490a8796788b2c97c7f48bf4c5bcbcf7fdd97112bf41",
"0x5577798159a640f35b5daeded78b78e2c22ec5b12a0d132fa5d4a9a4daf66499",
"0x9dbea2e318aa7fced005c2a634521dc71ef21f17182be0723e064fa61097b486",
"0xfd9e71763956f0527c5076abf41292f7bf19cfc3fc4bb2dc43763fe212324513",
"0xd4ced04f4b7fe8a3a4ec4493370e4136149b28ccb52abacd2e7608e163cf502f",
"0xe3ea96bc09ecfa2953740c59c9d636c06635aff2f7f13b0e4ed4d85beddc8a5c",
"0x8595161af70f72c46a2e2b88af52213cffeea31f6e4213b539348bd177ce7bbd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



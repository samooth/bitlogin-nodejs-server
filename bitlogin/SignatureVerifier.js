const bitcoinMessage = require('bitcoinjs-message');

module.exports = class SignatureVerifier {
    static VerifySignature(legacyAddress, message, signature) {
        try {
            let verified = false;
            verified = bitcoinMessage.verify(message, legacyAddress, signature);
            return verified;
        } catch (e) {
            console.log(`Exception ${e}`);
            return false;
        }
    }
}
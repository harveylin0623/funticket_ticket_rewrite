import CryptoJS from 'crypto-js'

export const useCrypto = () => {
  const aes_key = process.env.AES_KEY
  const sign_key = process.env.SIGN_KEY

  const encodeAes = (input) => {
    const keyHash = CryptoJS.SHA384(aes_key)
    const key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0, 64))
    const iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64, 96))
    const encrypted = CryptoJS.AES.encrypt(input, key, { iv })
    return encrypted.toString()
  }

  const encodeSign = (body) => {
    const payload = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(body)))
    const signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(payload, sign_key))
    const sign = payload + '.' + signature
    return sign
  }

  const decodeAes = (input) => {
    const keyHash = CryptoJS.SHA384(aes_key)
    const key = CryptoJS.enc.Hex.parse(keyHash.toString().substring(0, 64))
    const iv = CryptoJS.enc.Hex.parse(keyHash.toString().substring(64, 96))
    const encrypted = CryptoJS.AES.decrypt(input, key, { iv })
    return encrypted.toString(CryptoJS.enc.Utf8)
  }

  return { encodeAes, encodeSign, decodeAes }
}

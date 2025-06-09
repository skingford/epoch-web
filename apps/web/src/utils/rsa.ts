import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';

// RSA密钥大小枚举
export enum KeySize {
  KeySize2048 = 2048,
  KeySize4096 = 4096
}

// RSA密钥对接口
export interface RSAKeyPair {
  privateKey: string;
  publicKey: string;
}

// RSA密钥配置接口
export interface RSAKeyConfig {
  dirPath: string;
  publicKeyName: string;
  privateKeyName: string;
  keySize: KeySize;
  permissions: number;
}

// 默认RSA密钥配置
export function defaultRSAKeyConfig(): RSAKeyConfig {
  return {
    dirPath: './keys',
    publicKeyName: 'public.pem',
    privateKeyName: 'private.pem',
    keySize: KeySize.KeySize2048,
    permissions: 0o600
  };
}

// RSA密钥生成器类
export class RSAKeyGenerator {
  private config: RSAKeyConfig;

  constructor(config?: Partial<RSAKeyConfig>) {
    this.config = { ...defaultRSAKeyConfig(), ...config };
  }

  // 生成RSA密钥对
  generateKeyPair(): RSAKeyPair {
    // 在浏览器环境中，我们无法直接生成RSA密钥对
    // 建议在服务器端生成密钥对，然后传递给客户端
    throw new Error('RSA密钥对生成需要在服务器端进行，浏览器环境不支持');
  }

  // 从PEM字符串加载密钥对
  loadKeyPairFromText(publicKeyStr: string, privateKeyStr: string): RSAKeyPair {
    return {
      publicKey: publicKeyStr,
      privateKey: privateKeyStr
    };
  }
}

// RSA加密工具类
export class RsaKit {
  private publicKey: string;
  private privateKey: string;
  private encryptor: JSEncrypt;
  private decryptor: JSEncrypt;

  constructor(keyPair: RSAKeyPair) {
    this.publicKey = keyPair.publicKey;
    this.privateKey = keyPair.privateKey;
    
    // 初始化加密器
    this.encryptor = new JSEncrypt();
    this.encryptor.setPublicKey(this.publicKey);
    
    // 初始化解密器
    this.decryptor = new JSEncrypt();
    this.decryptor.setPrivateKey(this.privateKey);
  }

  // 公钥加密
  publicEncrypt(data: string | Uint8Array): string {
    const dataStr = typeof data === 'string' ? data : this.uint8ArrayToString(data);
    
    const encrypted = this.encryptor.encrypt(dataStr);
    if (!encrypted) {
      throw new Error('RSA加密失败');
    }
    
    return encrypted;
  }

  // 私钥解密
  privateDecrypt(data: string): string {
    const decrypted = this.decryptor.decrypt(data);
    if (!decrypted) {
      throw new Error('RSA解密失败');
    }
    
    return decrypted;
  }

  // 私钥签名
  privateSign(data: string | Uint8Array): string {
    const dataStr = typeof data === 'string' ? data : this.uint8ArrayToString(data);
    
    const signature = this.decryptor.sign(dataStr, CryptoJS.SHA256, 'sha256');
    if (!signature) {
      throw new Error('RSA签名失败');
    }
    
    return signature;
  }

  // 公钥验证签名
  publicVerify(data: string | Uint8Array, signature: string): boolean {
    const dataStr = typeof data === 'string' ? data : this.uint8ArrayToString(data);
    
    return this.encryptor.verify(dataStr, signature, CryptoJS.SHA256);
  }

  // 辅助方法：Uint8Array转字符串
  private uint8ArrayToString(uint8Array: Uint8Array): string {
    return String.fromCharCode.apply(null, Array.from(uint8Array));
  }

  // 辅助方法：字符串转Uint8Array
  private stringToUint8Array(str: string): Uint8Array {
    return new Uint8Array(str.split('').map(char => char.charCodeAt(0)));
  }
}

// 工具函数：Base64编码
export function toBase64(data: string | Uint8Array): string {
  if (typeof data === 'string') {
    return btoa(data);
  } else {
    return btoa(String.fromCharCode.apply(null, Array.from(data)));
  }
}

// 工具函数：Base64解码
export function fromBase64(data: string): string {
  return atob(data);
}

// 工具函数：Base64解码为Uint8Array
export function fromBase64ToUint8Array(data: string): Uint8Array {
  const binaryString = atob(data);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// 工具函数：十六进制编码
export function toHex(data: string | Uint8Array): string {
  if (typeof data === 'string') {
    return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(data));
  } else {
    return Array.from(data).map(b => b.toString(16).padStart(2, '0')).join('');
  }
}

// 工具函数：十六进制解码
export function fromHex(data: string): string {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Hex.parse(data));
}

// 工具函数：十六进制解码为Uint8Array
export function fromHexToUint8Array(data: string): Uint8Array {
  const bytes = new Uint8Array(data.length / 2);
  for (let i = 0; i < data.length; i += 2) {
    bytes[i / 2] = parseInt(data.substr(i, 2), 16);
  }
  return bytes;
}

// 工具函数：字符串转Uint8Array
export function stringToUint8Array(str: string): Uint8Array {
  return new Uint8Array(str.split('').map(char => char.charCodeAt(0)));
}

// 工具函数：Uint8Array转字符串
export function uint8ArrayToString(uint8Array: Uint8Array): string {
  return String.fromCharCode.apply(null, Array.from(uint8Array));
} 
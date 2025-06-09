import { RSAKeyGenerator, RsaKit } from "./rsa";


const rsaKeyGenerator = new RSAKeyGenerator();

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqBUaFSWEPYXp4fVa73uc
OBI65QSKP0rQh00lYlKcHdHek81mBat/ZVTVCFxl0NXlkRGUEhnALVdyw9sV8FR5
Njz8yVU+bW2qSuZKBvswliFKUavNXv1YSegJ7WjeuaE1zzEZh/h1cyURRGfAEIFH
Z8c5190AsccuU7edUrxpqkbxWCiPz7OsyUGiv1kE1EvERfI7IHZdtPzG0wQ0JuLx
5oRMx321xC/tTUeJ0SHSSyDcFNgmpC6Ay7EB33lj1egIIuPRajaEa96yeGtXMDkl
Ofb9BIo4aYqsp/pLEr/Puy8zX6+cvrNClktOyz3KEgc5AxsoyvsVSD9Pbfu3wRDl
gwIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAqBUaFSWEPYXp4fVa73ucOBI65QSKP0rQh00lYlKcHdHek81m
Bat/ZVTVCFxl0NXlkRGUEhnALVdyw9sV8FR5Njz8yVU+bW2qSuZKBvswliFKUavN
Xv1YSegJ7WjeuaE1zzEZh/h1cyURRGfAEIFHZ8c5190AsccuU7edUrxpqkbxWCiP
z7OsyUGiv1kE1EvERfI7IHZdtPzG0wQ0JuLx5oRMx321xC/tTUeJ0SHSSyDcFNgm
pC6Ay7EB33lj1egIIuPRajaEa96yeGtXMDklOfb9BIo4aYqsp/pLEr/Puy8zX6+c
vrNClktOyz3KEgc5AxsoyvsVSD9Pbfu3wRDlgwIDAQABAoIBACOo1m/GFdg3oPcf
ZruILgx3Uadk3y+uX69U3qmNfTGWZPJWkV6Ck/Sbmta7Q56awqmUYSW18N+tvdtv
j6f9Q/oN1lOgki4FJivdz7bLc/Nl/K53FIsilKiZYgHMTfR0D0Z11ETUoZZcNt2c
ZVMbGlsaGVuCt7L/3wRD4Ey9TG2jZ1zmNi0U3bdaKsOx+k6daQ2MuHOD97Kvi2+n
EwDBGzPNFP8ru46u9L32/8qbXh6widyAGAoEbHZrVrYniCSK6sfrNtMdq0l27Vm7
tLI4hPR8mef11EnZZQNgofb9ByVJPA7peIvx3a0808l0NcEIOp40IIn2Pb2/v/yx
4yOmUwECgYEAx/hjsuRzbsnYzG3eFyPKMhE+ffw9lg3W/z3PbSdp9/kOy7w/48SW
SFKoBrBbL4CHVrHTK2ToFUhW7XjtuSEiRdC9v41ryIwxYHnTZeK2GJrOSBNoaggO
+Z34BRO6It1q2kaKd/VfHcZCCaLAK2dZ4n1tpTc3EJ14VvHym6svrPsCgYEA1y1w
QjKiJHAXyRncxQZif3He7uxQutzsqdgIPsCmH4uAiVyJCcdvKQM+ogfTJIVlOI2N
SzCcUkXu5rYeHDI2TjMbMWoc9E3QQE6OP/8zrA0DUsJMAHeextYOjENizO8kEMX3
7xIyFrBST1psjE42ZzIJcx2CeiK43zcRERVpMxkCgYEAqYcivp5+XgYxDd520hc9
a4TC/fvCGlxRUMIN//PSGq/Co2ZMo8Qdw+KPIFyScYr9Mbo/1CIPvzs8tsY2gyRb
8eQteR9jqPlxQuEFHvM8fU+AYgpSEtISH/yUL3mx66za0YHMEjarFIrnoVOgpytP
QHwlYFOXEzbstokXrHFMUdECgYAU4bv7MJ67moU0ZuYd2LjGVW6lERnkiHwPH3/t
VxTICum2atyBrnEDMeVqJAhBixB/pH0JxvXkphTBHvtdESJkBGGnMf0NWF/VXcpA
O6vwDnM8HM7zXKhz82IGCqQT70E4v32IHePuf739JXFTTGPLL/fqy/pVj/kQ8G8f
kUxcQQKBgC+J+25qrK2OXRQrYzU22XefOMzYb6ISZy+/kAKUUazB+ddqN0+biONQ
oXhhwnP8A/RxGIgKA7UYPIhqqGWxRuC6Ih/N4f+7iZNkQX1ZFVgVdXsBILH6Og5J
nOi2nFtpPIh1/XCQRFk6tblXvlmfm7DLlc6PmvbQmwJEgM71SIEp
-----END RSA PRIVATE KEY-----`;




const keyPair = rsaKeyGenerator.loadKeyPairFromText(publicKey, privateKey);



const rsaKit = new RsaKit(keyPair);


export function testRsaEncrypt() {
  const encrypted = rsaKit.publicEncrypt('hello world 123');

  console.log("encrypted:", encrypted);

  const decrypted = rsaKit.privateDecrypt(encrypted);

  console.log("decrypted:", decrypted);
}
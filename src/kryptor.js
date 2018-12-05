#!/bin/env node
const program = require('commander')
const { generateKeysCmd, encryptCmd, decryptCmd } = require('./commands.js')

// Program description
program
    .version('1.0.0', '-v, --version')
    .description('A CLI to generate RSA keys, encrypt and decrypt.')

// Add generate command to the program
program
    .command('generate')
    .alias('g')
    .option('-d, --destFolder <dest>', '[Required] Destination folder.')
    .action(cmd => generateKeysCmd(cmd.destFolder))

// Add public encrypt command to the program
program
    .command('public-encrypt')
    .alias('pcet')
    .option('-p, --publicKey <path>', '[Required] Path of the public key.')
    .option('-f, --fileToEncrypt <path>', '[Required] Path of the file to encrypt.')
    .option('-d, --destination <path>', '[Required] Path of the encrypted file.')
    .action(cmd => encryptCmd(cmd.publicKey, cmd.fileToEncrypt, cmd.destination))

// Add private decrypt command to the program
program
    .command('private-decrypt')
    .alias('pedt')
    .option('-p, --privateKey <path>', '[Required] Path of the private key.')
    .option('-f, --fileToDecrypt <path>', '[Required] Path of the encrypted file.')
    .action(cmd => decryptCmd(cmd.privateKey, cmd.fileToDecrypt))

// Add private encrypt command to the program
program
    .command('private-encrypt')
    .alias('peet')
    .option('-p, --privateKey <path>', '[Required] Path of the private key.')
    .option('-f, --fileToEncrypt <path>', '[Required] Path of the file to encrypt.')
    .option('-d, --destination <path>', '[Required] Path of the encrypted file.')
    .action(cmd => encryptCmd(cmd.privateKey, cmd.fileToEncrypt, cmd.destination, false))

// Add public decrypt command to the program
program
    .command('public-decrypt')
    .alias('pcdt')
    .option('-p, --publicKey <path>', '[Required] Path of the public key.')
    .option('-f, --fileToDecrypt <path>', '[Required] Path of the encrypted file.')
    .action(cmd => decryptCmd(cmd.publicKey, cmd.fileToDecrypt, false))

program.parse(process.argv)

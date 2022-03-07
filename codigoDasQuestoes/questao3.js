import promptSync from 'prompt-sync';
import { formatString } from '../formatString.js';

const prompt = promptSync();

const message = prompt('Digite aqui a mensagem que será criptografada: ')

console.log(formatString(message))


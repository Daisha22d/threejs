import { proxy } from 'valtio';

const state = proxy({
intro: true,
color: '#EFBD48',
isLogoTexture: true,
isFullTexture: false,
logoDecal: '../src/assets/logo.png',
fullDecal: '../src/assets/logo.png',
});

export default state;
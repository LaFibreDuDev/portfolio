import './styles/reset.css'
import './styles/style.css'
import './styles/media.css'
import './styles/snow.css'
import './snow.ts'

import { createIcons, icons } from 'lucide';

createIcons({
  icons
});

const mobileBtnElement = document.querySelector("button[data-burger-button]");
const menuDivElement = document.querySelector("div[data-mobile-menu]");

if(menuDivElement && mobileBtnElement) {
    mobileBtnElement?.addEventListener('click', () => {
        menuDivElement.classList.toggle('open')
        mobileBtnElement.classList.toggle('open')
    })
}
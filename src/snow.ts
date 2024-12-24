const snowContainer = document.getElementById('snow-container')!;

function createSnowflake(): void {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '&#10052;'; // ❄

    const size = Math.random() * 10 + 5; // Taille entre 5px et 15px
    const blur = Math.random() * 3;      // Floutage aléatoire entre 0px et 3px
    const left = Math.random() * 90;   // Position horizontale aléatoire
    const duration = Math.random() * 5 + 5; // Durée entre 5s et 10s

    snowflake.style.fontSize = `${size}px`;
    snowflake.style.filter = `blur(${blur}px)`;
    snowflake.style.left = `${left}vw`;
    snowflake.style.animationDuration = `${duration}s`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
      }, duration * 800);
}

setInterval(createSnowflake, 250);
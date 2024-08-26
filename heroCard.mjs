export function createHeroCard(hero) {
    const heroCard = document.createElement('div');
    heroCard.className = 'hero-card';

    const heroImage = document.createElement('img');
    heroImage.src = `${hero.thumbnail.path}/standard_large.${hero.thumbnail.extension}`;
    heroImage.alt = hero.name;

    const heroName = document.createElement('h3');
    heroName.textContent = hero.name;

    const heroDescription = document.createElement('p');
    heroDescription.textContent = hero.description || 'No description available.';

    // Adding biography, powers, strengths, and weaknesses
    const heroBio = document.createElement('p');
    heroBio.textContent = `Biography: ${hero.biography || 'No biography available.'}`;

    const heroPowers = document.createElement('p');
    heroPowers.textContent = `Powers: ${hero.powers ? hero.powers.join(', ') : 'No powers available.'}`;

    const heroStrengths = document.createElement('p');
    heroStrengths.textContent = `Strengths: ${hero.strengths ? hero.strengths.join(', ') : 'No strengths available.'}`;

    const heroWeaknesses = document.createElement('p');
    heroWeaknesses.textContent = `Weaknesses: ${hero.weaknesses ? hero.weaknesses.join(', ') : 'No weaknesses available.'}`;

    heroCard.appendChild(heroImage);
    heroCard.appendChild(heroName);
    heroCard.appendChild(heroDescription);
    heroCard.appendChild(heroBio);
    heroCard.appendChild(heroPowers);
    heroCard.appendChild(heroStrengths);
    heroCard.appendChild(heroWeaknesses);

    return heroCard;
}

import { fetchHeroes } from './modules/api.mjs';
import { createHeroCard } from './modules/heroCard.mjs';

// Import hero modules
import { thor } from './modules/thor.mjs';
import { ironMan } from './modules/ironMan.mjs';
import { spiderMan } from './modules/spiderMan.mjs';
import { blackWidow } from './modules/blackWidow.mjs';
import { hulk } from './modules/hulk.mjs';
import { captainAmerica } from './modules/captainAmerica.mjs';
import { blackPanther } from './modules/blackPanther.mjs';
import { doctorStrange } from './modules/doctorStrange.mjs';
import { antMan } from './modules/antMan.mjs';
import { scarletWitch } from './modules/scarletWitch.mjs';

async function displayHeroes() {
    const heroesFromAPI = await fetchHeroes();
    const heroes = [
        thor,
        ironMan,
        spiderMan,
        blackWidow,
        hulk,
        captainAmerica,
        blackPanther,
        doctorStrange,
        antMan,
        scarletWitch
    ];

    // Ensure that Thor is included and the top 10 heroes are selected
    // if (!heroesFromAPI.find(hero => hero.name.toLowerCase() === 'thor')) {
    //     heroes.push(thor);
    // }

    const container = document.getElementById('heroes-container');
    container.innerHTML = 

    await heroes.forEach(hero => {
        const heroCard = createHeroCard(hero);
        container.appendChild(heroCard);
    });
}

const heroes = [
    {
        name: "Ant-Man",
        picture: "https://j.gifs.com/KzqQ2b.gif",
        powers: "Ability to shrink and grow, superhuman strength, control over ants",
        weaknesses: "Limited visibility when shrunk, physical vulnerability",
        bio: "Scott Lang becomes Ant-Man and uses his powers to fight crime while balancing family life."
    },
    {
        name: "Black Panther",
        picture: "https://i.pinimg.com/originals/34/75/11/347511c067c5d2b61d9d752ddf1fbd24.gif",
        powers: "Enhanced strength, speed, agility, vibranium suit",
        weaknesses: "Vulnerable to those bypassing suit's vibranium properties, heavy responsibility as king",
        bio: "T'Challa, the king of Wakanda, protects his nation and the world with advanced technology and combat skills."
    },
    {
        name: "Black Widow",
        picture: "https://allears.net/wp-content/uploads/2020/11/black-widow-gif-1.gif",
        powers: "Expert in espionage, combat, and marksmanship, enhanced conditioning",
        weaknesses: "No superhuman powers, haunted by past",
        bio: "Natasha Romanoff, a former KGB assassin, becomes a key agent of S.H.I.E.L.D. and a member of the Avengers."
    },
    {
        name: "Captain America",
        picture: "https://media.tenor.com/phzTPEhdWXMAAAAM/avengers-captain-america.gif",
        powers: "Enhanced abilities from the super-soldier serum, expert tactician, unbreakable shield",
        weaknesses: "Physical limitations without the serum, struggles with modern times",
        bio: "Steve Rogers becomes Captain America during World War II, symbolizing justice and perseverance."
    },
    {
        name: "Doctor Strange",
        picture: "https://i.pinimg.com/originals/76/04/48/760448c0de6bed1e9b810b006d264561.gif",
        powers: "Mastery of magic, reality manipulation, interdimensional travel",
        weaknesses: "Reliant on mystical artifacts, vulnerable to magical threats",
        bio: "Stephen Strange, a former surgeon, becomes the Sorcerer Supreme and defends Earth from mystical threats."
    },
    {
        name: "Hulk",
        picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65da63d0-dafc-49fd-8df3-35f6cd380783/d54mxkm-5b21fef0-4088-4566-a7fd-58b0dabcd7cf.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1ZGE2M2QwLWRhZmMtNDlmZC04ZGYzLTM1ZjZjZDM4MDc4M1wvZDU0bXhrbS01YjIxZmVmMC00MDg4LTQ1NjYtYTdmZC01OGIwZGFiY2Q3Y2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pCIWUDh5vNOW3elopygE8lAe_TzN16E4eoooDaXDfCw",
        powers: "Superhuman strength and durability, regenerative healing factor",
        weaknesses: "Difficulty controlling rage, vulnerable to mental manipulation",
        bio: "Bruce Banner transforms into the Hulk with immense strength, struggling to control his dual identity."
    },
    {
        name: "Iron Man",
        picture: "https://comicvine.gamespot.com/a/uploads/original/11128/111284868/6480908-iron%20man%20gif%20%20%2814%29.gif",
        powers: "Genius intellect, advanced armor suit, expert engineer",
        weaknesses: "Dependency on arc reactor, physical limitations of armor",
        bio: "Tony Stark becomes Iron Man using his technological genius to fight evil and protect the world."
    },
    {
        name: "Scarlet Witch",
        picture: "https://media.tenor.com/7NC9_FUGZfAAAAAM/scarlet-witch-power.gif",
        powers: "Reality manipulation, chaos magic, telekinesis",
        weaknesses: "Emotional instability, vulnerability to magical attacks",
        bio: "Wanda Maximoff, with reality-warping powers, navigates personal tragedy and cosmic conflicts."
    },
    {
        name: "Spider-Man",
        picture: "https://media4.giphy.com/media/hT1mtXl54Acx3yR1XW/200w.gif?cid=82a1493bss04cio09ypuudsutv6aprrnqmm6lti6py3prfbm&ep=v1_gifs_related&rid=200w.gif&ct=g",
        powers: "Wall-crawling, super agility, spider-sense, web-shooting",
        weaknesses: "Youth and inexperience, balancing personal life with hero duties",
        bio: "Peter Parker gains spider-like abilities and becomes Spider-Man, learning that with great power comes great responsibility."
    },
    {
        name: "Thor",
        picture: "https://media.tenor.com/sBkevYxic08AAAAM/thor-thor-infinity-war.gif",
        powers: "God-like strength, lightning manipulation, wields Mjolnir",
        weaknesses: "Overconfidence, vulnerable to powerful cosmic threats",
        bio: "Thor, the Norse God of Thunder, protects Asgard and Earth with divine strength and personal growth."
    }
];

let currentIndex = 0;

function updateHeroCard() {
    const heroCard = document.getElementById('hero-card');
    const hero = heroes[currentIndex];
    
    heroCard.innerHTML = `
        <img src="${hero.picture}" alt="${hero.name}">
        <div class="text">
            <h2>${hero.name}</h2>
            <p><strong>Powers/Abilities:</strong> ${hero.powers}</p>
            <p><strong>Weaknesses:</strong> ${hero.weaknesses}</p>
            <p><strong>Bio:</strong> ${hero.bio}</p>
        </div>
    `;
}

function nextHero() {
    currentIndex = (currentIndex + 1) % heroes.length;
    updateHeroCard();
}

function prevHero() {
    currentIndex = (currentIndex - 1 + heroes.length) % heroes.length;
    updateHeroCard();
}



updateHeroCard();
 
updateCarousel();

displayHeroes();


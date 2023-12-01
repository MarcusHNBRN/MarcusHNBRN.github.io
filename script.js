document.addEventListener('DOMContentLoaded', function () {
    const cardIds = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12'];
    let fetchInProgress = false;

    async function generateRandomCard(cardId) {
        if (!fetchInProgress) {
            fetchInProgress = true;

            try {
                const response = await fetch('https://api.scryfall.com/cards/random');
                const data = await response.json();

                const cardElement = document.getElementById(cardId);
                const cardImage = document.createElement('img');
                cardImage.src = data.image_uris.normal;
                cardImage.alt = data.name;

                cardElement.innerHTML = '';
                cardElement.appendChild(cardImage);
            } catch (error) {
                console.error('Error fetching random Magic card:', error);
            } finally {
                fetchInProgress = false;
            }
        }
    }

    const generateButton = document.getElementById('cardbutton');
    generateButton.addEventListener('click', async function () {
        for (const cardId of cardIds) {
            await generateRandomCard(cardId);
        }
    });
});
async function getRandomCard() {
  try {
    const response = await fetch("https://api.scryfall.com/cards/random");
    const data = await response.json();

    document.getElementById("cardName").textContent = "Card Name: " + data.name;
    document.getElementById("cardType").textContent =
      "Card Type: " + data.type_line;
    document.getElementById("manaCost").textContent =
      "Mana Cost: " + data.mana_cost;
    document.getElementById("colors").textContent =
      "Colors: " + (data.colors ? data.colors.join(", ") : "Colorless");
    document.getElementById("set").textContent = "Set: " + data.set;
    document.getElementById("rarity").textContent = "Rarity: " + data.rarity;
    document.getElementById("cardText").textContent =
      "Card Text: " + data.oracle_text;
    document.getElementById("powerToughness").textContent =
      "Power/Toughness: " +
      (data.power && data.toughness
        ? data.power + "/" + data.toughness
        : "N/A");
    document.getElementById("cardImage").src = data.image_uris.normal;
  } catch (error) {
    console.error("Error fetching random Magic card:", error);
  }
}

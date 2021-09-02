const montant1_1 = document.getElementById("montant1_1");
const montant1_2 = document.getElementById("montant1_2");
const montant2_1 = document.getElementById("montant2_1");
const montant2_2 = document.getElementById("montant2_2");
const montant3_1 = document.getElementById("montant3_1");
const montant3_2 = document.getElementById("montant3_2");
const montant4_1 = document.getElementById("montant4_1");
const montant4_2 = document.getElementById("montant4_2");
const montant5_1 = document.getElementById("montant5_1");
const montant5_2 = document.getElementById("montant5_2");
const montant6_1 = document.getElementById("montant6_1");
const montant6_2 = document.getElementById("montant6_2");
const montant7_1 = document.getElementById("montant7_1");
const montant7_2 = document.getElementById("montant7_2");
const montant8_1 = document.getElementById("montant8_1");
const montant8_2 = document.getElementById("montant8_2");
const montant9_1 = document.getElementById("montant9_1");
const montant9_2 = document.getElementById("montant9_2");
const montant10_1 = document.getElementById("montant10_1");
const montant10_2 = document.getElementById("montant10_2");
const total_plus = document.getElementById("total_plus");
const total_moins = document.getElementById("total_moins");
const budget = document.getElementById("budget");

// Déclaration des écouteurs
montant1_1.addEventListener("keyup", calcul);
montant1_2.addEventListener("keyup", calcul);
montant2_1.addEventListener("keyup", calcul);
montant2_2.addEventListener("keyup", calcul);
montant3_1.addEventListener("keyup", calcul);
montant3_2.addEventListener("keyup", calcul);
montant4_1.addEventListener("keyup", calcul);
montant4_2.addEventListener("keyup", calcul);
montant5_1.addEventListener("keyup", calcul);
montant5_2.addEventListener("keyup", calcul);
montant6_1.addEventListener("keyup", calcul);
montant6_2.addEventListener("keyup", calcul);
montant7_1.addEventListener("keyup", calcul);
montant7_2.addEventListener("keyup", calcul);
montant8_1.addEventListener("keyup", calcul);
montant8_2.addEventListener("keyup", calcul);
montant9_1.addEventListener("keyup", calcul);
montant9_2.addEventListener("keyup", calcul);
montant10_1.addEventListener("keyup", calcul);
montant10_2.addEventListener("keyup", calcul);

function calcul() {
    // Ligne 1
    if (Number(montant1_1.value) > 0) {
        montant1_2.disabled = true;
    }

    if (Number(montant1_1.value) == 0) {
        montant1_2.disabled = false;
    }

    if (Number(montant1_2.value) > 0) {
        montant1_1.disabled = true;
    }

    if (Number(montant1_2.value) == 0) {
        montant1_1.disabled = false;
    }

    // Ligne 2
    if (Number(montant2_1.value) > 0) {
        montant2_2.disabled = true;
    }

    if (Number(montant2_1.value) == 0) {
        montant2_2.disabled = false;
    }

    if (Number(montant2_2.value) > 0) {
        montant2_1.disabled = true;
    }

    if (Number(montant2_2.value) == 0) {
        montant2_1.disabled = false;
    }

    // Ligne 3
    if (Number(montant3_1.value) > 0) {
        montant3_2.disabled = true;
    }

    if (Number(montant3_1.value) == 0) {
        montant3_2.disabled = false;
    }

    if (Number(montant3_2.value) > 0) {
        montant3_1.disabled = true;
    }

    if (Number(montant3_2.value) == 0) {
        montant3_1.disabled = false;
    }

    // Ligne 4
    if (Number(montant4_1.value) > 0) {
        montant4_2.disabled = true;
    }

    if (Number(montant4_1.value) == 0) {
        montant4_2.disabled = false;
    }

    if (Number(montant4_2.value) > 0) {
        montant4_1.disabled = true;
    }

    if (Number(montant4_2.value) == 0) {
        montant4_1.disabled = false;
    }

    // Ligne 5
    if (Number(montant5_1.value) > 0) {
        montant5_2.disabled = true;
    }

    if (Number(montant5_1.value) == 0) {
        montant5_2.disabled = false;
    }

    if (Number(montant5_2.value) > 0) {
        montant5_1.disabled = true;
    }

    if (Number(montant5_2.value) == 0) {
        montant5_1.disabled = false;
    }

    // Ligne 6
    if (Number(montant6_1.value) > 0) {
        montant6_2.disabled = true;
    }

    if (Number(montant6_1.value) == 0) {
        montant6_2.disabled = false;
    }

    if (Number(montant6_2.value) > 0) {
        montant6_1.disabled = true;
    }

    if (Number(montant6_2.value) == 0) {
        montant6_1.disabled = false;
    }

    // Ligne 7
    if (Number(montant7_1.value) > 0) {
        montant7_2.disabled = true;
    }

    if (Number(montant7_1.value) == 0) {
        montant7_2.disabled = false;
    }

    if (Number(montant7_2.value) > 0) {
        montant7_1.disabled = true;
    }

    if (Number(montant7_2.value) == 0) {
        montant7_1.disabled = false;
    }

    // Ligne 8
    if (Number(montant8_1.value) > 0) {
        montant8_2.disabled = true;
    }

    if (Number(montant8_1.value) == 0) {
        montant8_2.disabled = false;
    }

    if (Number(montant8_2.value) > 0) {
        montant8_1.disabled = true;
    }

    if (Number(montant8_2.value) == 0) {
        montant8_1.disabled = false;
    }


    // Ligne 9
    if (Number(montant9_1.value) > 0) {
        montant9_2.disabled = true;
    }

    if (Number(montant9_1.value) == 0) {
        montant9_2.disabled = false;
    }

    if (Number(montant9_2.value) > 0) {
        montant9_1.disabled = true;
    }

    if (Number(montant9_2.value) == 0) {
        montant9_1.disabled = false;
    }

    // Ligne 10
    if (Number(montant10_1.value) > 0) {
        montant10_2.disabled = true;
    }

    if (Number(montant10_1.value) == 0) {
        montant10_2.disabled = false;
    }

    if (Number(montant10_2.value) > 0) {
        montant10_1.disabled = true;
    }

    if (Number(montant10_2.value) == 0) {
        montant10_1.disabled = false;
    }

    // Calcul du total des colonnes
    total_plus.value = Number(montant1_1.value) + Number(montant2_1.value) + Number(montant3_1.value) + Number(montant4_1.value) + Number(montant5_1.value) + Number(montant6_1.value) + Number(montant7_1.value) + Number(montant8_1.value) + Number(montant9_1.value) + Number(montant10_1.value);
    total_moins.value = Number(montant1_2.value) + Number(montant2_2.value) + Number(montant3_2.value) + Number(montant4_2.value) + Number(montant5_2.value) + Number(montant6_2.value) + Number(montant7_2.value) + Number(montant8_2.value) + Number(montant9_2.value) + Number(montant10_2.value);

    // Calcul du budget restant
    budget.value = total_plus.value - total_moins.value;

    if (budget.value >= 0) {
        budget.style.color = "green";
    }
    else {
        budget.style.color = "red";
    }
}
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Gestionnaire de budget">
    <meta name="author" content="Tomy SOTTY & Julien Michot" />
    <link rel="stylesheet" href="public/css/style.css" />
    <link rel="icon" href="public/images/favico.svg" />
    <script src="https://kit.fontawesome.com/99371baa88.js" crossorigin="anonymous"></script>
    <title>Gestion Budget</title>
</head>

<body>
    <section id="tableau">

        <h1 id="titre_tb">Gestionnaire de Budget</h1>
        <div class="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
                <thead>
                    <tr>
                        <th>Libellés</th>
                        <th class="nb">Revenus</th>
                        <th class="nb">Dépenses</th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant1_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant1_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant2_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant2_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant3_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant3_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant4_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant4_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant5_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant5_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant6_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant6_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant7_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant7_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant8_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant8_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant9_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant9_2" placeholder="   €"></td>
                    </tr>
                    <tr>
                        <td><input type="text" class="libelle" placeholder="..."></td>
                        <td>+<input type="number" class="nb"  id="montant10_1"placeholder="   €"></td>
                        <td>-<input type="number" class="nb" id="montant10_2" placeholder="   €"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <div class="container_resultat">
        <h3 id="titre_resultat">Résultat</h3>
        <div class="l-r">
            <div class="left">
                Revenus
            </div>
            <div class="right">
                Dépenses
            </div>
        </div>
        <div class="total">
            <td><input type="number" class="nb"  id="total_plus"placeholder="   €" readonly></td>
            <td><input type="number" class="nb" id="total_moins" placeholder="   €" readonly></td>
        </div>
        <div class="budget">Budget restant</div>
        <div class="restant">
            <td><input type="number" class="nb nb3" id="budget" readonly></td>
        </div>

    </div>


    <!-- <div class="container_add">
        <h3 id="titre_add">Ajouter un libellé</h3>

        <div class="input Act">
            <label for="act">Libelé</label>
            <input type="text" id="act" placeholder="Nom de l'intitulé">
        </div>

        <div class="input number Rev">
            <label for="rev">Revenu</label>
            <input type="number" name="pseudo" id="rev">
        </div>

        <div class="input number Rev">
            <label for="dep">Dépense</label>
            <input type="number" name="pseudo" id="dep" >
        </div>

    </div> -->

    <script src="public/js/gestion.js"></script>
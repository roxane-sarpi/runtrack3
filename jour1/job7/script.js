function jourtravaille(date) {
    // Récupération du jour, du mois (1–12) et de l’année
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // getMonth() renvoie 0–11
    const annee = date.getFullYear();

    // Fonction  pour formater la date en "YYYY-MM-DD"
    function formatDateKey(d) {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }


    const joursFeries2020 = new Set([
        "2020-01-01", // Jour de l'an
        "2020-04-13", // Lundi de Pâques
        "2020-05-01", // Fête du Travail
        "2020-05-08", // Victoire 1945
        "2020-05-21", // Ascension
        "2020-06-01", // Lundi de Pentecôte
        "2020-07-14", // Fête nationale
        "2020-08-15", // Assomption
        "2020-11-01", // Toussaint
        "2020-11-11", // Armistice 1918
        "2020-12-25"  // Noël
    ]);

    const cle = formatDateKey(date);
    const jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi

    if (joursFeries2020.has(cle)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    } else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}

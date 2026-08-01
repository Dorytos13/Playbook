/**
 * Source unique des outils du playbook.
 *
 * Chaque outil n'est décrit qu'ici. Les pages de la méthode l'affichent dans
 * leur carrousel, la page Outils les liste tous : les deux lisent ce fichier.
 * Pour changer un lien Notion, un PDF ou un intitulé, c'est le seul endroit
 * à modifier.
 *
 *   cle      identifiant interne, utilisé pour référencer l'outil
 *   nom      intitulé affiché partout
 *   desc     description courte, affichée sous le nom dans le carrousel
 *   resume   description longue, affichée sur la page Outils
 *   quand    moment d'emploi, affiché sur la page Outils
 *   numero   numéro de l'étape d'où provient l'outil
 *   etape    nom de cette étape
 *   route    lien vers la page de cette étape
 *   notion   page publique à dupliquer
 *   fichier  PDF servi depuis public/gabarits/
 */

export const outils = [
  {
    cle: 'guide-entretien',
    nom: "Guide d'entretien",
    desc: "Bases d'un guide d'entretien semi-directif, à compléter selon le contexte",
    resume: "Un canevas à remplir selon l'entreprise. Elle donne le déroulé d'un entretien : comment le démarrer, comment ranger les questions par thème, où noter les réponses et comment le terminer. Les questions elles-mêmes, c'est vous qui les écrivez.",
    quand: "Avant l'audit",
    numero: '02',
    etape: 'Diagnostiquer',
    route: '/diagnostic',
    notion: 'https://outilsplaybook.notion.site/guide-d-entretien',
    fichier: '/gabarits/guide-entretien.pdf',
  },
  {
    cle: 'audit-ecosysteme',
    nom: "Audit de l'écosystème digital",
    desc: 'Grille de relevé, canal par canal',
    resume: "Une checklist canal par canal : référencement, site internet, fiche Google et réseaux sociaux. Pour chacun, les points minimaux à vérifier sont listés.",
    quand: 'Après les entretiens',
    numero: '02',
    etape: 'Diagnostiquer',
    route: '/diagnostic',
    notion: 'https://outilsplaybook.notion.site/audit-ecosysteme-digital',
    fichier: '/gabarits/audit-ecosysteme-digital.pdf',
  },
  {
    cle: 'benchmark-concurrentiel',
    nom: 'Benchmark concurrentiel',
    desc: 'Grille à critères et échelle de notation remplissable concurrent par concurrent',
    resume: "Une grille d'exemple bâtie sur huit critères notés de 1 à 10. Chaque note est décrite palier par palier, ce qui dit précisément ce que vaut un 3 ou un 8. Le gabarit se remplit ensuite concurrent par concurrent.",
    quand: 'En fin de diagnostic',
    numero: '02',
    etape: 'Diagnostiquer',
    route: '/diagnostic',
    notion: 'https://outilsplaybook.notion.site/373619ce562b80f4a734ef3fa1161685',
    fichier: '/gabarits/benchmark-concurrentiel.pdf',
  },
  {
    cle: 'matrice-priorisation',
    nom: 'Matrice de priorisation',
    desc: 'Urgence × importance, avec les quatre issues',
    resume: "La matrice urgence/importance à remplir avec les besoins, puis le tableau qui traduit chaque case en décision : cœur du mandat, retenu si le calendrier le permet, délégué avec une recommandation chiffrée, ou écarté. Elle ne décide pas à votre place, elle donne au mandant de quoi trancher avec vous.",
    quand: 'Une fois les besoins formulés',
    numero: '03',
    etape: 'Orienter le projet',
    route: '/orienter',
    notion: 'https://outilsplaybook.notion.site/matrice-priorisation',
    fichier: '/gabarits/matrice-priorisation.pdf',
  },
  {
    cle: 'benchmark-solutions',
    nom: 'Benchmark des solutions',
    desc: 'Grille comparative, critères pondérés et contraintes éliminatoires',
    resume: "Une section par besoin, à dupliquer autant de fois qu'il en faut. Chacune contient les critères de comparaison, le tableau des solutions candidates, la place pour noter les tests, et la décision finale avec sa justification.",
    quand: 'Avant de retenir un outil',
    numero: '04',
    etape: 'Évaluer les solutions',
    route: '/evaluer',
    notion: 'https://outilsplaybook.notion.site/benchmark-solutions',
    fichier: '/gabarits/benchmark-solutions.pdf',
  },
  {
    cle: 'diagramme-gantt',
    nom: 'Diagramme de Gantt',
    desc: "Frise du projet : phases, durées, dépendances et moments où l'entreprise est attendue",
    resume: "Un tableau de tâches à remplir : qui fait quoi, quand, pendant combien de temps et après quoi. Une liste de jalons vient compléter le tout. Dans Notion, la vue Chronologie transforme ce tableau en vrai diagramme.",
    quand: 'Au moment de planifier',
    numero: '05',
    etape: 'Organiser le projet',
    route: '/organiser',
    notion: 'https://outilsplaybook.notion.site/diagramme-de-gantt',
    fichier: '/gabarits/diagramme-de-gantt.pdf',
  },
  {
    cle: 'atelier-accompagnement',
    nom: "Atelier d'accompagnement",
    desc: "Guide d'animation : objectif, déroulé, production attendue et relevé des décisions",
    resume: "Tout le déroulé d'un atelier : le contexte et les pré-requis, les objectifs et ce que les participants sauront faire à la fin, puis des blocs qui alternent démonstration et mise en pratique, un exercice final sur un cas réaliste et un débriefing. Il se termine par deux grilles d'auto-évaluation, celle du participant et celle de l'animatrice.",
    quand: 'À chaque fin de phase',
    numero: '05',
    etape: 'Organiser le projet',
    route: '/organiser',
    notion: 'https://outilsplaybook.notion.site/guide-atelier-accompagnement',
    fichier: '/gabarits/guide-atelier-accompagnement.pdf',
  },
  {
    cle: 'journal-de-bord',
    nom: 'Journal de bord',
    desc: 'Suivi continu : décisions, arbitrages, écarts et points bloquants',
    resume: "Un modèle de base qui pose la structure du journal, à répliquer chaque jour et à adapter selon vos besoins. On y note les objectifs, ce qui a été fait, les blocages rencontrés et les pistes pour les lever, le temps passé et les documents liés.",
    quand: 'Tout au long du projet',
    numero: '05',
    etape: 'Organiser le projet',
    route: '/organiser',
    notion: 'https://outilsplaybook.notion.site/journal-de-bord',
    fichier: '/gabarits/journal-de-bord.pdf',
  },
]

/**
 * Accès par clé, pour les pages de la méthode : outil['journal-de-bord'].
 * Une clé inconnue lève une erreur au chargement plutôt que d'afficher
 * une carte vide.
 */
export const outil = new Proxy(
  Object.fromEntries(outils.map((o) => [o.cle, o])),
  {
    get(cible, cle) {
      if (!(cle in cible)) throw new Error(`Outil inconnu : ${String(cle)}`)
      return cible[cle]
    },
  }
)

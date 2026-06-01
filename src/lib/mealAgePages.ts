export type MealAgeFaqItem = {
  question: string;
  answer: string;
};

export type MealAgePage = {
  ageMonths: number;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
  breakfastIdeas: string[];
  lunchIdeas: string[];
  dinnerIdeas: string[];
  snackIdeas: string[];
  foodsToAvoid: string[];
  faqs: MealAgeFaqItem[];
};

const mealDisclaimer =
  "Recomandările de pe BebeCrește.ro sunt orientative și nu înlocuiesc sfatul medicului pediatru, al unui nutriționist sau al unui specialist. Adaptează mesele la copilul tău, la istoricul de alergii și la recomandările primite de la medic.";

const mealAgePages: MealAgePage[] = [
  {
    ageMonths: 12,
    slug: "copil-12-luni",
    seoTitle: "Meniu copil 12 luni | Idei de mese și gustări",
    seoDescription:
      "Idei orientative de meniu pentru copil de 12 luni: mic dejun, prânz, cină, gustări, alimente de evitat și FAQ.",
    title: "Meniu copil 12 luni: idei simple pentru o zi mai clară",
    description:
      "La 12 luni, copilul poate avea zile cu apetit variabil. Aceste exemple te ajută să pornești de la mese mici, moi și ușor de adaptat.",
    breakfastIdeas: [
      "Terci de ovăz cu banană pasată și iaurt simplu.",
      "Omletă bine gătită, tăiată în bucăți mici, cu legume moi.",
      "Pâine prăjită ușor cu avocado pasat sau cremă de brânză simplă.",
    ],
    lunchIdeas: [
      "Supă cremă de legume cu pui bine gătit, mărunțit fin.",
      "Paste mici cu sos de roșii simplu și dovlecel gătit.",
      "Orez moale cu legume și ou bine gătit.",
    ],
    dinnerIdeas: [
      "Cartof dulce copt cu iaurt simplu și bucăți mici de legume.",
      "Mămăligă moale cu brânzică și iaurt.",
      "Supă groasă de legume, adaptată texturii tolerate.",
    ],
    snackIdeas: [
      "Fruct moale: banană, pară coaptă sau măr copt.",
      "Iaurt simplu cu fruct pasat.",
      "Clătite moi din banană și ou, tăiate în fâșii.",
    ],
    foodsToAvoid: [
      "Miere înainte de 1 an sau dacă medicul recomandă prudență suplimentară.",
      "Alimente tari, rotunde sau bucăți mari cu risc de înec.",
      "Sare și zahăr adăugate în exces.",
      "Lapte crud, ou insuficient gătit, carne sau pește insuficient preparate.",
    ],
    faqs: [
      {
        question: "Câte mese are nevoie un copil de 12 luni?",
        answer:
          "Orientativ, mulți copii au 3 mese principale și 1-2 gustări. Ritmul depinde de somn, apetit și recomandările pediatrului.",
      },
      {
        question: "Ce fac dacă refuză o masă?",
        answer:
          "Privește alimentația pe câteva zile, nu pe o singură farfurie. Oferă porții mici și păstrează un aliment familiar la masă.",
      },
      {
        question: "Pot oferi bucăți la 12 luni?",
        answer:
          "Da, dacă textura și dimensiunea sunt potrivite abilităților copilului. Evită alimentele tari, rotunde sau greu de mestecat.",
      },
    ],
  },
  {
    ageMonths: 18,
    slug: "copil-18-luni",
    seoTitle: "Meniu copil 18 luni | Idei de mese pentru toddler",
    seoDescription:
      "Idei orientative de meniu pentru copil de 18 luni: mic dejun, prânz, cină, gustări, alimente de evitat și FAQ.",
    title: "Meniu copil 18 luni: idei practice pentru mese de zi cu zi",
    description:
      "La 18 luni, copilul poate cere mai multă autonomie și poate refuza alimente cunoscute. Mesele simple și predictibile pot reduce presiunea.",
    breakfastIdeas: [
      "Iaurt simplu cu ovăz hidratat și fructe moi.",
      "Ou bine gătit cu pâine și roșie fără coajă, dacă este acceptată.",
      "Clătite mici cu banană, servite cu iaurt simplu.",
    ],
    lunchIdeas: [
      "Chifteluțe moi de curcan cu piure de cartof și legume.",
      "Paste cu sos de legume și brânză rasă fin.",
      "Ciorbă sau supă cu legume moi și carne mărunțită.",
    ],
    dinnerIdeas: [
      "Orez cu legume gătite și pește bine preparat.",
      "Cartof fiert cu brânzică și castravete curățat, tăiat sigur.",
      "Omletă cu legume moi și pâine.",
    ],
    snackIdeas: [
      "Fructe tăiate potrivit vârstei.",
      "Brioșe sărate făcute acasă, cu ou și legume rase.",
      "Iaurt simplu sau chefir potrivit vârstei, dacă este tolerat.",
    ],
    foodsToAvoid: [
      "Nuci întregi, struguri întregi, popcorn și bucăți tari.",
      "Mezeluri, alimente foarte sărate sau ultraprocesate.",
      "Băuturi îndulcite și dulciuri oferite frecvent.",
      "Alimente noi în cantități mari, mai ales dacă există istoric de alergii.",
    ],
    faqs: [
      {
        question: "Este normal să devină mofturos la 18 luni?",
        answer:
          "Da, refuzurile sunt frecvente la vârsta de toddler. Ajută să oferi alegeri limitate și să păstrezi mesele calme.",
      },
      {
        question: "Cât ar trebui să mănânce la o masă?",
        answer:
          "Porțiile pot varia mult. Începe cu cantități mici și mai adaugă dacă cere. Creșterea și starea generală contează mai mult decât o singură masă.",
      },
      {
        question: "Pot repeta aceleași mese?",
        answer:
          "Da. Repetiția poate ajuta copilul să se simtă în siguranță, iar varietatea poate fi introdusă treptat.",
      },
    ],
  },
  {
    ageMonths: 24,
    slug: "copil-24-luni",
    seoTitle: "Meniu copil 24 luni | Idei de mese la 2 ani",
    seoDescription:
      "Idei orientative de meniu pentru copil de 24 luni: mic dejun, prânz, cină, gustări, alimente de evitat și FAQ.",
    title: "Meniu copil 24 luni: idei de mese pentru vârsta de 2 ani",
    description:
      "La 2 ani, mesele pot fi mai apropiate de cele ale familiei, dar textura, sarea, zahărul și porțiile trebuie adaptate copilului.",
    breakfastIdeas: [
      "Terci de ovăz cu măr ras sau fructe moi.",
      "Sandviș mic cu cremă de brânză și legume acceptate.",
      "Omletă cu legume și pâine integrală moale.",
    ],
    lunchIdeas: [
      "Paste cu carne de pui și sos de legume.",
      "Orez cu mazăre, morcov și pește bine gătit.",
      "Supă de pui cu legume și tăiței potriviți vârstei.",
    ],
    dinnerIdeas: [
      "Mămăligă cu brânză și iaurt, lângă legume gătite.",
      "Cartof copt cu ou bine gătit și salată foarte simplă.",
      "Tocăniță blândă de legume cu carne bine gătită.",
    ],
    snackIdeas: [
      "Fructe, iaurt simplu sau pâine cu avocado.",
      "Batoane moi de legume coapte.",
      "Brioșe de casă cu legume sau fructe, fără exces de zahăr.",
    ],
    foodsToAvoid: [
      "Alimente cu risc de înec: nuci întregi, bomboane tari, struguri întregi.",
      "Produse foarte sărate, prăjeli dese și alimente ultraprocesate.",
      "Sucuri și băuturi îndulcite.",
      "Pește cu oase sau preparate insuficient gătite.",
    ],
    faqs: [
      {
        question: "Poate copilul de 2 ani să mănânce din mâncarea familiei?",
        answer:
          "Da, dacă preparatele sunt adaptate: mai puțină sare, texturi sigure și ingrediente potrivite copilului.",
      },
      {
        question: "Ce fac dacă cere mereu aceleași alimente?",
        answer:
          "Păstrează un aliment acceptat și adaugă lângă el cantități mici din altceva. Repetiția calmă ajută mai mult decât presiunea.",
      },
      {
        question: "Câte gustări sunt potrivite?",
        answer:
          "Orientativ, 1-2 gustări pot fi suficiente, în funcție de somn, activitate și mesele principale.",
      },
    ],
  },
  {
    ageMonths: 36,
    slug: "copil-36-luni",
    seoTitle: "Meniu copil 36 luni | Idei de mese la 3 ani",
    seoDescription:
      "Idei orientative de meniu pentru copil de 36 luni: mic dejun, prânz, cină, gustări, alimente de evitat și FAQ.",
    title: "Meniu copil 36 luni: idei de mese pentru vârsta de 3 ani",
    description:
      "La 3 ani, copilul poate participa mai mult la alegeri simple. Mesele rămân mai ușor de gestionat când sunt clare, variate și fără presiune.",
    breakfastIdeas: [
      "Iaurt simplu cu cereale fără mult zahăr și fructe.",
      "Ou bine gătit cu pâine și legume crude tăiate sigur.",
      "Terci sau budincă de ovăz cu fructe.",
    ],
    lunchIdeas: [
      "Mâncare de pui cu legume și orez.",
      "Paste cu sos de roșii, legume și brânză.",
      "Supă sau ciorbă de legume cu carne bine gătită.",
    ],
    dinnerIdeas: [
      "Pește bine gătit cu cartof și legume.",
      "Lipie moale cu hummus, brânză sau legume acceptate.",
      "Omletă, salată simplă și pâine.",
    ],
    snackIdeas: [
      "Fructe cu iaurt simplu.",
      "Legume tăiate sigur cu hummus fin.",
      "Gustări de casă: brioșe, clătite sau biscuiți simpli.",
    ],
    foodsToAvoid: [
      "Bomboane tari, popcorn și alimente mici, tari sau greu de mestecat.",
      "Exces de dulciuri, sucuri și băuturi îndulcite.",
      "Produse foarte sărate sau ultraprocesate.",
      "Alimente la care copilul are alergii sau reacții cunoscute.",
    ],
    faqs: [
      {
        question: "Cum încurajez varietatea la 3 ani?",
        answer:
          "Oferă alegeri limitate, implică copilul în pregătire și păstrează porțiile noi foarte mici.",
      },
      {
        question: "Este normal să refuze legumele?",
        answer:
          "Da, se întâmplă frecvent. Reoferă legumele în forme diferite și fără presiune.",
      },
      {
        question: "Când cer ajutor pentru alimentație?",
        answer:
          "Discută cu pediatrul dacă există pierdere în greutate, oboseală accentuată, refuz alimentar persistent sau dificultăți de mestecat ori înghițit.",
      },
    ],
  },
];

export function getAllMealAgePages() {
  return mealAgePages;
}

export function getMealAgePageBySlug(slug: string) {
  return mealAgePages.find((page) => page.slug === slug);
}

export { mealDisclaimer };

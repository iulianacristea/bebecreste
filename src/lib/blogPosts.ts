export type BlogContentBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  seoDescription: string;
  tags: string[];
  content: BlogContentBlock[];
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Program de somn pentru bebe de 6 luni: ghid complet pentru părinți",
    slug: "program-de-somn-pentru-bebe-de-6-luni",
    excerpt:
      "Un ghid complet și prietenos despre programul de somn la 6 luni, cu exemple, ferestre de veghe și sfaturi practice.",
    seoDescription:
      "Program somn bebe 6 luni: ghid complet pentru părinți despre somnuri de zi, ferestre de veghe, rutina de seară și ajustări blânde.",
    tags: ["somn", "rutine", "dezvoltare"],
    date: "2026-05-01",
    content: [
      {
        type: "paragraph",
        text: "La 6 luni, somnul începe adesea să capete un ritm mai clar. Poate observi că bebe stă treaz mai mult decât înainte, adoarme cam în aceleași intervale sau are nevoie de o rutină de seară mai previzibilă. În același timp, zilele pot fi încă foarte diferite: un somn mai scurt, o noapte agitată sau o perioadă de dezvoltare pot schimba tot programul. De aceea, un program somn bebe 6 luni ar trebui să fie un reper flexibil, nu o listă rigidă de ore.",
      },
      {
        type: "heading",
        text: "Cum arată, în general, somnul la 6 luni?",
      },
      {
        type: "paragraph",
        text: "La această vârstă, mulți bebeluși au nevoie de aproximativ 12-15 ore de somn în 24 de ore. De obicei, somnul este împărțit între noapte și 2 sau 3 somnuri de zi. Unii copii dorm perioade mai lungi noaptea, alții încă se trezesc pentru hrană, confort sau pentru că trec printr-o etapă nouă. Toate aceste variații pot fi normale.",
      },
      {
        type: "list",
        items: [
          "Somn total: aproximativ 12-15 ore în 24 de ore.",
          "Somnuri de zi: de obicei 2-3, în funcție de cât de lungi sunt.",
          "Somn de noapte: adesea 10-12 ore, cu treziri posibile.",
          "Ferestre de veghe: de regulă între 2 și 3 ore.",
        ],
      },
      {
        type: "heading",
        text: "Ferestre de veghe într-un program somn bebe 6 luni",
      },
      {
        type: "paragraph",
        text: "Ferestrele de veghe sunt intervalele dintre trezire și următorul somn. La 6 luni, ele te ajută mai mult decât o oră fixă. Dacă bebe s-a trezit la 7:00, primul somn poate veni după aproximativ 2 ore. Dacă s-a trezit la 8:00, tot programul se mută natural mai târziu. Această abordare reduce presiunea și îți permite să răspunzi mai bine la ziua reală a copilului.",
      },
      {
        type: "heading",
        text: "Exemplu de program de somn pentru bebe de 6 luni",
      },
      {
        type: "paragraph",
        text: "Următorul exemplu este orientativ și pornește de la o trezire la ora 7:00. Nu trebuie urmat la minut. Folosește-l ca punct de plecare și ajustează-l după somnurile reale ale copilului tău.",
      },
      {
        type: "list",
        items: [
          "7:00 - trezire, hrană, lumină naturală și joacă liniștită.",
          "9:00 - primul somn, după o fereastră de veghe mai scurtă.",
          "12:30 - al doilea somn, după aproximativ 2-2,5 ore de veghe.",
          "16:30 - un al treilea somn scurt, dacă primele două au fost scurte.",
          "19:00-20:00 - rutină de seară și culcare, în funcție de ultimul somn.",
        ],
      },
      {
        type: "heading",
        text: "Două sau trei somnuri de zi?",
      },
      {
        type: "paragraph",
        text: "Aceasta este una dintre cele mai frecvente întrebări la 6 luni. Unii bebeluși sunt pregătiți pentru două somnuri mai consistente, în timp ce alții au încă nevoie de trei. Diferența se vede mai ales seara. Dacă bebe ajunge la culcare foarte agitat, plânge mult sau adoarme greu, este posibil ca ziua să fi fost prea lungă fără un somn scurt de sprijin.",
      },
      {
        type: "list",
        items: [
          "Păstrează 3 somnuri dacă primele două sunt scurte.",
          "Încearcă 2 somnuri dacă bebe doarme bine ziua și seara rămâne calm.",
          "Fă ultimul somn scurt, ca să nu împingă culcarea prea târziu.",
          "Acceptă zile mixte: uneori 2 somnuri, alteori 3, în funcție de noapte și de activități.",
        ],
      },
      {
        type: "heading",
        text: "Sfaturi practice pentru o zi mai previzibilă",
      },
      {
        type: "paragraph",
        text: "Un program bun nu începe cu perfecțiune, ci cu observație. În loc să schimbi totul deodată, urmărește câteva zile la rând când se trezește bebe, cât durează somnurile și cum se comportă înainte de culcare. Vei vedea mai ușor dacă are nevoie de o fereastră de veghe mai scurtă, de un al treilea somn sau de o seară începută mai devreme.",
      },
      {
        type: "list",
        items: [
          "Notează pe scurt orele de trezire și somn timp de 3-4 zile.",
          "Începe rutina când apar primele semne de oboseală, nu când plânsul este deja intens.",
          "Redu stimulii înainte de somn: lumină mai blândă, voce calmă, mai puține jucării.",
          "Ajustează programul în pași mici, de 10-15 minute.",
          "Mută culcarea mai devreme după o zi cu somnuri scurte.",
        ],
      },
      {
        type: "heading",
        text: "Exemple din viața de zi cu zi",
      },
      {
        type: "paragraph",
        text: "Să spunem că bebe s-a trezit la 6:30 și primul somn a durat doar 35 de minute. În loc să forțezi ora obișnuită pentru al doilea somn, poți scurta următoarea fereastră de veghe. Dacă, în altă zi, primul somn durează o oră și jumătate, poate nu mai este nevoie de al treilea somn sau acesta poate fi foarte scurt. Programul devine mai ușor când îl lași să respire puțin.",
      },
      {
        type: "heading",
        text: "Ce să eviți când construiești programul",
      },
      {
        type: "paragraph",
        text: "Cea mai mare capcană este să urmărești doar ceasul și să ignori copilul. Ora contează, dar semnele de oboseală contează la fel de mult. O altă greșeală este să renunți prea repede la al treilea somn, deși bebe încă nu poate duce confortabil o fereastră lungă până la seară. Dacă apar seri foarte grele, programul poate avea nevoie de mai multă flexibilitate, nu de mai multă presiune.",
      },
      {
        type: "heading",
        text: "Întrebări frecvente despre programul de somn la 6 luni",
      },
      {
        type: "heading",
        text: "La ce oră ar trebui să adoarmă seara un bebe de 6 luni?",
      },
      {
        type: "paragraph",
        text: "Pentru mulți bebeluși, culcarea funcționează bine între 19:00 și 20:00. Dacă ultimul somn a fost foarte scurt sau s-a terminat devreme, culcarea poate fi mutată mai devreme, chiar și cu 30 de minute.",
      },
      {
        type: "heading",
        text: "Este normal ca bebe să se trezească noaptea la 6 luni?",
      },
      {
        type: "paragraph",
        text: "Da, trezirile nocturne pot apărea încă la această vârstă. Pot avea legătură cu hrănirea, confortul, dezvoltarea sau felul în care a decurs ziua. Dacă ceva te îngrijorează, cel mai bine este să discuți cu pediatrul.",
      },
      {
        type: "heading",
        text: "Ce fac dacă bebe doarme doar 30 de minute ziua?",
      },
      {
        type: "paragraph",
        text: "Somnurile scurte sunt comune la mulți bebeluși. Verifică dacă fereastra de veghe este potrivită și dacă bebe nu ajunge prea obosit la somn. În zilele cu somnuri scurte, ajută adesea o culcare mai devreme.",
      },
      {
        type: "heading",
        text: "Când renunțăm la al treilea somn?",
      },
      {
        type: "paragraph",
        text: "Renunțarea vine, de obicei, când primele două somnuri sunt mai lungi și bebe rezistă confortabil până seara. Tranziția nu trebuie grăbită și poate dura mai multe săptămâni.",
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Un program somn bebe 6 luni este util atunci când îți oferă claritate, nu stres. Folosește ferestrele de veghe ca reper, observă semnele copilului și ajustează ziua cu blândețe. Unele zile vor merge foarte bine, altele vor cere mai multă flexibilitate. Important este să construiești un ritm care susține odihna copilului și liniștea familiei.",
      },
    ],
  },
  {
    title: "Program de somn pentru copil de 1 an",
    slug: "cate-somnuri-are-nevoie-un-copil-de-1-an",
    excerpt:
      "Un ghid blând despre programul de somn la 1 an, tranziția de la două somnuri la unul și rutina de seară.",
    seoDescription:
      "Program somn copil 1 an: află câte somnuri sunt potrivite, cum faci tranziția la un somn și cum ajustezi rutina zilnică.",
    tags: ["somn", "rutine", "dezvoltare"],
    date: "2026-04-24",
    content: [
      {
        type: "paragraph",
        text: "În jurul vârstei de 1 an, programul de somn poate deveni mai greu de citit. Copilul pare mai activ, explorează mai mult și uneori refuză un somn care până ieri mergea foarte bine. Un program somn copil 1 an ar trebui să țină cont de două lucruri: nevoia reală de odihnă și ritmul copilului tău, nu doar ora de pe ceas.",
      },
      {
        type: "heading",
        text: "Cât somn are nevoie un copil de 1 an?",
      },
      {
        type: "paragraph",
        text: "Mulți copii de 1 an au nevoie de aproximativ 11-14 ore de somn în 24 de ore. O parte vine din somnul de noapte, iar restul din somnul de zi. La această vârstă, unii copii încă funcționează bine cu două somnuri, în timp ce alții încep treptat să treacă spre un singur somn mai lung, după prânz.",
      },
      {
        type: "list",
        items: [
          "Somn total: aproximativ 11-14 ore în 24 de ore.",
          "Somn de noapte: adesea 10-12 ore, cu treziri posibile.",
          "Somn de zi: unul sau două somnuri, în funcție de copil.",
          "Ferestre de veghe: de obicei mai lungi decât în primul an de viață.",
        ],
      },
      {
        type: "heading",
        text: "Două somnuri sau un singur somn?",
      },
      {
        type: "paragraph",
        text: "Aceasta este întrebarea cea mare la 1 an. Tranziția de la două somnuri la unul se întâmplă frecvent între 12 și 18 luni, dar nu există o dată fixă. Dacă două somnuri merg bine, copilul adoarme rezonabil și seara nu se mută foarte târziu, nu este nevoie să grăbești schimbarea.",
      },
      {
        type: "heading",
        text: "Semne că două somnuri încă sunt utile",
      },
      {
        type: "list",
        items: [
          "Copilul adoarme ușor la ambele somnuri.",
          "Se trezește relativ odihnit și are dispoziție bună.",
          "Culcarea de seară nu se mută foarte târziu.",
          "Nu apar multe treziri de noapte după zilele cu două somnuri.",
        ],
      },
      {
        type: "paragraph",
        text: "Un program cu două somnuri poate include o trezire în jur de 7:00, primul somn spre 9:30 sau 10:00, al doilea somn după prânz și culcarea de seară în jur de 19:30-20:00. Orele sunt doar exemple. Dacă ziua începe mai târziu, tot programul se poate muta natural.",
      },
      {
        type: "heading",
        text: "Exemplu de program somn copil 1 an",
      },
      {
        type: "paragraph",
        text: "Pentru un copil care încă are două somnuri, ziua poate arăta așa:",
      },
      {
        type: "list",
        items: [
          "7:00 - trezire, mic dejun și joacă.",
          "9:45 - primul somn.",
          "13:30 sau 14:00 - al doilea somn.",
          "19:30-20:00 - rutina de seară și culcare.",
        ],
      },
      {
        type: "paragraph",
        text: "Pentru un copil care a trecut la un singur somn, programul poate fi mai simplu: trezire dimineața, somn principal după prânz, apoi culcare mai devreme seara. În primele săptămâni de tranziție, este normal ca unele zile să ceară culcare mai devreme.",
      },
      {
        type: "heading",
        text: "Semne că se apropie tranziția la un singur somn",
      },
      {
        type: "paragraph",
        text: "Uneori copilul începe să refuze primul sau al doilea somn, adoarme foarte târziu seara sau are somnuri de zi tot mai scurte. Dacă se întâmplă doar o dată, poate fi o zi mai agitată. Dacă se repetă mai multe zile, programul poate avea nevoie de ajustare.",
      },
      {
        type: "list",
        items: [
          "Primul somn se mută tot mai târziu și strică al doilea somn.",
          "Al doilea somn este refuzat des.",
          "Culcarea de noapte devine prea târzie.",
          "Copilul pare odihnit cu o fereastră de veghe mai lungă dimineața.",
        ],
      },
      {
        type: "heading",
        text: "Cum faci tranziția mai blândă?",
      },
      {
        type: "paragraph",
        text: "Tranziția la un singur somn merge mai ușor dacă este făcută treptat. Mută somnul principal mai aproape de prânz, cu pași mici de 10-15 minute la câteva zile. În perioada de ajustare, culcarea de seară poate fi mai devreme. Este normal ca unele zile să fie cu un somn, iar altele cu două, mai ales dacă noaptea a fost fragmentată sau ziua a fost solicitantă.",
      },
      {
        type: "heading",
        text: "Sfaturi practice pentru părinți",
      },
      {
        type: "paragraph",
        text: "La 1 an, copilul are mai multă energie și mai multă curiozitate, așa că rutina contează mult. Nu trebuie să fie lungă, dar ajută să fie previzibilă. O succesiune simplă, repetată zilnic, îi transmite că urmează somnul.",
      },
      {
        type: "list",
        items: [
          "Păstrează mesele și somnurile în intervale asemănătoare, când se poate.",
          "Evită joaca foarte activă chiar înainte de culcare.",
          "Începe rutina înainte ca oboseala să devină intensă.",
          "Mută culcarea mai devreme după zile cu somn puțin.",
          "Observă copilul câteva zile înainte să schimbi programul.",
        ],
      },
      {
        type: "heading",
        text: "Întrebări frecvente despre programul de somn la 1 an",
      },
      {
        type: "heading",
        text: "Este normal ca un copil de 1 an să aibă încă două somnuri?",
      },
      {
        type: "paragraph",
        text: "Da. Mulți copii de 1 an încă au nevoie de două somnuri, mai ales la începutul perioadei de 12 luni. Dacă programul funcționează și copilul este odihnit, nu este nevoie să îl schimbi doar pentru că a împlinit 1 an.",
      },
      {
        type: "heading",
        text: "La ce oră ar trebui să doarmă seara?",
      },
      {
        type: "paragraph",
        text: "Pentru mulți copii, culcarea funcționează bine între 19:30 și 20:30. Dacă somnul de zi a fost scurt sau copilul este foarte obosit, o culcare mai devreme poate ajuta.",
      },
      {
        type: "heading",
        text: "Ce fac dacă refuză al doilea somn?",
      },
      {
        type: "paragraph",
        text: "Uită-te la tipar. Dacă refuzul apare ocazional, poate fi doar o zi mai dificilă. Dacă se repetă, încearcă să muți treptat primul somn mai târziu sau să pregătești tranziția spre un singur somn.",
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Un program somn copil 1 an trebuie să fie clar, dar flexibil. Unii copii au încă două somnuri, alții se apropie de unul singur. Cel mai bun reper este comportamentul copilului: cât de ușor adoarme, cum se trezește, cum ajunge seara și cât de liniștită este noaptea. Cu observație, răbdare și ajustări mici, poți construi un ritm care ajută întreaga familie.",
      },
    ],
  },
  {
    title: "De ce nu doarme bebe noaptea și ce poți face",
    slug: "de-ce-nu-doarme-bebe-noaptea",
    excerpt:
      "Cauze frecvente pentru nopțile agitate, exemple din viața de zi cu zi și pași blânzi care pot ajuta întreaga familie.",
    seoDescription:
      "Bebe nu doarme noaptea? Află cauze frecvente, idei practice și soluții blânde pentru o rutină de somn mai liniștită.",
    tags: ["somn", "rutine", "parenting"],
    date: "2026-05-01",
    content: [
      {
        type: "paragraph",
        text: "Când bebe nu doarme noaptea, toată casa simte asta. Te trezești de mai multe ori, încerci să ghicești ce are nevoie copilul, iar dimineața începe cu oboseală și multe întrebări. Este ceva greșit? Ar trebui să schimbi programul? Este doar o etapă? Răspunsul, de cele mai multe ori, este mai nuanțat: somnul bebelușilor se schimbă des, iar nopțile agitate pot avea mai multe cauze simple și normale.",
      },
      {
        type: "heading",
        text: "De ce bebe nu doarme noaptea?",
      },
      {
        type: "paragraph",
        text: "Nu există o singură explicație valabilă pentru toți copiii. Un bebeluș se poate trezi pentru hrană, confort, apropiere, scutec, din cauza unei zile prea agitate sau pentru că a ajuns prea obosit la culcare. Uneori, problema nu este noaptea în sine, ci felul în care a fost construită ziua: somnuri prea scurte, ferestre de veghe prea lungi sau o rutină de seară care începe prea târziu.",
      },
      {
        type: "list",
        items: [
          "Bebe a dormit prea puțin ziua și ajunge supr obosit seara.",
          "Ultimul somn s-a terminat prea târziu și culcarea devine dificilă.",
          "Ferestrele de veghe sunt prea lungi sau prea scurte pentru vârsta lui.",
          "Mediul de somn este prea luminos, zgomotos sau stimulant.",
          "Are nevoie de ajutor pentru a se liniști între ciclurile de somn.",
        ],
      },
      {
        type: "heading",
        text: "Oboseala prea mare poate strica somnul de noapte",
      },
      {
        type: "paragraph",
        text: "Pare paradoxal, dar un copil foarte obosit nu adoarme întotdeauna mai ușor. Uneori devine agitat, plânge mai repede, se arcuiește sau adoarme pentru scurt timp și apoi se trezește din nou. Dacă bebe nu doarme noaptea și seara este mereu dificilă, merită să te uiți la somnurile de zi. Poate ultimul somn lipsește prea devreme, poate fereastra până la culcare este prea lungă sau poate rutina începe când oboseala este deja intensă.",
      },
      {
        type: "heading",
        text: "Programul de zi contează mai mult decât pare",
      },
      {
        type: "paragraph",
        text: "Somnul de noapte nu este separat de restul zilei. Dacă ziua a fost plină, cu multe vizite, drumuri, zgomot sau somnuri scurte, noaptea poate deveni mai fragmentată. În loc să cauți o soluție doar la ora culcării, încearcă să privești ziua ca pe un întreg. Când se trezește bebe? Cât stă treaz între somnuri? Când are ultima perioadă de joacă activă? Toate aceste detalii pot influența seara.",
      },
      {
        type: "list",
        items: [
          "Notează timp de câteva zile ora trezirii, somnurile și culcarea.",
          "Urmărește dacă trezirile apar mai des după zile cu somnuri scurte.",
          "Încearcă o culcare mai devreme după o zi aglomerată.",
          "Păstrează joaca activă mai devreme și seara mai liniștită.",
        ],
      },
      {
        type: "heading",
        text: "Rutina de seară: simplă, scurtă, repetată",
      },
      {
        type: "paragraph",
        text: "Nu ai nevoie de o rutină perfectă sau foarte lungă. Pentru mulți copii, funcționează mai bine câțiva pași repetați în aceeași ordine: lumină mai blândă, schimbat, hrănire dacă este cazul, cântec scurt, îmbrățișare și somn. Repetarea îi transmite copilului că ziua se încheie. În timp, aceste semnale pot face trecerea spre somn mai ușoară.",
      },
      {
        type: "heading",
        text: "Exemple din viața reală",
      },
      {
        type: "paragraph",
        text: "Imaginează-ți o zi în care bebe a dormit doar 30 de minute dimineața și 35 de minute după-amiaza. Seara, familia încearcă să păstreze ora obișnuită de culcare, dar copilul plânge, se foiește și adoarme greu. Într-o astfel de zi, o culcare cu 30-45 de minute mai devreme poate ajuta. În altă zi, bebe doarme mult după-amiaza și adoarme greu seara. Atunci poate fi util ca ultimul somn să fie mai scurt sau să se termine puțin mai devreme.",
      },
      {
        type: "heading",
        text: "Ce poți încerca atunci când bebe nu doarme noaptea",
      },
      {
        type: "paragraph",
        text: "Alege pași mici, nu schimbări mari peste noapte. Dacă modifici prea multe lucruri deodată, devine greu să îți dai seama ce ajută. Începe cu programul zilei, apoi cu rutina de seară și mediul de somn.",
      },
      {
        type: "list",
        items: [
          "Verifică dacă ferestrele de veghe sunt potrivite pentru vârsta copilului.",
          "Mută culcarea mai devreme în zilele cu somnuri scurte.",
          "Redu luminile și stimularea cu 30-60 de minute înainte de somn.",
          "Păstrează aceeași rutină câteva seri la rând.",
          "Răspunde cu blândețe la treziri și încearcă să menții noaptea cât mai liniștită.",
        ],
      },
      {
        type: "heading",
        text: "Când să ceri ajutor",
      },
      {
        type: "paragraph",
        text: "Acest articol oferă repere generale, nu sfaturi medicale. Dacă apar sforăit puternic, dificultăți de respirație, febră, reflux sever, plâns neobișnuit, stagnare în greutate sau orice îngrijorare legată de sănătate, discută cu medicul pediatru. Intuiția părintelui contează mult. Dacă simți că ceva nu este în regulă, merită verificat.",
      },
      {
        type: "heading",
        text: "Întrebări frecvente",
      },
      {
        type: "heading",
        text: "Este normal ca bebe să se trezească noaptea?",
      },
      {
        type: "paragraph",
        text: "Da, trezirile nocturne pot fi normale, mai ales în primul an. Bebelușii se trezesc pentru hrană, confort, apropiere sau pentru că trec prin schimbări de dezvoltare. Important este să observi tiparul și să vezi dacă există ceva ce poți ajusta blând.",
      },
      {
        type: "heading",
        text: "Dacă doarme mai puțin ziua, va dormi mai bine noaptea?",
      },
      {
        type: "paragraph",
        text: "Nu neapărat. Pentru mulți copii, prea puțin somn ziua duce la oboseală excesivă și nopți mai agitate. Somnul bun de zi poate susține, nu strica, somnul de noapte.",
      },
      {
        type: "heading",
        text: "Ce fac dacă bebe se trezește la fiecare oră?",
      },
      {
        type: "paragraph",
        text: "Începe prin a nota câteva zile programul, somnurile și rutina de seară. Verifică dacă bebe ajunge prea obosit la culcare sau dacă mediul de somn îl trezește ușor. Dacă trezirile sunt foarte dese și persistente, discută și cu pediatrul.",
      },
      {
        type: "heading",
        text: "Cât durează până se îmbunătățește somnul?",
      },
      {
        type: "paragraph",
        text: "Depinde de copil și de cauză. Uneori, o culcare mai devreme ajută chiar din primele seri. Alteori, rutina are nevoie de mai multe zile pentru a deveni previzibilă. Consecvența blândă este mai importantă decât perfecțiunea.",
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Când bebe nu doarme noaptea, este ușor să simți că faci ceva greșit. De cele mai multe ori, însă, somnul are nevoie de mici ajustări: ferestre de veghe potrivite, somnuri de zi urmărite cu atenție, o rutină simplă și o seară mai liniștită. Începe cu pași mici, observă copilul și păstrează flexibilitatea. Nopțile mai bune se construiesc treptat, cu răbdare și blândețe.",
      },
    ],
  },
  {
    title: "Cum îți dai seama că bebe este obosit: semne clare pentru părinți",
    slug: "cum-iti-dai-seama-ca-bebe-este-obosit",
    excerpt:
      "Semne clare că bebe este obosit, diferența dintre oboseala timpurie și cea excesivă și pași simpli pentru somn mai liniștit.",
    seoDescription:
      "Semne bebe obosit: află cum recunoști oboseala timpurie, când bebe este prea obosit și ce poți face pentru o rutină de somn mai calmă.",
    tags: ["somn", "parenting", "dezvoltare"],
    date: "2026-04-17",
    content: [
      {
        type: "paragraph",
        text: "Unul dintre cele mai utile lucruri pe care le poți învăța ca părinte este să recunoști semnele de oboseală ale bebelușului. Uneori sunt evidente, cum ar fi căscatul sau frecatul la ochi. Alteori sunt mai subtile: bebe se uită în gol, își pierde interesul pentru joacă sau cere mai multă apropiere. Când înveți aceste semne bebe obosit, poți începe rutina înainte ca plânsul să devină intens.",
      },
      {
        type: "heading",
        text: "Semne bebe obosit: indicii timpurii",
      },
      {
        type: "paragraph",
        text: "Semnele timpurii sunt cele mai valoroase, pentru că îți arată că somnul se apropie, dar bebe nu este încă foarte obosit. Acesta este, de obicei, cel mai bun moment să reduci stimulii și să pregătești somnul. Dacă aștepți prea mult, copilul poate deveni agitat și adormirea poate dura mai mult.",
      },
      {
        type: "list",
        items: [
          "Cască ușor sau își freacă ochii.",
          "Privește în gol ori pare mai puțin interesat de jucării.",
          "Caută brațele tale sau devine mai lipicios.",
          "Întoarce capul de la lumină, zgomot sau joacă.",
          "Devine mai tăcut sau, dimpotrivă, mai vocal decât de obicei.",
        ],
      },
      {
        type: "heading",
        text: "Semne că bebe este prea obosit",
      },
      {
        type: "paragraph",
        text: "Dacă bebe rămâne treaz prea mult, oboseala poate trece de punctul ideal. Atunci apar semne mai intense: plâns, agitație, arcuirea spatelui sau refuzul rutinei obișnuite. Mulți părinți observă că, deși copilul este foarte obosit, adoarme mai greu. Nu înseamnă că faci ceva greșit; înseamnă doar că momentul optim a fost depășit.",
      },
      {
        type: "list",
        items: [
          "Plâns intens sau iritabilitate greu de calmat.",
          "Agitație, lovit din picioare sau arcuirea spatelui.",
          "Refuzul sânului, biberonului sau al rutinei obișnuite.",
          "Adormire scurtă, urmată de trezire rapidă.",
          "Pare că vrea în brațe, dar se foiește imediat ce îl iei.",
        ],
      },
      {
        type: "heading",
        text: "Ferestrele de veghe te ajută să înțelegi semnele",
      },
      {
        type: "paragraph",
        text: "Ferestrele de veghe sunt intervalele dintre somnuri. Ele te ajută să pui semnele în context. De exemplu, un căscat la 20 de minute după trezire poate însemna plictiseală sau nevoie de schimbare. Același căscat după o fereastră de veghe potrivită pentru vârsta copilului poate fi un semn clar că somnul se apropie.",
      },
      {
        type: "heading",
        text: "Exemple din viața de zi cu zi",
      },
      {
        type: "paragraph",
        text: "Să spunem că bebe s-a trezit la 7:00 și, în jur de 8:45, începe să privească în gol, își freacă ochii și nu mai este interesat de joacă. Acestea sunt semne timpurii și poate fi momentul potrivit pentru rutină. În altă zi, dacă a trecut prea mult timp și bebe plânge, se arcuiește și nu acceptă nimic, este posibil să fie deja prea obosit. Atunci ajută o rutină mai scurtă, mai puțină stimulare și multă răbdare.",
      },
      {
        type: "heading",
        text: "Cum îți construiești propriul radar pentru oboseală",
      },
      {
        type: "paragraph",
        text: "Fiecare copil are propriul fel de a arăta oboseala. Timp de câteva zile, notează ora trezirii, ora somnului și comportamentul dinainte. Nu ai nevoie de un jurnal complicat. Câteva observații scurte sunt suficiente pentru a vedea dacă bebe are un semn preferat: își freacă urechea, caută brațele tale, se uită în gol sau devine foarte vocal.",
      },
      {
        type: "list",
        items: [
          "Uită-te la combinația dintre ceas și comportament.",
          "Începe rutina când apar primele semne, nu când plânsul este deja puternic.",
          "Redu stimulii: lumină mai blândă, voce calmă, mai puține jucării.",
          "Păstrează rutina scurtă și previzibilă.",
          "După o zi cu somnuri scurte, încearcă o culcare mai devreme.",
        ],
      },
      {
        type: "heading",
        text: "Întrebări frecvente despre semne bebe obosit",
      },
      {
        type: "heading",
        text: "Căscatul înseamnă mereu că bebe este obosit?",
      },
      {
        type: "paragraph",
        text: "Nu întotdeauna. Căscatul poate apărea și din plictiseală sau schimbare de ritm. Contează momentul: dacă apare după o fereastră de veghe potrivită și este însoțit de alte semne, probabil somnul se apropie.",
      },
      {
        type: "heading",
        text: "De ce bebe pare agitat când este obosit?",
      },
      {
        type: "paragraph",
        text: "Când oboseala este mare, copilul poate deveni suprastimulat. De aceea poate plânge, se poate foi sau poate refuza lucrurile care de obicei îl liniștesc.",
      },
      {
        type: "heading",
        text: "Ce fac dacă am ratat momentul potrivit?",
      },
      {
        type: "paragraph",
        text: "Simplifică rutina, redu lumina și zgomotul și oferă-i copilului timp să se liniștească. Nu este nevoie să repari totul într-o singură seară. Data viitoare poți începe rutina puțin mai devreme.",
      },
      {
        type: "heading",
        text: "Sunt aceleași semne la toți bebelușii?",
      },
      {
        type: "paragraph",
        text: "Nu. Unii copii devin liniștiți, alții devin agitați. De aceea, observațiile tale sunt foarte importante. În timp, vei recunoaște mai ușor tiparul copilului tău.",
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Recunoașterea semnelor de oboseală vine cu timp și repetiție. Nu vei prinde mereu momentul perfect și este în regulă. Uită-te la combinația dintre ceas, comportament și felul în care a decurs ziua. Când observi semnele mai devreme, poți începe rutina cu mai mult calm, iar somnul are șanse mai bune să vină natural. Dacă oboseala pare extremă, somnul este foarte fragmentat sau ai orice îngrijorare legată de sănătate, discută cu pediatrul.",
      },
    ],
  },
  {
    title: "Copilul de 2 ani nu mai doarme ziua: ce e normal?",
    slug: "copilul-de-2-ani-nu-mai-doarme-ziua",
    excerpt:
      "Un ghid blând despre refuzul somnului de zi la 2 ani, semne că încă are nevoie de odihnă și ce poți face fără presiune.",
    seoDescription:
      "Copil 2 ani nu mai doarme ziua? Află ce poate fi normal, când mai are nevoie de somn și cum poți păstra o rutină liniștită.",
    tags: ["somn", "rutine", "dezvoltare"],
    date: "2026-04-10",
    content: [
      {
        type: "paragraph",
        text: "În jurul vârstei de 2 ani, mulți părinți trec printr-o perioadă confuză: copilul refuză somnul de zi, dar seara devine agitat, plânge mai ușor sau adoarme greu. Dacă te întrebi dacă este normal ca un copil 2 ani nu mai doarme ziua, răspunsul este: uneori da, dar depinde mult de copil și de cum arată restul zilei.",
      },
      {
        type: "heading",
        text: "Este normal ca un copil de 2 ani să renunțe la somnul de zi?",
      },
      {
        type: "paragraph",
        text: "Unii copii încep să refuze somnul de zi în jurul vârstei de 2 ani, însă mulți încă au nevoie de o perioadă de odihnă la prânz. Tranziția nu se întâmplă peste noapte. Pot exista zile în care copilul doarme, zile în care doar stă liniștit și zile în care pare că nu are deloc nevoie de pauză. Această alternanță poate fi normală.",
      },
      {
        type: "list",
        items: [
          "Unii copii încă au nevoie de somn de zi la 2 ani.",
          "Alții încep să doarmă mai rar, mai ales dacă noaptea este bună.",
          "Refuzul ocazional nu înseamnă automat că somnul de zi trebuie eliminat.",
          "Tranziția poate dura săptămâni sau chiar luni.",
        ],
      },
      {
        type: "heading",
        text: "Semne că încă are nevoie de somnul de zi",
      },
      {
        type: "paragraph",
        text: "Cel mai bun indiciu nu este doar faptul că adoarme sau nu la prânz, ci felul în care funcționează până seara. Un copil poate refuza somnul pentru că este curios, vrea să se joace sau testează limite, dar corpul lui poate avea încă nevoie de odihnă.",
      },
      {
        type: "list",
        items: [
          "Devine foarte iritabil după-amiaza.",
          "Plânge ușor din motive mici.",
          "Adoarme în mașină sau în cărucior la ore târzii.",
          "Are seri agitate și adoarme foarte greu.",
          "Se trezește mai des noaptea după zile fără somn.",
        ],
      },
      {
        type: "heading",
        text: "De ce refuză somnul de zi la 2 ani?",
      },
      {
        type: "paragraph",
        text: "La 2 ani, copilul are mai multă independență, limbaj în dezvoltare și dorință mare de explorare. Somnul poate părea o întrerupere nedorită. Uneori refuzul apare și pentru că somnul este propus prea devreme, prea târziu sau după o dimineață foarte stimulativă. Alteori, copilul este deja prea obosit și nu mai reușește să se liniștească.",
      },
      {
        type: "heading",
        text: "Ce poți face când copilul de 2 ani nu mai doarme ziua",
      },
      {
        type: "paragraph",
        text: "În loc să transformi somnul de prânz într-o luptă, încearcă să păstrezi o pauză de liniște. Chiar dacă nu adoarme, copilul poate beneficia de 30-60 de minute cu lumină mai blândă, povești, muzică liniștită sau joacă foarte calmă. Pauza îl ajută să își regleze energia și poate preveni o seară dificilă.",
      },
      {
        type: "list",
        items: [
          "Păstrează aceeași oră aproximativă pentru pauza de prânz.",
          "Redu stimulii cu 20-30 de minute înainte.",
          "Evită ecranele înainte de somn sau pauza de liniște.",
          "Dacă nu adoarme, păstrează totuși un timp calm.",
          "Mută culcarea de seară mai devreme în zilele fără somn de zi.",
        ],
      },
      {
        type: "heading",
        text: "Exemple din viața de zi cu zi",
      },
      {
        type: "paragraph",
        text: "Dacă cel mic refuză somnul la prânz, dar adoarme la 17:00 în mașină, probabil ziua a fost prea lungă fără odihnă. În acest caz, poți încerca să propui pauza mai devreme sau să reduci activitățile intense înainte de prânz. Dacă, în schimb, nu doarme ziua, dar seara este calm și adoarme ușor la o oră potrivită, poate fi un semn că începe treptat să se descurce fără somn zilnic.",
      },
      {
        type: "heading",
        text: "Cum ajustezi seara în zilele fără somn",
      },
      {
        type: "paragraph",
        text: "Zilele fără somn de prânz cer, de multe ori, o seară mai devreme. Nu aștepta neapărat ora obișnuită dacă observi că apar plâns, agitație sau multe negocieri. O culcare cu 30-60 de minute mai devreme poate face diferența între o seară tensionată și una mai liniștită.",
      },
      {
        type: "heading",
        text: "Întrebări frecvente",
      },
      {
        type: "heading",
        text: "La 2 ani trebuie să doarmă ziua în fiecare zi?",
      },
      {
        type: "paragraph",
        text: "Nu neapărat. Unii copii încă au nevoie zilnic de somn, alții încep să alterneze zile cu somn și zile fără. Important este cum se simte copilul până seara și cum doarme noaptea.",
      },
      {
        type: "heading",
        text: "Ce fac dacă stă în pat, dar nu adoarme?",
      },
      {
        type: "paragraph",
        text: "Poți transforma momentul într-o pauză de liniște. Poveștile, muzica blândă sau statul calm în cameră pot fi utile chiar și fără somn. Evită să prelungești prea mult lupta pentru adormire.",
      },
      {
        type: "heading",
        text: "Când renunțăm complet la somnul de zi?",
      },
      {
        type: "paragraph",
        text: "De obicei, când copilul rezistă bine până seara, adoarme ușor noaptea și nu devine constant foarte obosit după-amiaza. Tranziția poate fi graduală, nu o decizie luată într-o singură zi.",
      },
      {
        type: "heading",
        text: "Este o problemă dacă adoarme seara mai devreme?",
      },
      {
        type: "paragraph",
        text: "Nu. În zilele fără somn de zi, o culcare mai devreme poate fi exact ce are nevoie copilul. Ajută la prevenirea oboselii excesive și poate susține o noapte mai liniștită.",
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Dacă un copil 2 ani nu mai doarme ziua, nu înseamnă automat că ceva este în neregulă. Poate fi începutul unei tranziții, o etapă temporară sau un semn că programul are nevoie de ajustări. Păstrează o pauză de liniște, urmărește comportamentul de după-amiază și adaptează culcarea de seară. Cu răbdare și flexibilitate, poți găsi un ritm care funcționează pentru copil și pentru familie.",
      },
    ],
  },
  {
    title: "Cum adoarme bebe mai repede: trucuri care chiar funcționează",
    slug: "cum-adoarme-bebe-mai-repede",
    excerpt:
      "Idei simple și blânde pentru seri mai liniștite, fără presiune și fără promisiuni nerealiste.",
    seoDescription:
      "Cum adoarme bebe mai repede: trucuri blânde, rutină de seară, ferestre de veghe și sfaturi practice pentru părinți.",
    tags: ["somn", "rutine", "parenting"],
    date: "2026-04-03",
    content: [
      {
        type: "paragraph",
        text: "Când se apropie seara și bebe pare obosit, dar nu adoarme, totul poate deveni apăsător. Îl legeni, îl liniștești, îl pui jos, îl iei iar în brațe, iar minutele trec. Dacă te întrebi cum adoarme bebe mai repede, primul lucru important este acesta: nu există un truc magic care funcționează la fel pentru toți copiii. Există însă câteva lucruri simple, blânde și realiste care pot face adormirea mai ușoară.",
      },
      {
        type: "heading",
        text: "Începe cu momentul potrivit",
      },
      {
        type: "paragraph",
        text: "Un bebe adoarme mai greu dacă este prea puțin obosit, dar și dacă este prea obosit. De aceea, momentul contează mult. Dacă începi rutina prea devreme, copilul poate protesta pentru că încă are energie. Dacă o începi prea târziu, poate deveni agitat și greu de liniștit. Ferestrele de veghe te ajută să găsești un interval potrivit, dar semnele copilului rămân la fel de importante.",
      },
      {
        type: "list",
        items: [
          "Urmărește ora ultimei treziri.",
          "Observă semnele de oboseală: căscat, privire pierdută, frecat la ochi.",
          "Începe rutina înainte ca plânsul să devină intens.",
          "Ajustează ora de culcare după cum au fost somnurile de zi.",
        ],
      },
      {
        type: "heading",
        text: "Redu stimulii înainte de somn",
      },
      {
        type: "paragraph",
        text: "Mulți bebeluși au nevoie de o tranziție clară între joacă și somn. Dacă seara este plină de lumină puternică, zgomot, jucării multe și activitate intensă, corpul copilului poate avea nevoie de mai mult timp ca să se liniștească. Nu trebuie să faci liniște totală în casă, dar ajută să cobori treptat ritmul.",
      },
      {
        type: "list",
        items: [
          "Stinge luminile puternice sau folosește o lumină caldă.",
          "Alege joacă liniștită în ultima parte a serii.",
          "Vorbește mai încet și păstrează mișcările mai lente.",
          "Evită schimbările bruște chiar înainte de culcare.",
        ],
      },
      {
        type: "heading",
        text: "Creează o rutină scurtă și repetabilă",
      },
      {
        type: "paragraph",
        text: "Rutina nu trebuie să fie complicată. De fapt, pentru mulți bebeluși, o rutină scurtă funcționează mai bine decât una lungă. Important este să fie previzibilă. Când aceiași pași se repetă seară de seară, bebe începe să înțeleagă că urmează somnul.",
      },
      {
        type: "list",
        items: [
          "Schimbat sau baie, dacă face parte din rutina voastră.",
          "Pijama și sac de dormit, dacă folosiți.",
          "Hrănire într-un cadru liniștit.",
          "Un cântec scurt, o poveste sau câteva cuvinte repetate.",
          "Îmbrățișare și somn.",
        ],
      },
      {
        type: "heading",
        text: "Ai grijă la somnurile de zi",
      },
      {
        type: "paragraph",
        text: "Dacă bebe adoarme greu seara, merită să te uiți la ziua întreagă, nu doar la ultimele 30 de minute. Uneori somnul de seară este dificil pentru că ultimul somn s-a terminat prea târziu. Alteori, pentru că somnurile de zi au fost prea scurte și copilul ajunge epuizat. Un mic jurnal de 3-4 zile poate arăta tipare foarte utile.",
      },
      {
        type: "heading",
        text: "Exemple din seri obișnuite",
      },
      {
        type: "paragraph",
        text: "Dacă bebe a avut două somnuri scurte și a stat treaz mult înainte de seară, este posibil să adoarmă mai repede dacă începi rutina cu 30 de minute mai devreme. Dacă, în schimb, a dormit târziu după-amiaza și seara pare plin de energie, poate avea nevoie de o fereastră de veghe puțin mai lungă înainte de culcare. Nu este vorba despre reguli fixe, ci despre observarea copilului tău.",
      },
      {
        type: "heading",
        text: "Trucuri blânde care pot ajuta",
      },
      {
        type: "paragraph",
        text: "Când cauți cum adoarme bebe mai repede, este ușor să găsești liste lungi de metode. Cele mai utile sunt, de obicei, cele simple și consecvente. Alege una sau două și păstrează-le câteva seri, ca să vezi dacă ajută.",
      },
      {
        type: "list",
        items: [
          "Folosește aceeași frază de somn în fiecare seară.",
          "Păstrează camera aerisită și confortabilă.",
          "Încearcă un zgomot alb blând, dacă bebe pare ajutat de sunete constante.",
          "Ține rutina în aceeași ordine, chiar dacă ora variază puțin.",
          "Dacă bebe plânge, revino la liniștire fără să transformi seara într-o luptă.",
        ],
      },
      {
        type: "heading",
        text: "Ce să eviți când vrei să adoarmă mai repede",
      },
      {
        type: "paragraph",
        text: "Uneori, din dorința de a ajuta, schimbăm prea multe lucruri într-o singură seară. Încercăm altă lumină, alt cântec, altă poziție, altă oră. Pentru copil, aceste schimbări pot fi mai stimulante decât liniștitoare. Mai util este să păstrezi un cadru simplu și să ajustezi treptat.",
      },
      {
        type: "heading",
        text: "Întrebări frecvente",
      },
      {
        type: "heading",
        text: "De ce adoarme greu deși pare obosit?",
      },
      {
        type: "paragraph",
        text: "Poate fi prea obosit. Când oboseala trece de punctul ideal, unii bebeluși devin agitați și au nevoie de mai mult ajutor ca să se liniștească.",
      },
      {
        type: "heading",
        text: "Ajută o rutină mai lungă?",
      },
      {
        type: "paragraph",
        text: "Nu întotdeauna. O rutină scurtă, calmă și repetată poate fi mai eficientă decât una lungă, mai ales dacă bebe se suprastimulează ușor.",
      },
      {
        type: "heading",
        text: "Cât timp ar trebui să dureze adormirea?",
      },
      {
        type: "paragraph",
        text: "Depinde de copil și de zi. Uneori durează 10-15 minute, alteori mai mult. Dacă adormirea este mereu foarte lungă, uită-te la ora ultimului somn, fereastra de veghe și rutina de seară.",
      },
      {
        type: "heading",
        text: "Ce fac dacă nimic nu funcționează?",
      },
      {
        type: "paragraph",
        text: "Încearcă să simplifici. Păstrează aceeași rutină câteva seri, notează somnurile de zi și ajustează doar un lucru pe rând. Dacă ai îngrijorări legate de sănătate, discută cu pediatrul.",
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Dacă vrei să știi cum adoarme bebe mai repede, începe cu lucrurile de bază: moment potrivit, mai puțini stimuli, rutină previzibilă și ajustări mici. Nu fiecare seară va fi perfectă, iar asta este normal. Scopul nu este să forțezi somnul, ci să creezi condiții în care copilul se poate liniști mai ușor.",
      },
    ],
  },
  {
    title: "Alimente recomandate și alimente de evitat în diversificare",
    slug: "alimente-recomandate-si-de-evitat-in-diversificare",
    excerpt:
      "Un ghid prietenos pentru părinți despre alimente potrivite în diversificare și alimente care ar trebui evitate în primul an.",
    seoDescription:
      "Alimente recomandate diversificare bebeluși: legume, fructe, cereale, proteine și lista alimentelor de evitat în primul an.",
    tags: ["alimentatie", "diversificare", "bebelusi"],
    date: "2026-05-01",
    content: [
      {
        type: "paragraph",
        text: "Diversificarea este una dintre etapele care vin cu multe întrebări pentru părinți. Ce pot să îi ofer? Ce ar trebui să evit? Când introduc peștele, oul sau lactatele? Răspunsurile pot varia în funcție de copil, de recomandarea medicului pediatru și de istoricul familiei, însă câteva repere simple pot face începutul mai calm.",
      },
      {
        type: "paragraph",
        text: "Acest articol este orientativ și nu înlocuiește sfatul medicului. Dacă bebe are alergii, reflux, probleme digestive, prematuritate sau alte situații speciale, discută cu pediatrul înainte de a introduce alimente noi.",
      },
      {
        type: "heading",
        text: "Alimente pe care să le includeți",
      },
      {
        type: "paragraph",
        text: "În diversificare, cel mai util este să pornești de la alimente simple, gătite blând și adaptate vârstei copilului. Textura contează la fel de mult ca alimentul: la început poate fi piure fin, apoi pasat grosier, bucăți moi sau preparate ușor de ținut în mână, în funcție de dezvoltarea copilului.",
      },
      {
        type: "list",
        items: [
          "Legume: dovlecel, morcov, păstârnac, țelină, cartof dulce, dovleac, mazăre, fasole verde.",
          "Fructe: măr copt, banană, pară, piersică, prune, caise.",
          "Cereale: orez, ovăz, mei, quinoa, hrișcă.",
          "Proteine animale: carne de pui, curcan, iepure, vită slabă.",
          "Pește: somon, păstrăv, șalău, introdus treptat, de obicei după 8 luni.",
          "Gălbenuș de ou: de obicei după 7 luni, introdus treptat.",
          "Lactate: după 9 luni, de preferat iaurt simplu și brânzică de vaci.",
          "Leguminoase pasate: linte roșie, năut, fasole albă fiartă.",
          "Uleiuri vegetale presate la rece: în principal ulei de măsline extravirgin, în cantitate mică.",
        ],
      },
      {
        type: "heading",
        text: "Cum introduci alimentele noi",
      },
      {
        type: "paragraph",
        text: "O abordare blândă este să introduci alimentele treptat, câte unul sau în combinații simple, mai ales la început. Așa observi mai ușor dacă un aliment nu este bine tolerat. Nu este nevoie ca bebe să mănânce mult din prima. În primele luni, diversificarea înseamnă explorare, gust, textură și obișnuire cu masa.",
      },
      {
        type: "list",
        items: [
          "Alege alimente gătite simplu: fierte, la abur sau coapte.",
          "Păstrează textura potrivită vârstei și abilităților copilului.",
          "Oferă apă la masă după începerea diversificării, conform recomandării pediatrului.",
          "Nu forța copilul să termine porția.",
          "Reia alimentele refuzate în altă zi, fără presiune.",
        ],
      },
      {
        type: "heading",
        text: "Alimente pe care să le evitați",
      },
      {
        type: "paragraph",
        text: "Unele alimente nu sunt potrivite pentru bebeluși, fie din cauza riscului de înec, fie din cauza conținutului mare de sare, zahăr, aditivi sau a riscurilor specifice primului an de viață.",
      },
      {
        type: "list",
        items: [
          "Sare și zahăr adăugate.",
          "Miere, din cauza riscului de botulism până la 1 an.",
          "Lapte de vacă drept băutură principală până la 12 luni.",
          "Carne procesată și mezeluri.",
          "Pește crud și fructe de mare.",
          "Alimente dure, precum nuci sau semințe întregi, deoarece există risc de înec.",
          "Produse cu conținut ridicat de aditivi sau conservanți.",
          "Băuturi carbogazoase sau sucuri din comerț.",
        ],
      },
      {
        type: "heading",
        text: "Exemple simple pe parcursul zilei",
      },
      {
        type: "paragraph",
        text: "La 6 luni, mulți bebeluși încep cu o singură masă solidă, de obicei la prânz. De la 7 luni poate apărea micul dejun, iar de la 8 luni poate fi introdusă și cina, în funcție de copil și de recomandarea medicului. Ritmul nu trebuie grăbit.",
      },
      {
        type: "list",
        items: [
          "6 luni: prânz cu piure de legume, simplu și fin.",
          "7 luni: mic dejun cu fruct sau cereală pentru bebeluși și prânz cu legume.",
          "8 luni: mic dejun, prânz și cină simplă, cu texturi potrivite.",
          "9-12 luni: trei mese solide și gustări simple, dacă se potrivesc rutinei copilului.",
        ],
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Diversificarea nu trebuie să fie perfectă ca să fie bună. Alege alimente simple, evită produsele nepotrivite pentru primul an, urmărește reacțiile copilului și păstrează mesele cât mai calme. Când ai dubii, pediatrul este cea mai bună sursă de recomandări pentru copilul tău.",
      },
    ],
  },
  {
    title: "Alimente de evitat în diversificare: ghid pentru părinți",
    slug: "alimente-de-evitat-in-diversificare",
    excerpt:
      "Lista alimentelor de evitat în diversificare și explicații simple despre sare, zahăr, miere, lapte de vacă, mezeluri și riscul de înec.",
    seoDescription:
      "Alimente de evitat în diversificare: ce nu ar trebui oferit bebelușilor în primul an și de ce. Ghid prietenos pentru părinți.",
    tags: ["alimentatie", "diversificare", "siguranta"],
    date: "2026-05-01",
    content: [
      {
        type: "paragraph",
        text: "Când începe diversificarea, întrebarea nu este doar ce poate mânca bebe, ci și ce ar fi bine să eviți. Unele alimente pot fi prea sărate, prea dulci, greu de gestionat pentru un copil mic sau pot avea risc de înec. Vestea bună este că nu ai nevoie de reguli complicate: câteva repere simple pot face mesele mai sigure și mai liniștite.",
      },
      {
        type: "paragraph",
        text: "Acest ghid este orientativ și nu înlocuiește recomandarea medicului pediatru. Dacă există alergii, istoric familial, prematuritate, reflux, probleme digestive sau alte situații speciale, discută cu pediatrul înainte de a introduce alimente noi.",
      },
      {
        type: "heading",
        text: "Sare și zahăr adăugate",
      },
      {
        type: "paragraph",
        text: "În primul an, este recomandat să eviți sarea și zahărul adăugate. Bebelușii descoperă gusturile naturale ale alimentelor, iar mâncarea nu trebuie să semene cu cea a adulților. Legumele, fructele, cerealele și carnea gătită simplu au deja gust suficient pentru început.",
      },
      {
        type: "list",
        items: [
          "Evită să adaugi sare în piureuri, supe sau legume.",
          "Evită zahărul în iaurt, terci, fructe sau deserturi.",
          "Ai grijă la produse gata preparate, care pot conține sare sau zahăr ascuns.",
        ],
      },
      {
        type: "heading",
        text: "Miere până la 1 an",
      },
      {
        type: "paragraph",
        text: "Mierea se evită până la vârsta de 1 an din cauza riscului de botulism infantil. Chiar dacă este naturală, nu este potrivită pentru bebelușii mici. Pentru gust dulce, fructele coapte sunt o variantă mai potrivită.",
      },
      {
        type: "heading",
        text: "Lapte de vacă drept băutură principală",
      },
      {
        type: "paragraph",
        text: "Până la 12 luni, laptele de vacă nu ar trebui folosit ca băutură principală. Laptele matern sau formula rămân baza alimentației. Unele lactate, precum iaurtul simplu sau brânzica de vaci, pot fi introduse mai târziu, în funcție de vârstă și recomandarea pediatrului.",
      },
      {
        type: "heading",
        text: "Carne procesată și mezeluri",
      },
      {
        type: "paragraph",
        text: "Mezelurile, cârnații, crenvurștii, șunca procesată și alte produse similare sunt de evitat. De obicei au multă sare, aditivi și o textură care nu este ideală pentru bebeluși. Alege mai degrabă carne simplă, gătită acasă: pui, curcan, iepure sau vită slabă.",
      },
      {
        type: "heading",
        text: "Pește crud și fructe de mare",
      },
      {
        type: "paragraph",
        text: "Peștele crud, fructele de mare crude sau preparatele insuficient gătite nu sunt potrivite pentru bebeluși. Dacă introduci pește, alege variante bine gătite, fără oase, în porții mici și urmărește toleranța copilului.",
      },
      {
        type: "heading",
        text: "Alimente dure și risc de înec",
      },
      {
        type: "paragraph",
        text: "Un risc important în diversificare este înecul. Unele alimente sunt prea dure, prea rotunde sau prea mici pentru a fi oferite întregi. Forma și textura alimentului contează enorm.",
      },
      {
        type: "list",
        items: [
          "Evită nucile și semințele întregi.",
          "Evită bucățile tari de morcov crud, măr crud sau alte alimente greu de mestecat.",
          "Taie alimentele rotunde în forme sigure, adaptate vârstei.",
          "Nu lăsa copilul să mănânce nesupravegheat.",
        ],
      },
      {
        type: "heading",
        text: "Produse cu mulți aditivi sau conservanți",
      },
      {
        type: "paragraph",
        text: "Produsele foarte procesate, cu liste lungi de ingrediente, nu sunt o alegere bună în diversificare. Pentru început, mesele simple sunt cele mai utile: legume gătite, fructe potrivite, cereale simple și proteine gătite blând.",
      },
      {
        type: "heading",
        text: "Băuturi carbogazoase și sucuri din comerț",
      },
      {
        type: "paragraph",
        text: "Băuturile carbogazoase și sucurile din comerț nu sunt potrivite pentru bebeluși. Apa, în cantitate potrivită vârstei și după începerea diversificării, este alegerea simplă. Laptele matern sau formula rămân importante în primul an.",
      },
      {
        type: "heading",
        text: "Lista scurtă: ce să eviți",
      },
      {
        type: "list",
        items: [
          "Sare și zahăr adăugate.",
          "Miere până la 1 an.",
          "Lapte de vacă drept băutură principală până la 12 luni.",
          "Carne procesată și mezeluri.",
          "Pește crud și fructe de mare.",
          "Nuci, semințe întregi și alte alimente dure cu risc de înec.",
          "Produse cu mulți aditivi sau conservanți.",
          "Băuturi carbogazoase și sucuri din comerț.",
        ],
      },
      {
        type: "heading",
        text: "Concluzie",
      },
      {
        type: "paragraph",
        text: "Diversificarea poate fi mai simplă când știi ce să eviți. Păstrează mesele cât mai naturale, fără sare și zahăr adăugate, evită alimentele cu risc și adaptează textura la vârsta copilului. Când ceva nu este clar, cere sfatul pediatrului.",
      },
    ],
  },
];

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (firstPost, secondPost) =>
      new Date(secondPost.date).getTime() - new Date(firstPost.date).getTime(),
  );
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

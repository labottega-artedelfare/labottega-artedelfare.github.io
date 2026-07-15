# Design brief — La Bottega – Arte del Fare

## Obiettivo

Realizzare una landing page pubblica, responsive e accessibile che presenti La Bottega, raccolga i principali collegamenti pubblici e introduca il programma sostenitori. La registrazione vera e propria sarà collegata in una fase successiva tramite Google Apps Script.

## Identità

Nome pubblico: **La Bottega – Arte del Fare**  
Sottotitolo: **Cultura e formazione gestaltica**

Testo introduttivo:

> La Bottega è un luogo di esperienza, terapia, filosofia e trasmissione della tradizione gestaltica. Nata nel solco dell’insegnamento di Barrie Simmons e fondata da Mimmo Ciavarelli, promuove attività formative e culturali dedicate alla pratica, al confronto e alla crescita della comunità gestaltica.

## Collegamenti

I link definitivi sono contenuti in `assets/js/config.js`:

- sito internet
- Instagram
- YouTube
- Facebook
- email

## Materiali grafici

Sono previsti due file immagine:

- `assets/images/logo-orizzontale.png`: logo principale trasparente con marchio e scritta “arte del fare”
- `assets/images/logo-circolare.png`: logo circolare con le due figure sedute

Il logo orizzontale va usato nell’header/hero. Il logo circolare può essere usato come elemento secondario nella sezione sostenitori o nel footer.

## Palette iniziale

Derivata dai loghi forniti:

- ruggine principale: `#782717`
- antracite: `#1D1D1B`
- avorio caldo: `#F6F1E9`
- rosa polvere: `#C0A69F`
- bianco: `#FFFFFF`

Evitare un’estetica aziendale o tecnologica. Preferire una pagina editoriale, calda, culturale e sobria, con ampio respiro, tipografia leggibile e dettagli che richiamino carta, stampa e bottega.

## Struttura richiesta

1. Header essenziale con logo e navigazione interna.
2. Hero con identità, testo introduttivo e CTA verso il programma sostenitori.
3. Sezione “La Bottega” con breve presentazione e link al sito principale.
4. Sezione collegamenti pubblici: sito, Instagram, YouTube, Facebook, email.
5. Sezione “Programma sostenitori”.
6. Tre schede: Amici della Bottega, Backstage, Panel.
7. Sezione “Come funziona”: registrazione, donazione volontaria, verifica manuale del bonifico, rilascio badge annuale.
8. CTA finale “Registrati e richiedi il badge”, inizialmente disabilitata o etichettata “A breve” finché `registrationOpen` è `false`.
9. Footer con contatti e collegamenti.

## Programma sostenitori

I contenuti completi sono già strutturati in `assets/js/content.js`.

Dati richiesti nella futura registrazione:

- nome
- cognome
- numero di telefono
- email

Condizioni iniziali:

- donazione volontaria
- verifica manuale del bonifico
- badge con durata annuale

## Requisiti tecnici

- HTML, CSS e JavaScript senza framework e senza build step.
- Compatibile con GitHub Pages.
- Mobile first e senza overflow orizzontale a 360, 375 e 390 px.
- Buon contrasto e navigazione da tastiera.
- Evitare dipendenze esterne non necessarie.
- Non inserire credenziali, dati bancari o dati personali nel repository.
- Non implementare ancora il backend di registrazione.

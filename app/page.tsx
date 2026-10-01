const services = [
  {
    number: "01",
    title: "Braut-Make-up",
    text: "Ein typgerechter Look, der zu dir, deinem Kleid und der Stimmung eurer Hochzeit passt – von natürlich-frisch bis ausdrucksstark.",
  },
  {
    number: "02",
    title: "Braut-Hairstyling",
    text: "Sanfte Wellen, ein moderner Sleek Look oder eine elegante Hochsteckfrisur – gemeinsam finden wir die Form, die sich richtig anfühlt.",
  },
  {
    number: "03",
    title: "Probetermin",
    text: "Wir besprechen deine Wünsche, probieren den Look in Ruhe aus und stimmen Make-up und Hairstyling bis ins Detail aufeinander ab.",
  },
  {
    number: "04",
    title: "Event-Styling",
    text: "Professionelles Make-up und Hairstyling für Standesamt, Verlobung, Fotoshooting oder einen anderen besonderen Anlass.",
  },
];

const steps = [
  {
    number: "01",
    title: "Deine Anfrage",
    text: "Schick mir über WhatsApp dein Hochzeitsdatum und erzähle mir kurz, welchen Look du dir wünschst.",
  },
  {
    number: "02",
    title: "Unser Probetermin",
    text: "In entspannter Atmosphäre entwickeln wir ein Styling, das deine Persönlichkeit unterstreicht.",
  },
  {
    number: "03",
    title: "Dein Hochzeitstag",
    text: "Mit einem klaren Zeitplan entsteht dein Look ruhig, sorgfältig und ohne unnötige Hektik.",
  },
];

export default function Home() {
  const instagramUrl = "https://www.instagram.com/antonina_kasjan?igsh=MXZrcmRreXU0dGx0Zw==";
  const phoneNumber = "+4917685423949";
  const emailAddress = "info@ak-makeup.de";
  const whatsappUrl = "https://wa.me/4917685423949?text=Hallo%20Antonina%2C%20ich%20m%C3%B6chte%20gern%20einen%20Termin%20anfragen.";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Antonina Bridal Beauty – Startseite">
          <span>Antonina</span>
          <small>Bridal Beauty</small>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#about">Über mich</a>
          <a href="#zahlung">Zahlung</a>
        </nav>
        <a className="header-cta" href="#kontakt">Termin anfragen</a>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">Braut-Make-up · Hairstyling · Probetermin</p>
          <h1>Du selbst.<br />Nur noch <em>strahlender.</em></h1>
          <p className="hero-text">
            Ein Brautstyling, das nicht verkleidet, sondern deine natürliche Schönheit unterstreicht – persönlich, harmonisch und mit einem sicheren Gefühl bis zum letzten Foto.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#kontakt">Brautstyling anfragen</a>
            <a className="text-link" href="#leistungen">Leistungen ansehen <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="hero-notes" aria-label="Vorteile">
            <li>Individuell abgestimmt</li>
            <li>Im Studio in Schorndorf</li>
            <li>Mobil im Großraum Stuttgart</li>
          </ul>
        </div>
        <div className="hero-visual" role="img" aria-label="Elegantes Braut-Make-up und Hairstyling">
          <div className="hero-image" />
          <span className="hero-mark" aria-hidden="true">A</span>
          <p className="image-caption">Dein Moment.<br />Dein Look.</p>
        </div>
      </section>

      <section className="intro section" id="leistungen">
        <div className="section-heading">
          <p className="eyebrow">Leistungen</p>
          <h2>Schönheit, die sich<br /><em>nach dir anfühlt.</em></h2>
        </div>
        <p className="section-lead">
          Dein Styling soll den ganzen Tag tragen und trotzdem leicht wirken. Jedes Detail entsteht deshalb im Zusammenspiel mit deinem Stil, deinen Wünschen und deinem Hochzeitstag.
        </p>
      </section>

      <section className="services" aria-label="Beauty-Leistungen">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </section>

      <section className="portfolio section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-visual" aria-hidden="true">
          <span className="portfolio-monogram">A</span>
          <p>Bridal<br />Looks</p>
        </div>
        <div className="portfolio-copy">
          <p className="eyebrow">Portfolio & Inspiration</p>
          <h2 id="portfolio-title">Entdecke meine<br /><em>aktuellen Looks.</em></h2>
          <p>
            Braut-Make-up, Hairstyling und besondere Beauty-Momente: Auf Instagram findest du aktuelle Arbeiten, neue Inspirationen und Einblicke hinter die Kulissen.
          </p>
          <a
            className="button button-instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio von Antonina Bridal Beauty auf Instagram öffnen"
          >
            <span aria-hidden="true">◎</span> Mehr auf Instagram
          </a>
          <a className="instagram-handle" href={instagramUrl} target="_blank" rel="noopener noreferrer">
            @antonina_kasjan ↗
          </a>
        </div>
      </section>

      <section className="quote-band">
        <p>„Ein Look, den du nicht nur siehst – sondern in dem du dich wohlfühlst.“</p>
      </section>

      <section className="process section" id="ablauf">
        <div className="process-title">
          <p className="eyebrow">So läuft es ab</p>
          <h2>Vom ersten Hallo<br />bis zum <em>Ja.</em></h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-card">
          <p className="script">Antonina</p>
          <p className="eyebrow">Bridal Beauty</p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Über mich</p>
          <h2>Mit Ruhe, Gefühl<br />und einem Auge fürs <em>Detail.</em></h2>
          <p>
            Ich möchte, dass du dich während des Stylings genauso wohlfühlst wie mit dem fertigen Look. Deshalb nehme ich mir Zeit, höre genau zu und entwickle mit dir ein Ergebnis, das deine Ausstrahlung in den Mittelpunkt stellt.
          </p>
          <p>
            Ob zart und natürlich oder elegant und glamourös: Entscheidend ist nicht ein Trend, sondern dass du dich wiedererkennst.
          </p>
        </div>
      </section>

      <section className="payment section" id="zahlung" aria-labelledby="payment-title">
        <div className="payment-copy">
          <p className="eyebrow">Zahlungsmöglichkeiten</p>
          <h2 id="payment-title">Dein Termin steht.<br />Dann zahlst du <em>sicher.</em></h2>
          <p>
            Nach der persönlichen Terminbestätigung erhältst du deinen individuell vereinbarten
            Gesamtpreis und einen persönlichen Link für die vollständige Online-Zahlung.
          </p>
          <a className="text-link" href="#kontakt">Termin und Preis anfragen <span aria-hidden="true">↓</span></a>
        </div>
        <div className="payment-details">
          <ol className="payment-flow" aria-label="Ablauf der Zahlung">
            <li><span>01</span><p>Datum, Leistung und Wünsche per WhatsApp abstimmen.</p></li>
            <li><span>02</span><p>Terminbestätigung und individuellen Gesamtpreis erhalten.</p></li>
            <li><span>03</span><p>Den vollständigen Betrag über den persönlichen Zahlungslink bezahlen.</p></li>
          </ol>
          <div className="payment-methods" aria-label="Akzeptierte Zahlungsmöglichkeiten">
            <article><span>Online</span><h3>PayPal & Überweisung</h3><p>Vollständige Zahlung nach Terminbestätigung.</p></article>
            <article><span>Vor Ort</span><h3>Bar & Karte</h3><p>Barzahlung, girocard oder Kreditkarte nach Vereinbarung.</p></article>
          </div>
        </div>
      </section>

      <section className="contact" id="kontakt">
        <p className="eyebrow">Termin & Anfrage</p>
        <h2>Erzähl mir von<br /><em>deinem großen Tag.</em></h2>
        <p className="contact-text">
          Sende mir per WhatsApp dein Wunschdatum, den Anlass und eine kurze Vorstellung von deinem Styling. Ich melde mich persönlich bei dir zurück.
        </p>
        <div className="contact-details" aria-label="Studioadresse, Servicegebiet und Termine">
          <article>
            <span>Studioadresse</span>
            <h3>
              <a
                className="address-link"
                href="https://www.google.com/maps/search/?api=1&query=Gm%C3%BCnder%20Str.%2037%2C%2073614%20Schorndorf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmünder Straße 37 in Schorndorf in Google Maps öffnen"
              >
                Gmünder Str. 37<br />73614 Schorndorf <small aria-hidden="true">↗</small>
              </a>
            </h3>
            <p>Im MILENI Beauty Studio</p>
          </article>
          <article>
            <span>Studio & mobiler Service</span>
            <h3>Großraum Stuttgart</h3>
            <p>Styling im Studio in Schorndorf oder mobil bei dir vor Ort – nach vorheriger Absprache.</p>
          </article>
          <article>
            <span>Termine</span>
            <h3>Montag bis Sonntag</h3>
            <p>Ausschließlich nach vorheriger Terminvereinbarung</p>
          </article>
        </div>
        <div className="contact-actions" aria-label="Kontakt per Telefon, WhatsApp und E-Mail">
          <a
            className="contact-action contact-action-phone"
            href={`tel:${phoneNumber}`}
            aria-label="Antonina Bridal Beauty unter plus 49 176 85423949 anrufen"
          >
            <span>Anrufen</span>
            <strong>+49 176 85423949</strong>
          </a>
          <a
            className="contact-action contact-action-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Antonina Bridal Beauty über WhatsApp kontaktieren"
          >
            <span>WhatsApp</span>
            <strong>Nachricht senden <small aria-hidden="true">↗</small></strong>
          </a>
          <a
            className="contact-action contact-action-email"
            href={`mailto:${emailAddress}`}
            aria-label={`Antonina Bridal Beauty per E-Mail an ${emailAddress} kontaktieren`}
          >
            <span>E-Mail</span>
            <strong>{emailAddress}</strong>
          </a>
        </div>
        <p className="contact-note">Telefonisch, per WhatsApp und E-Mail erreichbar. Termine ausschließlich nach vorheriger Vereinbarung.</p>
      </section>

      <footer>
        <a className="brand footer-brand" href="#start">
          <span>Antonina</span>
          <small>Bridal Beauty</small>
        </a>
        <p>© 2026 Antonina Bridal Beauty</p>
        <div className="legal">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <span>Impressum</span><span>Datenschutz</span>
        </div>
      </footer>
    </main>
  );
}

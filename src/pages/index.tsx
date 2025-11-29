export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Votre entreprise est-elle vraiment protégée ?</h1>
          <p>
            83 % des cyberattaques ciblent les PME.  
            Nous vous aidons à réduire le risque de 70 % en 30 jours.
          </p>
          <a href="/auth/inscription" className="btn-primary">Faire le point gratuitement</a>
        </div>
        <div className="hero-image">
          <img src="/home/suisse/Documents/cyber-enterprise-site/src/pages/cyber-hero.svg" alt="Illustration cybersécurité" />
        </div>
      </section>


      <section className="services">
        <h2>Nos services clés en 1 clic</h2>
        <div className="grid">
          <a href="/formation" className="service-card">
            <h3>Formation sensibilisation</h3>
            <p>3h30 pour transformer vos collaborateurs en premier rempart.</p>
            <span className="price">À partir de 490 € HT</span>
          </a>
          <a href="/phishing" className="service-card">
            <h3>Campagne phishing</h3>
            <p>Testez la vigilance de vos équipes sans risque.</p>
            <span className="price">À partir de 690 € HT</span>
          </a>
          <a href="/consulting" className="service-card">
            <h3>Consulting cyber</h3>
            <p>Audit, conformité, procédure de crise : on vous accompagne.</p>
            <span className="price">À partir de 1 490 € HT</span>
          </a>
        </div>
      </section>

      <section className="testimonial">
        <h2>Faite nous confiance</h2>
        <blockquote>
          Notre Cyber Enterprise peux permettre de passer de 18 % à 3 % de taux de clic sur une campagnes de phishing en 6 mois.
        </blockquote>
      </section>

      <section className="final-cta">
        <h2>Prêt à passer à l’action ?</h2>
        <p>Prenez 30 min avec un expert. Audit offert, sans obligation.</p>
        <a href="/auth/inscription" className="btn-primary">Réserver mon appel</a>
      </section>

      <style jsx>{`
        .hero {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
          padding: 3rem 1rem;
          max-width: 1100px;
          margin: auto;
        }
        .hero-text {
          flex: 1 1 320px;
        }
        .hero-text h1 {
          font-size: 2.25rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .hero-text p {
          font-size: 1.125rem;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        .hero-image {
          flex: 0 1 380px;
        }
        .hero-image img {
          width: 100%;
          height: auto;
        }
        .btn-primary {
          display: inline-block;
          background-color: #0369a1;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        .btn-primary:hover {
          background-color: #0284c7;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 2.5rem 1rem;
          background: #ffffff;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }
        .stat {
          text-align: center;
        }
        .stat strong {
          display: block;
          font-size: 2rem;
          color: #0369a1;
        }
        .stat span {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .services {
          padding: 3rem 1rem;
          max-width: 1100px;
          margin: auto;
        }
        .services h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax 300px, 1fr);
        }
        .service-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.2s;
        }
        .service-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .service-card h3 {
          margin-bottom: 0.5rem;
        }
        .service-card p {
          flex: 1;
          margin-bottom: 1rem;
          color: #4b5563;
        }
        .price {
          font-weight: 600;
          color: #0369a1;
        }

        .testimonial {
          background: #f3f4f6;
          padding: 3rem 1rem;
          text-align: center;
        }
        .testimonial blockquote {
          max-width: 700px;
          margin: auto;
          font-style: italic;
          font-size: 1.125rem;
          color: #111827;
        }
        .testimonial cite {
          display: block;
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .final-cta {
          text-align: center;
          padding: 3rem 1rem;
        }
        .final-cta h2 {
          margin-bottom: 0.5rem;
        }
        .final-cta p {
          margin-bottom: 1.5rem;
          color: #4b5563;
        }
      `}</style>
    </>
  )
}

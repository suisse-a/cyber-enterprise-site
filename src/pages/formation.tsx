export default function Formation() {
  return (
    <div className="card">
      <h1>Formation Sensibilisation Cyber</h1>
      <p className="intro">
        Réduisez de 70 % les incidents liés au facteur humain en 1 demi-journée.
      </p>

      <section>
        <h2>Ce que vos collaborateurs vont retenir</h2>
        <ul>
          <li>Reconnaître un e-mail de phishing en 5 secondes</li>
          <li>Créer un mot de passe fort ET facile à retenir</li>
          <li>Utiliser la double authentification partout</li>
          <li>Savoir à qui signaler un incident</li>
        </ul>
      </section>

      <section>
        <h2>Déroulé précis</h2>
        <table>
          <tbody>
            <tr><td>09h00</td><td>Bienvenue & enjeux cyber pour l’entreprise</td></tr>
            <tr><td>09h20</td><td>Top 5 des attaques 2024 (vidéos + cas réels)</td></tr>
            <tr><td>10h10</td><td>Atelier interactif : « Phishing ou pas ? »</td></tr>
            <tr><td>10h40</td><td>Pause 10 min</td></tr>
            <tr><td>10h50</td><td>Bons gestes au quotidien (MDP, MAJ, USB…)</td></tr>
            <tr><td>11h20</td><td>Quiz Kahoot (lot à gagner)</td></tr>
            <tr><td>11h40</td><td>Questions / réponses & remise d’attestation</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Livrables inclus</h2>
        <ul>
          <li>Support PDF illustré (40 pages)</li>
          <li>Fiche mémo A3 « 10 gestes barrières »</li>
          <li>Attestation de participation</li>
          <li>Enregistrement de la session (distanciel)</li>
        </ul>
      </section>

      <section>
        <h2>Tarifs 2025</h2>
        <p>490 € HT pour un groupe de 15 personnes max.</p>
        <p>30 € HT par personne supplémentaire.</p>
        <p>Remise 10 % si 2 sessions le même jour.</p>
      </section>

      <section className="cta">
        <a href="/auth/inscription" className="btn">Demander un devis</a>
      </section>

      <style jsx>{`
        .intro {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0369a1;
          margin-bottom: 2rem;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2rem;
        }
        td {
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid #e5e7eb;
        }
        td:first-child {
          font-weight: 600;
          color: #4b5563;
        }
        ul {
          padding-left: 1.2rem;
          margin-bottom: 2rem;
        }
        li {
          margin-bottom: 0.5rem;
        }
        .cta {
          text-align: center;
          margin-top: 2rem;
        }
        .btn {
          background-color: #0369a1;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        .btn:hover {
          background-color: #0284c7;
        }
      `}</style>
    </div>
  )
}

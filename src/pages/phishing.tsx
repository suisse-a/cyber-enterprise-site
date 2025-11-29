export default function Phishing() {
  return (
    <div className="card">
      <h1>Campagne de Phishing Simulé</h1>
      <p className="intro">
        Testez la vigilance de vos équipes sans risque, avec un rapport détaillé en 7 jours.
      </p>

      <section>
        <h2>Pourquoi une campagne ?</h2>
        <ul>
          <li>72 % des violations de données commencent par un e-mail de phishing</li>
          <li>Seulement 14 % des collaborateurs le signalent spontanément</li>
          <li>Une campagne permet de mesurer le taux de clic, de signalement et d’amélioration après formation</li>
        </ul>
      </section>

      <section>
        <h2>Déroulement type</h2>
        <ol>
          <li><strong>Brief 30 min</strong> : objectifs, cible, scénario (classique ou spear-phishing)</li>
          <li><strong>Création</strong> : e-mail + page de connexion fictive à votre image</li>
          <li><strong>Lancement</strong> : envoi progressif sur 3 jours (évite les spam filters)</li>
          <li><strong>Bilan</strong> : taux de clic, signalement, heatmap par service</li>
          <li><strong>Formation flash</strong> : 1h pour les « cliqueurs » (inclus)</li>
        </ol>
      </section>

      <section>
        <h2>Options disponibles</h2>
        <table>
          <thead>
            <tr><th>Formule</th><th>Nb e-mails</th><th>Rapport</th><th>Prix HT</th></tr>
          </thead>
          <tbody>
            <tr><td>Starter</td><td>50</td><td>PDF 5 pages</td><td>690 €</td></tr>
            <tr><td>Standard</td><td>150</td><td>PDF + dashboard</td><td>1 190 €</td></tr>
            <tr><td>Premium</td><td>500</td><td>Dashboard temps réel + recommandations</td><td>1 990 €</td></tr>
          </tbody>
        </table>
      </section>

      <section className="cta">
        <a href="/auth/inscription" className="btn">Tester mes équipes</a>
      </section>

      <style jsx>{`
        .intro { color: #047857; font-weight: 600; margin-bottom: 2rem; }
        ol li { margin-bottom: 0.75rem; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
        th, td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #e5e7eb; text-align: left; }
        th { background-color: #f9fafb; font-weight: 600; }
        .cta { text-align: center; margin-top: 2rem; }
        .btn { background-color: #047857; color: #fff; padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; }
        .btn:hover { background-color: #059669; }
      `}</style>
    </div>
  )
}

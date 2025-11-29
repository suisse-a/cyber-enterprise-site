export default function Consulting() {
  return (
    <div className="card">
      <h1>Consulting Cybersécurité</h1>
      <p className="intro">
        Faites diagnostiquer votre niveau de sécurité en 48 h et repartez avec un plan d’action priorisé.
      </p>

      <section>
        <h2>Nos prestations clés</h2>
        <ul>
          <li>Audit de sécurité réseau & postes (NIST)</li>
          <li>Matrice de risques & plan d’action ISO 27001</li>
          <li>Conformité RGPD – registre des traitements + PIA</li>
          <li>Sécurisation poste de travail (EDR, sauvegarde 3-2-1, chiffrement)</li>
          <li>Procédure de crise & exercice de table-top</li>
          <li>Accompagnement « CISO as-a-service » mensuel</li>
        </ul>
      </section>

      <section>
        <h2>Formules 2025</h2>
        <div className="grid">
          <div className="mini-card">
            <h3>Audit Express</h3>
            <p>2 jours sur site</p>
            <p>Rapport 10 pages + 5 recommandations urgentes</p>
            <p className="price">1 490 € HT</p>
          </div>
          <div className="mini-card">
            <h3>Audit Complet</h3>
            <p>5 jours + scan automatique</p>
            <p>Rapport détaillé + roadmap 12 mois</p>
            <p className="price">4 900 € HT</p>
          </div>
          <div className="mini-card">
            <h3>CISO as-a-service</h3>
            <p>2 jours/mois de support télé & visio</p>
            <p>Table de direction, veille, incident response</p>
            <p className="price">1 900 € HT/mois</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <a href="/auth/inscription" className="btn">Prendre un rendez-vous</a>
      </section>

      <style jsx>{`
        .intro { color: #b45309; font-weight: 600; margin-bottom: 2rem; }
        ul { margin-bottom: 2rem; padding-left: 1.2rem; }
        .grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); margin-bottom: 2rem; }
        .mini-card { background: #fffbeb; border: 1px solid #fbbf24; border-radius: 8px; padding: 1.5rem; }
        .mini-card h3 { margin-bottom: 0.5rem; }
        .price { font-weight: 700; color: #92400e; margin-top: 0.5rem; }
        .cta { text-align: center; margin-top: 2rem; }
        .btn { background-color: #b45309; color: #fff; padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; }
        .btn:hover { background-color: #d97706; }
      `}</style>
    </div>
  )
}

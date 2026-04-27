import React from 'react';
import '../styles/AntiRagging.css';

interface AntiRaggingProps {
  language: 'en' | 'hi';
  onBack: () => void;
}

const committeeMembers = [
  { name: 'Prof. PK Singh', phone: '9412138154' },
  { name: 'Prof. Dinesh Sharma', phone: '7417784525' },
  { name: 'Prof. Adheer Kumar', phone: '7579209947' },
];

const squadMembers = [
  { name: 'Prof. Pushpanjali Arya', phone: '9412910470' },
  { name: 'Prof. V.K Gupta', phone: '9412942400' },
  { name: 'Prof. Ashish Kumar Sharma', phone: '9719713300' },
  { name: 'Prof. Sunita Badola', phone: '9412112520' },
];

const AntiRagging: React.FC<AntiRaggingProps> = ({ onBack }) => {
  const rowCount = Math.max(committeeMembers.length, squadMembers.length);

  return (
    <div className="anti-ragging-page">
      <header className="anti-ragging-topbar">
        <div className="anti-ragging-topbar-inner">
          <h1>Anti-Ragging</h1>
          <nav className="anti-ragging-breadcrumb" aria-label="Anti-ragging navigation">
            <button type="button" onClick={onBack}>HOME</button>
            <span aria-hidden="true"></span>
            <strong>ANTI-RAGGING</strong>
          </nav>
        </div>
      </header>

      <main className="anti-ragging-content">
        <section className="anti-ragging-intro" aria-labelledby="anti-ragging-title">
          <h2 id="anti-ragging-title">NATIONAL RAGGING PREVENTION PROGRAMME</h2>

          <div className="anti-ragging-contact-block">
            <h3>National Anti-Ragging Helpline</h3>
            <p>24x7 Toll Free</p>
            <p>1800-180-5522</p>
            <p>
              <a href="mailto:helpline@antiragging.in">helpline@antiragging.in</a>
              <span> | </span>
              <a href="https://www.antiragging.in" target="_blank" rel="noopener noreferrer">www.antiragging.in</a>
            </p>
          </div>

          <div className="anti-ragging-contact-block">
            <h3>UGC Monitoring Agency</h3>
            <p>Centre for Youth (C4Y)</p>
            <p>
              <a href="mailto:antiragging@c4yindia.org">antiragging@c4yindia.org</a>
              <span> | </span>
              <a href="https://www.c4yindia.org" target="_blank" rel="noopener noreferrer">www.c4yindia.org</a>
            </p>
          </div>

          <h3 className="anti-ragging-officers-title">
            Contact Details of the Nodal Officers of Anti-Ragging Committee and Squad
          </h3>
        </section>

        <section className="anti-ragging-table-wrap" aria-label="Anti-ragging committee and squad contact details">
          <table className="anti-ragging-table">
            <thead>
              <tr>
                <th colSpan={2}>Anti-Ragging Committee (ARC)</th>
                <th colSpan={2}>Anti-Ragging Squad (ARS)</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rowCount }).map((_, index) => {
                const committeeMember = committeeMembers[index];
                const squadMember = squadMembers[index];

                return (
                  <tr key={index}>
                    <td>{committeeMember?.name ?? ''}</td>
                    <td>{committeeMember?.phone ?? ''}</td>
                    <td>{squadMember?.name ?? ''}</td>
                    <td>{squadMember?.phone ?? ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <section className="anti-ragging-warning" aria-label="Anti-ragging legal warning">
          <p>
            RAGGING IS A CRIMINAL OFFENCE AND THE CULPRITS WILL ATTRACT PUNITIVE ACTION AS MENTIONED IN THE UGC REGULATIONS
          </p>
          <p>
            (<a href="https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf" target="_blank" rel="noopener noreferrer">
              www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf
            </a>)
          </p>
          <p>
            <a href="https://www.ugc.ac.in" target="_blank" rel="noopener noreferrer">www.ugc.ac.in</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default AntiRagging;

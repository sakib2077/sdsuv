import React from 'react';
import '../styles/AffiliationAffiliatedColleges.css';

interface AffiliationItem {
  id: number;
  particulars: string;
  date?: string;
}

const affiliationItems: AffiliationItem[] = [
  {
    id: 1,
    particulars: 'Regarding granting affiliation to colleges and higher educational institutions',
    date: '31/10/2023'
  },
  {
    id: 2,
    particulars: 'Affiliation G.O. 2017',
    date: '20/10/2023'
  },
  {
    id: 3,
    particulars: 'Affiliation G.O. 14 Dec, 2016 Onwards'
  },
  {
    id: 4,
    particulars: 'Programme Upload Sheet - HED'
  },
  {
    id: 5,
    particulars: 'PG and UG Course file'
  },
  {
    id: 6,
    particulars: 'Affiliation session 2019-20'
  },
  {
    id: 7,
    particulars: 'Affiliation Letter (Session 2016-17)'
  },
  {
    id: 8,
    particulars: 'New Affiliation reg. (Session 2016-17)'
  },
  {
    id: 9,
    particulars: 'Affiliation G.O 2017-18 onwards'
  },
  {
    id: 10,
    particulars: 'New Affiliation reg. (Session 2016-17)'
  },
  {
    id: 11,
    particulars: '(15-10-2015) Regarding Faculty Affidavit.'
  },
  {
    id: 12,
    particulars: '(01-07-2015) B.Ed reg. ( N.C.T.E (Recognition Norms & Procedure) Regulation 2014)'
  },
  {
    id: 13,
    particulars: '16-03-2015 Affiliation Standard Reg.'
  },
  {
    id: 14,
    particulars: '17-01-2015 New Affiliation Performa.'
  },
  {
    id: 15,
    particulars: 'Performa of Rajbhawan(Affiliation)'
  },
  {
    id: 16,
    particulars: 'Fee Fixation Session (2017-18)'
  }
];

const AffiliationAffiliatedColleges: React.FC = () => {
  return (
    <main className="affiliation-page">
      <section className="affiliation-panel" aria-labelledby="affiliation-title">
        <div className="affiliation-titlebar">
          <h1 id="affiliation-title">Affiliation &amp; Affiliated colleges</h1>
        </div>

        <div className="affiliation-table-scroll">
          <table className="affiliation-table">
            <thead>
              <tr>
                <th scope="col">Particulars</th>
                <th scope="col">Date</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {affiliationItems.map((item) => (
                <tr key={item.id}>
                  <td className="affiliation-particulars">{item.particulars}</td>
                  <td className="affiliation-date">{item.date ?? ''}</td>
                  <td className="affiliation-details">
                    <a
                      className="affiliation-pdf-link"
                      href="#"
                      aria-label={`View PDF for ${item.particulars}`}
                      title="View PDF"
                    >
                      <span className="affiliation-pdf-icon" aria-hidden="true">
                        PDF
                      </span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default AffiliationAffiliatedColleges;

import React from 'react';
import '../styles/Announcements.css';

interface AnnouncementItem {
  id: number;
  particulars: string;
}

const announcementItems: AnnouncementItem[] = [
  { id: 1, particulars: 'B.Ed ENTRANCE TEST-2013 ADMIT CARD (PROVISIONAL)' },
  { id: 2, particulars: 'Advertisement Notification for the posts, 2013' },
  { id: 3, particulars: 'Updated Program of B.Ed Entrance Exam 2013-14' },
  { id: 4, particulars: 'Updated Program of B.Ed Entrance Exam 2013-14' },
  { id: 5, particulars: 'Exam Shedules of Session 2012-13' }
];

const Announcements: React.FC = () => {
  return (
    <main className="announcements-page">
      <header className="announcements-header">
        <div className="announcements-header-inner">
          <h1>Announcements</h1>
          <nav aria-label="Breadcrumb">
            <a href="#">HOME</a>
            <span aria-hidden="true">□</span>
            <a href="#">ANNOUNCEMENTS</a>
          </nav>
        </div>
      </header>

      <section className="announcements-panel" aria-labelledby="announcements-title">
        <div className="announcements-titlebar">
          <h2 id="announcements-title">Announcements</h2>
        </div>

        <div className="announcements-table-scroll">
          <table className="announcements-table">
            <thead>
              <tr>
                <th scope="col">Particulars</th>
                <th scope="col">Date</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {announcementItems.map((item) => (
                <tr key={item.id}>
                  <td className="announcements-particulars">{item.particulars}</td>
                  <td className="announcements-date"></td>
                  <td className="announcements-details">
                    <a className="announcements-pdf-link" href="#" aria-label={`View PDF for ${item.particulars}`} title="View PDF">
                      <span className="announcements-pdf-icon" aria-hidden="true">PDF</span>
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

export default Announcements;

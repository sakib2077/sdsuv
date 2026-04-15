import React from 'react';
import '../styles/DepartmentSecondaryPage.css';

interface DepartmentSecondaryPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
  departmentName: string;
}

interface StaffMember {
  name: string;
  image: string;
  role?: string;
  contact?: string;
  email?: string;
  cvLink?: string;
}

const DepartmentSecondaryPage: React.FC<DepartmentSecondaryPageProps> = ({
  language,
  onBack,
  departmentName
}) => {
  const mathematicsIntroParagraphs = [
    'Department of Mathematics, Pt. L. M. S. Campus, Sri Dev Suman Uttarakhand University, Rishikesh.',
    'The Department of Mathematics, Pt. L. M. S. Campus, Sri Dev Suman Uttarakhand University, Rishikesh, has consistently upheld its tradition of academic excellence, research innovation, and meaningful societal engagement. Offering undergraduate (B.Sc./B.A.), postgraduate (M.Sc./M.A.), and doctoral (Ph.D.) programs, the Department emphasizes strong theoretical foundations, applied mathematics, interdisciplinary research, and curricula aligned with the National Education Policy (NEP) 2020.',
    'Under the dynamic leadership of Prof. Anita Tomar (Head of Department), the Department has made significant contributions in Nonlinear Functional Analysis, Fixed Point Theory, Fractals, Mathematical Modelling, Fuzzy Sets, Computational Mathematics, Optimization Technique and Artificial Intelligence, as reflected in 170 publications in SCI/Scopus/WoS/UGC-CARE journals, 40 authored books, and three edited volumes. Faculty members actively contribute as invited speakers, editors, reviewers, chairpersons, subject experts, members of Boards of Governance, and curriculum developers at state, national, and international levels.',
    'In 2025, the Department achieved notable research milestones, with 23 research papers selected under the Chief Minister Excellent Research Paper Publication Incentive Scheme, one research project under the Chief Minister Research Encouragement Scheme, and significant innovation outcomes, including four design patents granted and two published.',
    'Faculty research excellence has received wide recognition through prestigious honors such as the Best Project Award (Advanced Refresher Course in Mathematics, IISc Bengaluru Challakere Campus, 2025), the Distinguished Service Award by the Vijnana Parishad of India (2025), the Devbhumi Education Excellence Award (2025), the Excellence in Research Award (UCOST, 2023), the Chief Minister Excellence and Good Governance Award (2020-21), the Women Scientist Award (UCOST, 2021), and the Teacher of the Year Award (2020).',
    'With sustained academic rigor, the Department has strengthened its academic visibility and global outreach through international collaborations, including an MoU with Southern Federal University, Russia, and academic collaborations with eminent scholars from Japan, Romania, Serbia, Turkey, Nepal, Saudi Arabia, and IITs. It has successfully organized over 20 international conferences, faculty development programmes, seminars, guest lectures, Mathematics Week celebrations, outreach activities, and entrepreneurship initiatives, fostering a vibrant academic and research ecosystem. Students are actively engaged in project-based learning, including innovative projects on Ancient Indian Mathematics and Artificial Intelligence, promoting experiential and interdisciplinary learning.',
    'With a dedicated team of experienced faculty, Prof. Anita Tomar, Prof. Dipa Sharma, Dr. Gaurav Varshney, and Dr. Pawan Joshi, along with 13 active research scholars, robust ICT integration, consistently excellent academic results, and notable student achievements in competitive examinations and public and private-sector selections, the Department continues to play a pivotal role in advancing the University mission of quality education, research excellence, and holistic student development.'
  ];

  const microbiologyIntroParagraphs = [
    'Sri Dev Suman Uttarakhand University, Pt. L.M.S. Campus, Rishikesh - Department of Microbiology.',
    'Established in 2023 as part of Sri Dev Suman Uttarakhand University, the Department of Microbiology at Pt. L.M.S. Campus, Rishikesh is dedicated to delivering high-quality education and training in M.Sc. Microbiology. With a focus on practical skills and industry relevance, the department equips students for careers in clinical/medical, food, biotechnology, industrial, agriculture, and research sectors.',
    'As a newly established department, Microbiology shares the well-equipped and established building of the MLT (Medical Laboratory Technology) Department. The infrastructure supports immersive learning with spacious classrooms, laboratories for hands-on experiments, a dedicated seminar room for lectures and discussions, a library, and computer systems with high-speed internet.',
    'Students have access to key instruments for microbiological studies, including autoclave, laminar air flow, microscope, incubator, centrifuge, vortex, hot-plate, Soxhlet apparatus, double distillation apparatus, gel electrophoresis, and colorimeter. These facilities support work in bacteriology, food microbiology, immunology, soil microbiology, medical microbiology, microbial biotechnology, and biochemistry.',
    'The department is supported by a skilled team: Dr. G.K. Dhingra (Coordinator), Dr. Bindu Devi (Guest Faculty - Microbiology), Mrs. Shalini Kotiyal (Guest Faculty - Microbiology), Mr. Arjun Palwal (Guest Faculty - Biochemistry and Genetic Engineering), Ms. Safia Hasan (Guest Faculty - Immunology and Pathology), and Mr. Devendra Bhatt (Lab Technician).',
    'The department has shown steady enrollment growth. The first batch (15 students) passed out in July 2025, with placements at AIIMS Rishikesh (Rishita Nautiyal, Ananya Deshwal, and Shubham as Project Assistants), Hans Foundation (Vineeta), Akums Drugs and Pharmaceutical Pvt. Ltd. (Amisha Pal and Shivani), and Psychotropics India Limited Pharmaceutical (Priyanka Aswal). The second batch has 13 students and the third batch has 20 students. Regular hospital and industrial visits enhance practical exposure and career readiness.'
  ];

  const musicIntroParagraphs = [
    'The Department of Music at Pt. Lalit Mohan Sharma Campus, Rishikesh, is a dynamic and creative part of the university. Its core goal is to help students understand the science of music and grow artistically and culturally.',
    'The department offers courses from Graduation up to Ph.D. level. Currently, around 150 students are studying music across various programs. At postgraduate level, the department offers M.A. in Music with specialization in Classical Music Vocal. At undergraduate level, under NEP, Music is offered as Major, Minor, Skill, and General Elective (GE). In research, the department currently has 3 registered Ph.D. scholars.',
    'The department is led by Dr. Shikha Mamgain (Head of Department). Despite a single-faculty structure, the department remains fully dedicated to the overall educational and cultural development of students.',
    'Music follows a multi-subject approach where students from Science and Commerce also opt for Music as a Skill or Elective subject. The department also plays a leading role in organizing university cultural events and national festivals.',
    'Students actively participate in university and external competitions. This year, Music students won the Winner Trophy in the Inter-Collegiate competition of Sri Dev Suman Uttarakhand University and also performed strongly at Inter-University level, bringing pride to the institution.'
  ];

  const politicalScienceIntroParagraphs = [
    'Department of Political Science, Sri Dev Suman Uttarakhand University, Pt. Lalit Mohan Sharma Campus, Rishikesh.',
    'Politics is one of the most socially meaningful disciplines and the study of Political Science helps students understand governance, public life, and solutions to contemporary issues. The subject opens diverse opportunities in civil services, law, journalism, media, entrepreneurship, teaching, and research.',
    'The Department offers B.A., M.A., and Ph.D. programmes with focus on political theory, comparative politics, public policy, and international relations. In line with NEP, it supports a research-oriented undergraduate framework with structured research guidelines for advanced semesters to strengthen analytical and methodological skills.',
    'At postgraduate level, the department has maintained excellent academic standards with strong mentoring and 100% pass performance. The department actively motivates students for UGC-NET in Political Science, Public Administration, and International Relations. So far, 14 students have qualified JRF/NET.',
    'The Ph.D. programme has been operational since 2023, with active research scholars contributing through publications in reputed peer-reviewed journals. Faculty members have produced books and 100+ research papers in national and international journals, reflecting sustained academic engagement.'
  ];

  const sanskritIntroParagraphs = [
    'Department of Sanskrit, Sri Dev Suman Uttarakhand University, Pt. Lalit Mohan Sharma Campus, Rishikesh.',
    'The Department of Sanskrit is dedicated to the academic study, preservation, and dissemination of Sanskrit language and literature. The department is currently served by Prof. Poonam Pathak, who oversees teaching, research, and academic administration.',
    'The department offers programmes at Undergraduate, Postgraduate, and Doctoral (Ph.D.) levels. Around 100 students are enrolled and actively pursuing Sanskrit studies.',
    'In addition to the core curriculum, the department also conducts Skill Development Courses, Ability Enhancement Courses, and Value Addition Courses at the undergraduate level, aligned with contemporary educational frameworks.',
    'These initiatives aim to strengthen students intellectual capacity, professional competence, and overall academic development while maintaining the traditional scholarly rigor of Sanskrit studies.'
  ];

  const sociologyIntroParagraphs = [
    'Department of Sociology, Sri Dev Suman Uttarakhand Vishwavidyalaya, Pt. L.M.S. Campus, Rishikesh.',
    'The Department of Sociology functions with a strong academic and research orientation under the guidance of Prof. (Dr.) Prashant Kumar Singh and Dr. Kiran Fartiyal. The department is committed to quality teaching, meaningful research, and academic mentoring.',
    'Prof. (Dr.) Prashant Kumar Singh, Professor and Head of Department and Dean, Faculty of Arts, is an experienced academician with significant teaching, administrative, and research contributions. He has published research papers, completed minor research projects, and supervised doctoral and postgraduate research.',
    'Dr. Kiran Fartiyal, Assistant Professor (Guest Faculty), has teaching and research experience with recognized publications and ICSSR project involvement. Her work has received awards including National Research Paper Award (2024) and International Eminent Young Scientist Award (2024-25).',
    'The department serves a large student community, with over 350 undergraduate students and more than 35 postgraduate students, along with active Ph.D. research scholars. It continues to contribute significantly to sociological education and research at the university.'
  ];

  const zoologyIntroParagraphs = [
    'University Department of Zoology, Pt. L.M.S. Campus, Rishikesh (Affiliated to Sri Dev Suman Uttarakhand University).',
    'The Department of Zoology has a rich academic culture and a strong track record of successfully running undergraduate, postgraduate, and research programmes for more than 35 years. Alumni and faculty from the department have contributed significantly to higher education and related academic fields.',
    'After the upgradation of Pt. Lalit Mohan Sharma Campus as part of Sri Dev Suman Uttarakhand University in September 2021, the department was strengthened as a University Department of Zoology. The department also contributed substantially to structuring NEP-2020 Zoology syllabus.',
    'Research in the department focuses on microbiological concerns of human health and environment, herbal drugs, cancer biology, insect science, fish biology, wildlife, and conservation biology. Multiple research scholars, including UGC-JRF, SLET, and RET qualified students, are currently pursuing Ph.D. work under faculty supervision.',
    'The department continues to strengthen research and laboratory facilities with achievements in Scopus/Web of Science/peer-reviewed publications, patents, books, book chapters, and Ph.D. supervision, while promoting interdisciplinary collaboration and advanced academic engagement.'
  ];

  const commerceManagementIntroParagraphs = [
    'Faculty of Commerce and Management, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of Commerce was established in 1973 and offers UG and PG programmes with specializations in Marketing, Finance, and Human Resource Management.',
    'Since Pt. L.M.S. Campus became part of Sri Dev Suman Uttarakhand University in 2021, B.Com and M.Com have continued under the faculty. In 2023, BBA was introduced and is running successfully, and efforts are ongoing to establish MBA.',
    'The faculty focuses on practical business skills, career readiness, and academic excellence. NEP was adopted in UG during session 2022-23 and in PG during session 2025-26.',
    'Over recent years, the faculty has contributed through workshops, seminars, webinars, international lecture series, and publications in reputed journals. In 2024, the Shodh Samarth Research Journal of Commerce, Management and Economics (online) was launched, with four issues published so far.',
    'Ph.D. in Commerce started in 2023 and research is actively ongoing. Students and faculty continue to achieve in NET/JRF, public service, entrepreneurship, and startup initiatives.',
    'Faculty achievements include 232 publications, 5 patents, 29 books, 6 edited books, 57 edited-book publications, and 11 awards and honours. Proposals are also being pursued under ICSSR and Chief Minister Research Project schemes.'
  ];

  const chemistryIntroParagraphs = [
    'Department of Chemistry, Pt. Lalit Mohan Sharma Campus, Rishikesh (Affiliated to Sri Dev Suman Uttarakhand University).',
    'The Department of Chemistry supports quality teaching, practical laboratory training, and research-oriented learning for students at undergraduate and postgraduate levels.',
    'The department has an experienced team of professors, associate professors, and assistant professors with expertise in inorganic chemistry, organic chemistry, physical chemistry, phytochemistry, medicinal and aromatic plants, organometallic chemistry, and analytical chemistry.',
    'Faculty members actively contribute through research publications, academic mentoring, curriculum development, and student guidance, strengthening both academic and professional outcomes in Chemistry.',
    'The department continues to emphasize scientific temperament, experimental skills, and interdisciplinary applications of chemistry for higher studies, research, and career development.'
  ];

  const physicsIntroParagraphs = [
    'Pt. L.M.S. Campus, Rishikesh (Affiliated to Sri Dev Suman Uttarakhand University) - Department of Physics.',
    'The Department of Physics is committed to quality teaching, research orientation, and strong conceptual training at undergraduate, postgraduate, and research level. The department supports students through classroom learning, laboratory practice, and continuous faculty mentoring.',
    'Core specialization areas represented in the department include Fluid Mechanics, Astrophysics, Nonlinear Dynamics, Electronics, Material Science (Theoretical), and Condensed Matter Physics. The department continues to strengthen its academic environment with experienced permanent faculty and diverse research interests.'
  ];

  const englishIntroParagraphs = [
    'Department of English, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of English is a well-established center for academic excellence and literary inquiry, committed to rigorous engagement with English language, literature, and critical practices.',
    'The department offers B.A. (English), M.A. (English), and Ph.D. (English), with a structured approach that integrates canonical texts, contemporary literary theory, critical methodologies, and language practices.',
    'Students develop language and communication skills through GE, SEC, and AEC components, along with strong training in literary analysis, academic writing, and research-oriented learning.',
    'The department supports preparation for diverse careers including teaching, writing, content development, research, and competitive examinations.'
  ];

  const homeScienceIntroParagraphs = [
    'Department of Home Science, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of Home Science supports interdisciplinary learning in nutrition, textiles, family studies, and community-centered development with a strong focus on practical application.',
    'The department promotes skill-based and research-oriented learning to prepare students for academic, professional, and entrepreneurial opportunities in Home Science and allied areas.',
    'It encourages student participation in extension activities, innovation, and socially relevant projects aligned with sustainable development and women empowerment.'
  ];

  const hindiIntroParagraphs = [
    'Department of Hindi, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of Hindi is committed to the study of Hindi language, literature, criticism, and cultural discourse with strong academic and research orientation.',
    'The department supports undergraduate, postgraduate, and research-level learning through classroom teaching, seminars, literary activities, and guided academic writing.',
    'It nurtures language proficiency, critical interpretation, and expression in Hindi while encouraging students to engage with contemporary and classical literature.'
  ];

  const historyIntroParagraphs = [
    'History Department, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of History is committed to quality teaching, research, and critical understanding of historical processes across local, national, and global contexts.',
    'The department currently serves a large student base across B.A. and M.A. programmes, and supports active research guidance at the postgraduate and research levels.',
    'With experienced faculty leadership, the department promotes historical inquiry through classroom learning, seminars, and research-oriented academic activities.'
  ];

  const botanyIntroParagraphs = [
    'Department of Botany, Pt. Lalit Mohan Sharma Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of Botany is a leading center for teaching and learning in plant sciences, with a long tradition of quality education and scientific training.',
    'Aligned with NEP-2020, the department offers B.Sc., M.Sc., and Ph.D. programs, covering microbiology, ecology, plant physiology, phytochemistry, cytogenetics, taxonomy, economic botany, and plant pathology.',
    'Faculty members are actively engaged in teaching, research, and supervision of undergraduate, postgraduate, and doctoral scholars across specialized areas such as phycology, mycology, ethnobotany, ecology, and agrotechnology.',
    'The department continues to strengthen research output and academic infrastructure through publications, books, book chapters, patents, and student-focused mentoring.'
  ];

  const isMathematics = departmentName === 'Mathematics';
  const isMicrobiology = departmentName === 'Microbiology';
  const isMusic = departmentName === 'Music';
  const isPoliticalScience = departmentName === 'Political Science';
  const isSanskrit = departmentName === 'Sanskrit';
  const isSociology = departmentName === 'Sociology';
  const isZoology = departmentName === 'Zoology';
  const isCommerceAndManagement = departmentName === 'Commerce and Management';
  const isChemistry = departmentName === 'Chemistry';
  const isPhysics = departmentName === 'Physics';
  const isEducation = departmentName === 'Education';
  const isEnglish = departmentName === 'English';
  const isHomeScience = departmentName === 'Home Science';
  const isHindi = departmentName === 'Hindi';
  const isHistory = departmentName === 'History';
  const isBotany = departmentName === 'Botany';

  const content = {
    en: {
      introTitle: 'Department Introduction',
      introText: `The Department of ${departmentName} is committed to academic excellence, research orientation, and student development through classroom learning, practical exposure, and mentorship.`,
      photosTitle: 'Department Photos',
      staffTitle: 'Department Staff',
      viewCv: 'View CV',
      role: 'Assistant Professor'
    },
    hi: {
      introTitle: 'Department Introduction',
      introText: `The Department of ${departmentName} is committed to academic excellence, research orientation, and student development through classroom learning, practical exposure, and mentorship.`,
      photosTitle: 'Department Photos',
      staffTitle: 'Department Staff',
      viewCv: 'View CV',
      role: 'Assistant Professor'
    }
  };

  const data = content[language];

  const staffMembers: StaffMember[] = isMathematics
    ? [
        {
          name: 'A.) Anita Tomar',
          role: 'Professor and Head, Department of Mathematics',
          contact: '+919410361825',
          image: '/img/mathematics/Department%20Of%20Mathematics/Mathematics.jpeg',
          cvLink: '/img/mathematics/Department%20Of%20Mathematics/Anita%20Tomar-CV%20Dec.%202025.pdf'
        }
      ]
    : isMicrobiology
      ? [
          {
            name: 'Dr. Bindu Devi (Ph. D in MICROBIOLOGY)',
            role: 'Guest faculty, Department of Microbiology.',
            contact: '+918168700712',
            email: 'bindu.thakur111@gmail.com',
            image: '/img/Administrator/COE2.jpeg',
            cvLink: '/img/microbiology/Updated-CV-Dr-Bindu-Devi-15-01-26.pdf'
          }
        ]
      : isPhysics
        ? [
            {
              name: 'Prof. Manoj Yadav',
              role: 'Professor, Department of Physics',
              contact: '+91941123788, +918279864316',
              email: 'dr_manoj_yadav_69@yahoo.co.in, manoj.sidhbali@gmail.com',
              image: '/img/Administrator/Manoj.jpg'
            },
            {
              name: 'Dr. B. P. Bahuguna',
              role: 'Professor, Department of Physics',
              contact: '+91941189386',
              email: 'bp_bahuguna@rediffmail.com',
              image: '/img/Administrator/AEC.jpg'
            },
            {
              name: 'Dr. Hemant Singh',
              role: 'Associate Professor, Department of Physics',
              contact: '+919456135800',
              email: 'hemantsinghparmar.uk@gmail.com',
              image: '/img/Administrator/hemant.jpg'
            }
          ]
        : isPoliticalScience
          ? [
              {
                name: 'Prof. Dr. Hemlata Mishra',
                role: 'Professor & Head, Department of Political Science',
                contact: '+919411166952',
                email: 'hemlata80@gmail.com',
                image: '/img/Administrator/uma1.jpg',
                cvLink: '/img/political-science/Hemlata-Mishra.docx'
              },
              {
                name: 'Dr. Dinesh Sharma',
                role: 'Professor, Department of Political Science',
                contact: '+917417784525',
                email: 'dineshshrm772@gmail.com',
                image: '/img/Administrator/dinesh.jpg',
                cvLink: '/img/political-science/Dinesh-Kumar-Sharma.docx'
              },
              {
                name: 'Prof. (Dr.) Durga Kant Pd. Chaudhary',
                role: 'Professor, Department of Political Science',
                contact: '+919411346372',
                email: 'dkpchaudhary@gmail.com, dkpchaudhary@rediffmail.com',
                image: '/img/Administrator/AEC.jpg',
                cvLink: '/img/political-science/Durga-Kant.docx'
              }
            ]
          : isSanskrit
            ? [
                {
                  name: 'Prof. Poonam Pathak',
                  role: 'Professor & HOD, Department of Sanskrit',
                  email: 'poonampathak2304@gmail.com',
                  image: '/img/Administrator/uma1.jpg',
                  cvLink: '/img/sanskrit/Poonam-Pathak-Bio-Data.pdf'
                }
              ]
            : isSociology
              ? [
                  {
                    name: 'Prof. (Dr.) Prashant Kumar Singh',
                    role: 'Professor, Head and Dean Faculty of Arts, Department of Sociology',
                    contact: '+919412138154',
                    email: 'drprashant1970@gmail.com',
                    image: '/img/Administrator/dinesh.jpg',
                    cvLink: '/img/sociology/Prof-Prashant-Kumar-Singh-CV.pdf'
                  },
                  {
                    name: 'Dr. Kiran Fartiyal',
                    role: 'Assistant Professor (Guest Faculty), Department of Sociology',
                    contact: '+918279441322',
                    email: 'fartiyalkiran@gmail.com',
                    image: '/img/Administrator/uma1.jpg',
                    cvLink: '/img/sociology/Updated-CV-2026-Kiran.pdf'
                  }
                ]
              : isZoology
                ? [
                    {
                      name: 'Professor (Dr.) Smita Badola',
                      role: 'Professor, Department of Zoology',
                      email: 'drsmitabadola@gmail.com',
                      image: '/img/Administrator/uma1.jpg',
                      cvLink: '/img/zoology/BIODATA-PROF-SMITA-BADOLA.pdf'
                    },
                    {
                      name: 'Dr. Surman Arya',
                      role: 'Professor, Department of Zoology',
                      contact: '+918279441322',
                      email: 'surmanaryadr69@gmail.com',
                      image: '/img/Administrator/hemant.jpg',
                      cvLink: '/img/zoology/Biodata-Prof-Surman-Arya.pdf'
                    },
                    {
                      name: 'Prof. Deo Mani Tripathi',
                      role: 'Professor & Head, Former Coordinator',
                      contact: '+919411742753, +919761239897',
                      email: 'dmtripathi31@gmail.com, dmimmuno10@gmail.com',
                      image: '/img/Administrator/Manoj.jpg',
                      cvLink: '/img/zoology/Ultimate-CV-15-Jan-2026.pdf'
                    }
                  ]
                : isChemistry
                  ? [
                      {
                        name: 'Dr. Shanti Prakash Sati',
                        role: 'Professor & Head, Department of Chemistry',
                        contact: '+917579110111',
                        email: 'satisp22@gmail.com',
                        image: '/img/Administrator/Manoj.jpg',
                        cvLink: '/img/chemistry/CURRICULUM-VITAE-Shanti-Prakash-Sati.docx'
                      },
                      {
                        name: 'Dr. Vibha Kumar',
                        role: 'Associate Professor, Department of Chemistry',
                        email: 'vibhasingh25@gmail.com',
                        image: '/img/Administrator/uma1.jpg',
                        cvLink: '/img/chemistry/CV-Vibha-Kumar.docx'
                      },
                      {
                        name: 'Dr. Ashish Kumar Sharma',
                        role: 'Professor, Department of Chemistry',
                        image: '/img/Administrator/hemant.jpg',
                        cvLink: '/img/chemistry/Dr-Ashish-Sharma.docx'
                      },
                      {
                        name: 'Dr. Seema',
                        role: 'Associate Professor, Department of Chemistry',
                        contact: '+919258138438',
                        email: 'sbaniwal1974@gmail.com, sbaniwal@rediffmail.com',
                        image: '/img/Administrator/COE2.jpeg',
                        cvLink: '/img/chemistry/Dr-Seema-CV-New-2026.docx'
                      },
                      {
                        name: 'Dr. Neha Bhatt',
                        role: 'Assistant Professor (Guest), Department of Chemistry',
                        contact: '+918384818010, +919760655758',
                        email: 'nehagairola1992@gmail.com',
                        image: '/img/Administrator/AEC.jpg',
                        cvLink: '/img/chemistry/Dr-Neha-Academic-CV.docx'
                      },
                      {
                        name: 'Dr. Rakesh Kumar Joshi',
                        role: 'Assistant Professor, Department of Chemistry',
                        contact: '+919412441598',
                        email: 'joshirk12@gmail.com',
                        image: '/img/Administrator/Pramod.jpg',
                        cvLink: '/img/chemistry/Dr-Rakesh-Joshi.doc'
                      },
                      {
                        name: 'Hitendra Singh',
                        role: 'Professor, Department of Chemistry',
                        email: 'hitensingh25@gmail.com',
                        image: '/img/Administrator/Vijay.jpg',
                        cvLink: '/img/chemistry/Hitendra-CV.docx'
                      },
                      {
                        name: 'Dr. Neeta Joshi',
                        role: 'Professor, Department of Chemistry',
                        contact: '+919412982875',
                        email: 'neeta_joshi000@yahoo.co.in',
                        image: '/img/Administrator/dinesh.jpg',
                        cvLink: '/img/chemistry/NJ-profile.docx'
                      }
                    ]
                  : isEnglish
                    ? [
                        {
                          name: 'Dr. Parul Mishra',
                          role: 'Assistant Professor, Department of English',
                          contact: '+919412935163, +918004440687',
                          email: 'dparulbhu@gmail.com',
                          image: '/img/Administrator/uma1.jpg',
                          cvLink: '/img/english/Dr-Parul-Mishra.docx'
                        },
                        {
                          name: 'Dr. Hemant Kumar Shukla',
                          role: 'Professor & H.O.D., Department of English',
                          contact: '+917500784114, +919897438142',
                          email: 'hemantkumar.shukla1@gmail.com',
                          image: '/img/Administrator/Manoj.jpg',
                          cvLink: '/img/english/Hemant-Shukla.docx'
                        },
                        {
                          name: 'Dr. Pramod Kumar Kukreti',
                          role: 'Professor, Department of English Literature',
                          contact: '+919528379117',
                          email: 'parmodkukreti3@gmail.com',
                          image: '/img/Administrator/Pramod.jpg',
                          cvLink: '/img/english/Dr-Pramod-Kumar-Kukreti.docx'
                        }
                      ]
                    : isHomeScience
                      ? [
                          {
                            name: 'Dr. Vandana Bhandari',
                            role: 'Assistant Professor (Guest Faculty), Department of Home Science',
                            email: 'bhandarivandana2016@gmail.com',
                            image: '/img/Administrator/uma1.jpg',
                            cvLink: '/img/home-science/Dr-Vandana-Bhandari-CV.docx'
                          }
                        ]
                      : isHindi
                        ? [
                            {
                              name: 'Prof. Kalpana Pant',
                              role: 'H.O.D., Department of Hindi',
                              image: '/img/Administrator/uma1.jpg',
                              cvLink: '/img/hindi/Department-of-Hindi.docx'
                            },
                            {
                              name: 'Prof. Adheer Kumar',
                              role: 'Professor, Department of Hindi',
                              contact: '+919411166951',
                              email: 'adheerkumar@gmail.com',
                              image: '/img/Administrator/Manoj.jpg',
                              cvLink: '/img/hindi/C-V-Adheer.pdf'
                            },
                            {
                              name: 'Prof. Mukti Nath Yadav',
                              role: 'Professor, Department of Hindi',
                              image: '/img/Administrator/dinesh.jpg',
                              cvLink: '/img/hindi/hindi-intro.docx'
                            }
                          ]
                        : isHistory
                          ? [
                              {
                                name: 'Prof. Sangeeta Mishra',
                                role: 'H.O.D., Department of History',
                                contact: '+919412965832',
                                email: 'sangeetamishra450@gmail.com',
                                image: '/img/Administrator/uma1.jpg',
                                cvLink: '/img/history/Prof-Sangeeta-Mishra-Biodata.pdf'
                              },
                              {
                                name: 'Dr. Arjun Singh',
                                role: 'Assistant Professor (Guest Faculty), Department of History',
                                contact: '+917500884084',
                                email: 'arjunarjun4727@gmail.com',
                                image: '/img/Administrator/Manoj.jpg',
                                cvLink: '/img/history/Dr-Arjun-Singh-CV.pdf'
                              }
                            ]
                          : isBotany
                            ? [
                                {
                                  name: 'Dr. Vidya Dhar Pandey',
                                  role: 'Professor & H.O.D., Department of Botany',
                                  contact: '+917895607411',
                                  email: 'pandeyvidya2@gmail.com',
                                  image: '/img/Administrator/Manoj.jpg',
                                  cvLink: '/img/botany/1-CV-Prof-VD-Pandey-Botany.docx'
                                },
                                {
                                  name: 'Dr. Gulshan Kumar Dhingra',
                                  role: 'Professor, Director (IQAC, Academics, R&D Cell), Department of Botany',
                                  contact: '+917017976632',
                                  email: 'gulshan_k_dhingra@yahoo.com',
                                  image: '/img/Administrator/dinesh.jpg',
                                  cvLink: '/img/botany/2-CV-Prof-GK-Dhingra-Botany.docx'
                                },
                                {
                                  name: 'Dr. Naveen Kumar Sharma',
                                  role: 'Professor, Department of Botany',
                                  contact: '+919412961991',
                                  email: 'drnksharma69@gmail.com',
                                  image: '/img/Administrator/AEC.jpg',
                                  cvLink: '/img/botany/3-CV-Prof-NK-Sharma-Botany.docx'
                                },
                                {
                                  name: 'Dr. Shalini Rawat',
                                  role: 'Associate Professor, Department of Botany',
                                  contact: '+919411575844',
                                  email: 'rawatshalini18041975@gmail.com',
                                  image: '/img/Administrator/uma1.jpg',
                                  cvLink: '/img/botany/4-CV-Dr-Shalini-Rawat-Botany.docx'
                                },
                                {
                                  name: 'Dr. Suniti Kumar Kuriyal',
                                  role: 'Assistant Professor, Department of Botany',
                                  contact: '+919456556249',
                                  email: 'suniti02kuriyal@gmail.com',
                                  image: '/img/Administrator/Pramod.jpg',
                                  cvLink: '/img/botany/5-CV-SK-Kuriyal-Botany.docx'
                                },
                                {
                                  name: 'Dr. Preeti Khanduri',
                                  role: 'Senior Assistant Professor, Department of Botany',
                                  contact: '+919690308081',
                                  email: 'khanduripreeti23@gmail.com',
                                  image: '/img/Administrator/COE2.jpeg',
                                  cvLink: '/img/botany/6-CV-Dr-Preeti-Khanduri-Botany.docx'
                                },
                                {
                                  name: 'Dr. Dinesh Singh',
                                  role: 'Guest Teacher, Department of Botany',
                                  contact: '+919456359137, +918279941800',
                                  email: 'dsrwt7@rediffmail.com, dsrwt7@gmail.com',
                                  image: '/img/Administrator/Vijay.jpg',
                                  cvLink: '/img/botany/7-CV-Dr-Dinesh-Singh.docx'
                                }
                              ]
    : [
        { name: `Dr. A. Sharma (${departmentName})`, image: '/img/Administrator/AEC.jpg' },
        { name: `Dr. R. Joshi (${departmentName})`, image: '/img/Administrator/Pramod.jpg' },
        { name: `Dr. N. Rawat (${departmentName})`, image: '/img/Administrator/Vijay.jpg' }
      ];

  const photos = isMathematics
    ? ['/img/mathematics/Department%20Of%20Mathematics/Mathematics.jpeg']
    : isMicrobiology
      ? ['/img/H3.jpg']
      : isSanskrit
        ? ['/img/H4.jpg']
      : isSociology
        ? ['/img/H2.jpg']
      : isZoology
        ? [
            '/img/zoology/zoology-faculty.jpeg',
            '/img/zoology/zoology-lab-pic1.jpeg',
            '/img/zoology/zoology-lab-pic2.jpeg',
            '/img/zoology/zoology-lab-pic3.jpeg',
            '/img/zoology/zoology-lab-pic4.jpeg'
          ]
      : isChemistry
        ? ['/img/chemistry/chemistry-lab-photo.jpeg']
      : isCommerceAndManagement
        ? ['/img/H3.jpg']
      : isPoliticalScience
        ? ['/img/H2.jpg']
      : isPhysics
        ? ['/img/physics/physics-lab-pic1.jpeg', '/img/physics/physics-lab-pic2.jpeg']
      : isEducation
        ? ['/img/education/education-group-photo.jpg']
      : isHomeScience
        ? ['/img/H4.jpg']
      : isHindi
        ? ['/img/hindi/hindi-department-group.jpeg']
      : isHistory
        ? ['/img/H2.jpg']
      : isBotany
        ? ['/img/botany/botany-department-group.jpeg']
    : ['/img/H2.jpg', '/img/H3.jpg', '/img/H4.jpg'];

  return (
    <div className="department-secondary-page">
      <div className="department-secondary-header">
        <button className="back-button" onClick={onBack}>
          {language === 'en' ? 'Back' : 'Back'}
        </button>
        <h1>{departmentName}</h1>
      </div>

      <div className="department-secondary-container">
        <section className="department-intro">
          <h2>{data.introTitle}</h2>
          {isMathematics ? (
            mathematicsIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isMicrobiology ? (
            microbiologyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isMusic ? (
            musicIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isPoliticalScience ? (
            politicalScienceIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isSanskrit ? (
            sanskritIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isSociology ? (
            sociologyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isZoology ? (
            zoologyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isChemistry ? (
            chemistryIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isCommerceAndManagement ? (
            commerceManagementIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isPhysics ? (
            physicsIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isEnglish ? (
            englishIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isHomeScience ? (
            homeScienceIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isHindi ? (
            hindiIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isHistory ? (
            historyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isBotany ? (
            botanyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{data.introText}</p>
          )}
        </section>

        <section className="department-photos">
          <h2>{data.photosTitle}</h2>
          <div className="department-photos-grid">
            {photos.map((photo, index) => (
              <div key={index} className="department-photo-card">
                <img src={photo} alt={`${departmentName} ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="department-staff">
          <h2>{data.staffTitle}</h2>
          <div className="department-staff-grid">
            {staffMembers.map((member, index) => (
              <div key={index} className="department-staff-card">
                <img src={member.image} alt={member.name} className="staff-image" />
                <h3>{member.name}</h3>
                <p>{member.role || data.role}</p>
                {member.contact && <p className="staff-contact">Contact: {member.contact}</p>}
                {member.email && <p className="staff-contact">Email: {member.email}</p>}
                <a href={member.cvLink || '#'} className="staff-cv-btn" target="_blank" rel="noreferrer">
                  {data.viewCv}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DepartmentSecondaryPage;

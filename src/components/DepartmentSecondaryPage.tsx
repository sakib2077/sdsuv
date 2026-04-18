import React from 'react';
import '../styles/DepartmentSecondaryPage.css';

interface DepartmentSecondaryPageProps {
  language: 'en' | 'hi';
  onBack: () => void;
  departmentName: string;
  setCurrentPage?: (page: string) => void;
}

interface StaffMember {
  name: string;
  image?: string;
  role?: string;
  contact?: string;
  email?: string;
  cvLink?: string;
  field?: string;
  qualification?: string;
  specialization?: string;
  keyHighlights?: string[];
  education?: Array<{
    degree: string;
    field?: string;
    specialization?: string;
  }>;
  researchWork?: Array<{
    title: string;
    description: string;
  }>;
  technicalSkills?: string[];
  publications?: Array<{
    type: string;
    items: string[];
  }>;
  other?: string[];
}

// Global variable to store selected teacher info
let selectedTeacherInfo: any = null;

const DepartmentSecondaryPage: React.FC<DepartmentSecondaryPageProps> = ({
  language,
  onBack,
  departmentName,
  setCurrentPage
}) => {
  const handleViewTeacherProfile = (member: StaffMember) => {
    selectedTeacherInfo = member;
    if (setCurrentPage) {
      setCurrentPage('teacher-profile');
    }
  };
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
    'The Department of Commerce came into existence in 1973. It offers UG and PG programmes in Commerce with specializations in Marketing, Finance, and Human Resource Management.',
    'In 2021, Pt. L.M.S. Campus became part of Sri Dev Suman Uttarakhand University. Since then, the Commerce faculty has continued running B.Com and M.Com programmes successfully.',
    'In 2023, the professional BBA programme (Bachelor of Business Administration) was introduced for the first time and is now running successfully. The department is also working to establish an MBA (Master of Business Administration).',
    'The Commerce department equips students with practical business skills, career readiness, and the ability to meet challenges in the external environment. NEP was adopted in UG for the 2022-2023 session and in PG for the 2025-2026 session.',
    'During the past five years, the department has made valuable contributions through workshops, seminars, webinars, international lecture series, and research publications in national and international journals.',
    'In 2024, the faculty started the Shodh Samarth Research Journal of Commerce, Management and Economics (online). Four issues of the journal have been published till date.',
    'The faculty members actively support students through academics and co-curricular activities. Students regularly qualify NET/JRF examinations, join government departments, pursue entrepreneurship, and some have launched their own startups.',
    'The department is also pursuing ICSSR and Chief Minister Research Project approvals, with some project proposals already submitted for review.'
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

  const geographyIntroParagraphs = [
    'Department of Geography, Pt. L.M.S. Campus, Rishikesh, Sri Dev Suman Uttarakhand University.',
    'The Department of Geography is a vital academic unit that focuses on the study of the Earth\'s physical and human environments. It offers courses and conducts research in the field of geography, which involves studying the Earth\'s surface, human societies, and the environment.',
    'The Department provides programs such as BA, M.A., and Ph.D. with specialized focus on Physical Geography, Human Geography, and Geographic Information Systems.',
    'The Department is committed to conducting research in various areas of geography, including environmental studies, urban planning, and regional development, while providing high-quality education and training to students equipped with theoretical knowledge and practical skills.',
    'The department aims to contribute to the development of advanced geographic knowledge and its applications, encourage critical thinking and analytical skills among students, and address real-world challenges such as environmental degradation, urbanization, sustainable development, and climate change adaptation.',
    'The department actively organizes events that blend geographic learning with Uttarakhand\'s rich cultural heritage, engaging students through cultural programs aimed at strengthening local identity and environmental awareness through fieldwork, seminars, and awareness initiatives tailored to the Himalayan region.'
  ];

  const normalizedDepartmentName = departmentName?.trim().toLowerCase();
  const isMathematics = normalizedDepartmentName === 'mathematics';
  const isMicrobiology = normalizedDepartmentName === 'microbiology';
  const isMusic = normalizedDepartmentName === 'music';
  const isPoliticalScience = normalizedDepartmentName === 'political science';
  const isSanskrit = normalizedDepartmentName === 'sanskrit';
  const isSociology = normalizedDepartmentName === 'sociology';
  const isZoology = normalizedDepartmentName === 'zoology';
  const isCommerceAndManagement = normalizedDepartmentName === 'commerce and management';
  const isEconomics = normalizedDepartmentName === 'economics';
  const isChemistry = normalizedDepartmentName === 'chemistry';
  const isPhysics = normalizedDepartmentName === 'physics';
  const isEducation = normalizedDepartmentName === 'education';
  const isEnglish = normalizedDepartmentName === 'english';
  const isHomeScience = normalizedDepartmentName === 'home science';
  const isHindi = normalizedDepartmentName === 'hindi';
  const isHistory = normalizedDepartmentName === 'history';
  const isBotany = normalizedDepartmentName === 'botany';
  const isGeography = normalizedDepartmentName === 'geography';

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
          name: 'Prof. Anita Tomar',
          role: 'Professor & Head, Department of Mathematics',
          field: 'Mathematics',
          qualification: 'M.Sc, M.Phil, Ph.D (Mathematics)',
          specialization: 'Fixed Point Theory, Fractals, Nonlinear Analysis',
          contact: '+919410361825',
          image: '/img/mathematics/Department%20Of%20Mathematics/Mathematics.jpeg',
          cvLink: '/img/mathematics/Department%20Of%20Mathematics/Anita%20Tomar-CV%20Dec.%202025.pdf',
          keyHighlights: [
            '100+ research publications with multiple books and chapters in prestigious journals',
            'Ph.D in Fixed Point Theory - advanced mathematics in differential equations and metric space theory',
            'Guided multiple Ph.D students in advanced research supervision',
            'Editor and reviewer for Scopus/Web of Science indexed journals',
            'Patent in computational fractal analysis (2025)',
            'International conference attendance including ICM and global academic exposure'
          ],
          education: [
            {
              degree: 'M.Sc',
              field: 'Mathematics',
              specialization: 'First Division'
            },
            {
              degree: 'M.Phil',
              field: 'Mathematics',
              specialization: 'First Division'
            },
            {
              degree: 'Ph.D',
              field: 'Fixed Point Theory & Mapping Theory',
              specialization: 'Mathematics'
            }
          ],
          researchWork: [
            {
              title: 'Fractals Analysis',
              description: 'Research on Julia sets, Mandelbrot sets, and fractal geometry with advanced computational methods'
            },
            {
              title: 'Fixed Point Theory',
              description: 'Advanced research in fixed point mappings and functional analysis in metric spaces'
            },
            {
              title: 'Mathematical Modeling',
              description: 'Differential equations and advanced mathematical modeling in nonlinear analysis'
            }
          ],
          technicalSkills: [
            'Fixed Point Theory & Functional Analysis',
            'Fractal Geometry & Julia/Mandelbrot Set Analysis',
            'Differential Equations & Nonlinear Analysis',
            'Metric Space Theory & Topology',
            'Mathematical Modeling & Computational Methods',
            'Advanced Matrix Analysis',
            'Complex Analysis in Mathematics',
            'Artificial Intelligence & Machine Learning applications in Mathematics'
          ],
          publications: [
            {
              type: 'Research Papers',
              items: [
                '104+ peer-reviewed research papers in SCI/Scopus/Web of Science journals',
                'Latest publications in 2025 on fractals and fixed point theory',
                'Papers on functional analysis and nonlinear differential equations'
              ]
            },
            {
              type: 'Books & Chapters',
              items: [
                '14+ book chapters in international publications',
                '3+ edited books on mathematics',
                'Authored books on Calculus, Algebra, Trigonometry, and Matrices'
              ]
            }
          ],
          other: [
            'Excellence in Research Award (2023)',
            'Women Scientist Award (2021)',
            'Teacher of the Year Award (2020)',
            'Chief Minister Excellence and Good Governance Award',
            'Distinguished Service Award by Vijnana Parishad of India (2025)',
            'Member of multiple mathematical societies and research organizations',
            'Global academic exposure with collaborations in Brazil and Europe',
            'Editorial roles in major international journals',
            'Attended International Congress of Mathematicians and global conferences'
          ]
        }
      ]
    : isMicrobiology
      ? [
          {
            name: 'Dr. Bindu Devi',
            role: 'Guest Faculty, Department of Microbiology',
            field: 'Microbiology',
            qualification: 'Ph.D. in Microbiology',
            specialization: 'Probiotics, Bioactive Compounds, Microbial Research',
            contact: '+918168700712',
            email: 'bindu.thakur111@gmail.com',
            image: '/img/Administrator/COE2.jpeg',
            cvLink: '/img/microbiology/Updated-CV-Dr-Bindu-Devi-15-01-26.pdf',
            keyHighlights: [
              'Ph.D. research on bioactive compounds from probiotics with genetic characterization',
              'Strong laboratory skills: DNA isolation & PCR, Microbial cultivation & identification, Chromatography techniques',
              'Hands-on expertise with major instruments: Autoclave, centrifuge, spectrophotometer, PCR & gel electrophoresis systems',
              'Multiple international publications and book chapters',
              'Research focus: Food microbiology, Probiotics, Antibiotic resistance, Fermented food science'
            ],
            education: [
              {
                degree: 'B.Sc',
                field: 'Botany, Zoology, Chemistry'
              },
              {
                degree: 'M.Sc',
                field: 'Microbiology',
                specialization: 'Biochemistry'
              },
              {
                degree: 'Ph.D',
                field: 'Microbiology',
                specialization: 'Biotechnology'
              }
            ],
            researchWork: [
              {
                title: 'M.Sc Thesis: Lactobacillus Growth Optimization',
                description: 'Growth optimization of Lactobacillus and interaction with food-borne pathogens'
              },
              {
                title: 'Ph.D Thesis: Bioactive Compounds Research',
                description: 'Purification of bioactive compounds and genetic study of probiotics'
              }
            ],
            technicalSkills: [
              'Microbial isolation & culture maintenance',
              'Biochemical & morphological identification',
              'DNA isolation & PCR techniques',
              'Chromatography (Gel filtration)',
              'DNA techniques and molecular characterization',
              'Autoclave and sterilization protocols',
              'Spectrophotometry and analytical techniques',
              'Gel electrophoresis and protein analysis'
            ],
            publications: [
              {
                type: 'Book Chapters',
                items: [
                  'Multiple chapters in Springer and Academic Press publications',
                  'Contributions to peer-reviewed academic volumes'
                ]
              },
              {
                type: 'Research Papers',
                items: [
                  'Actinomycete diversity studies (2024)',
                  'Genetic diversity studies (2025)',
                  'Food microbiology and pathogenic bacteria interactions'
                ]
              },
              {
                type: 'Review Articles',
                items: [
                  'Antibiotic resistance mechanisms and emerging challenges',
                  'Fermented foods and probiotic applications',
                  'Microbial applications in agriculture and food industry'
                ]
              }
            ],
            other: [
              'Experience in food microbiology and dairy research',
              'Work related to probiotics in milk and fermentation processes',
              'Book editor contribution (2024)',
              'Strong academic and research background in microbial biotechnology'
            ]
          }
        ]
      : isPhysics
        ? [
            {
              name: 'Prof. Manoj Yadav',
              role: 'Professor, Department of Physics',
              field: 'Physics',
              qualification: 'Ph.D in Physics (1993)',
              specialization: 'Fluid Mechanics, Astrophysics, Nonlinear Dynamics, Electronics',
              contact: '+91941123788, +918279864316',
              email: 'dr_manoj_yadav_69@yahoo.co.in, manoj.sidhbali@gmail.com',
              image: '/img/Administrator/Manoj.jpg',
              keyHighlights: [
                'Ph.D in Physics from 1993 with extensive teaching and research experience',
                'Expertise in Fluid Mechanics and Astrophysics',
                'Advanced knowledge in Nonlinear Dynamics and Electronics',
                'PG Diploma in Computer (Fortran, MS Office)',
                'LLB qualification demonstrating diverse academic background',
                'Senior faculty member with 30+ years of academic experience'
              ],
              education: [
                {
                  degree: 'B.Sc',
                  field: 'Physics, Chemistry, Mathematics (PCM)'
                },
                {
                  degree: 'M.Sc',
                  field: 'Physics'
                },
                {
                  degree: 'Ph.D',
                  field: 'Physics',
                  specialization: '1993'
                },
                {
                  degree: 'PG Diploma',
                  field: 'Computer Science',
                  specialization: 'Fortran, MS Office'
                },
                {
                  degree: 'LLB',
                  field: 'Law'
                }
              ],
              researchWork: [
                {
                  title: 'Fluid Mechanics Research',
                  description: 'Advanced studies in fluid dynamics and mechanics with applications to astrophysical phenomena'
                },
                {
                  title: 'Astrophysics Studies',
                  description: 'Research in astrophysical phenomena, stellar dynamics, and cosmological applications'
                },
                {
                  title: 'Nonlinear Dynamics',
                  description: 'Investigation of nonlinear dynamical systems and chaos theory applications'
                },
                {
                  title: 'Electronics & Instrumentation',
                  description: 'Design and development of electronic systems and instrumentation for physics experiments'
                }
              ],
              technicalSkills: [
                'Fluid Mechanics & Fluid Dynamics',
                'Astrophysics & Stellar Physics',
                'Nonlinear Dynamics & Chaos Theory',
                'Electronics & Circuit Design',
                'Fortran Programming',
                'MS Office & Computer Applications',
                'Scientific Instrumentation',
                'Experimental & Theoretical Physics'
              ],
              publications: [
                {
                  type: 'Research Areas',
                  items: [
                    'Fluid mechanics and astrophysical applications',
                    'Nonlinear dynamics in physical systems',
                    'Electronics and instrumental design'
                  ]
                }
              ],
              other: [
                'Senior faculty with 30+ years of academic experience',
                'Department of Physics, Pt. L.M.S Campus, Rishikesh',
                'Available for teaching, research, and academic mentoring',
                'Experience in both theoretical and applied physics',
                'Active contributor to physics education and student development'
              ]
            },
            {
              name: 'Dr. B. P. Bahuguna',
              role: 'Professor, Department of Physics',
              field: 'Physics',
              qualification: 'D.Phil in Physics (1992)',
              specialization: 'Electronics, Material Science (Theoretical)',
              contact: '+91941189386',
              email: 'bp_bahuguna@rediffmail.com',
              image: '/img/Administrator/AEC.jpg',
              keyHighlights: [
                'D.Phil in Physics from 1992 - senior experienced faculty member',
                'Specialization in Electronics and theoretical Material Science',
                'Expertise in condensed matter physics applications',
                'Strong background in theoretical physics and materials research',
                'Experience in both academic teaching and research supervision',
                '30+ years of contribution to physics education'
              ],
              education: [
                {
                  degree: 'B.Sc',
                  field: 'Physics, Chemistry, Mathematics (PCM)'
                },
                {
                  degree: 'M.Sc',
                  field: 'Physics'
                },
                {
                  degree: 'D.Phil',
                  field: 'Physics',
                  specialization: '1992'
                }
              ],
              researchWork: [
                {
                  title: 'Electronics Research',
                  description: 'Advanced research in electronic devices, circuits, and semiconductor physics'
                },
                {
                  title: 'Material Science (Theoretical)',
                  description: 'Theoretical studies of material properties, crystal structures, and solid-state physics'
                },
                {
                  title: 'Condensed Matter Physics',
                  description: 'Research in condensed matter systems and their applications in materials engineering'
                }
              ],
              technicalSkills: [
                'Electronics & Semiconductor Physics',
                'Material Science (Theoretical)',
                'Condensed Matter Physics',
                'Solid-State Physics',
                'Crystal Structure Analysis',
                'Physics Education & Curriculum Development',
                'Experimental & Computational Methods'
              ],
              publications: [
                {
                  type: 'Research Focus',
                  items: [
                    'Electronics and device physics',
                    'Theoretical material science studies',
                    'Condensed matter physics applications'
                  ]
                }
              ],
              other: [
                'Professor with 30+ years of academic experience',
                'Department of Physics, Pt. L.M.S Campus, Rishikesh',
                'Available for research supervision and academic mentoring',
                'Expertise in both theoretical and practical aspects of physics',
                'Active contributor to physics curriculum development'
              ]
            },
            {
              name: 'Dr. Hemant Singh',
              role: 'Associate Professor, Department of Physics',
              field: 'Physics',
              qualification: 'Ph.D from IIT Roorkee (2016)',
              specialization: 'Condensed Matter Physics',
              contact: '+919456135800',
              email: 'hemantsinghparmar.uk@gmail.com',
              image: '/img/Administrator/hemant.jpg',
              keyHighlights: [
                'Ph.D from prestigious IIT Roorkee - 2016',
                'Qualified CSIR-UGC NET with JRF qualification',
                'Specialization in Condensed Matter Physics',
                'Young researcher with modern research background',
                'IIT Roorkee doctoral training provides advanced research expertise',
                'Active researcher with focus on contemporary physics applications'
              ],
              education: [
                {
                  degree: 'B.Sc',
                  field: 'Physics, Chemistry, Mathematics (PCM)'
                },
                {
                  degree: 'M.Sc',
                  field: 'Physics'
                },
                {
                  degree: 'Ph.D',
                  field: 'Physics',
                  specialization: 'IIT Roorkee (2016)'
                },
                {
                  degree: 'CSIR-UGC NET',
                  field: 'Junior Research Fellowship (JRF)',
                  specialization: 'Qualified'
                }
              ],
              researchWork: [
                {
                  title: 'Condensed Matter Physics',
                  description: 'Research in condensed matter systems, electronic properties, and quantum phenomena'
                },
                {
                  title: 'Advanced Materials Study',
                  description: 'Investigation of advanced materials and their physical properties'
                },
                {
                  title: 'Quantum Physics Applications',
                  description: 'Application of quantum mechanics to condensed matter and materials science'
                }
              ],
              technicalSkills: [
                'Condensed Matter Physics',
                'Advanced Materials Science',
                'Quantum Physics & Quantum Mechanics',
                'Experimental Condensed Matter Physics',
                'Computational Physics Methods',
                'Research Methodology & Design',
                'Scientific Writing & Publication',
                'Physics Education & Student Mentoring'
              ],
              publications: [
                {
                  type: 'Research Expertise',
                  items: [
                    'Condensed matter physics and electronic properties',
                    'Advanced materials characterization',
                    'Quantum phenomena in solid-state systems'
                  ]
                }
              ],
              other: [
                'Associate Professor, Department of Physics, Pt. L.M.S Campus, Rishikesh',
                'IIT Roorkee background ensures cutting-edge research training',
                'CSIR-UGC NET qualified researcher',
                'Active in contemporary physics research',
                'Available for research supervision, teaching, and mentoring'
              ]
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
                  qualification: 'Ph.D in Sanskrit (2004)',
                  specialization: 'Sanskrit Literature, Vedas, Indian Knowledge System',
                  email: 'poonampathak2304@gmail.com',
                  image: '/img/Administrator/uma1.jpg',
                  cvLink: '/img/sanskrit/Poonam-Pathak-Bio-Data.pdf',
                  keyHighlights: [
                    'Ph.D in Sanskrit (2004) with specialized expertise in Vedic literature and philosophy',
                    'Qualified UGC NET (1995) - recognized scholar in Sanskrit studies',
                    'Professor & Head of Department - leading Sanskrit academic programs',
                    'Convener of Board of Studies & Research Degree Committee - curriculum design and academic planning',
                    'Member of Academic Council - institutional academic governance',
                    'Research expertise in Vedic texts, Ayurveda, and Indian traditional knowledge systems'
                  ],
                  education: [
                    {
                      degree: 'B.A',
                      field: 'Sanskrit, Hindi, Political Science',
                      specialization: 'Multi-disciplinary humanities approach'
                    },
                    {
                      degree: 'M.A',
                      field: 'Sanskrit'
                    },
                    {
                      degree: 'UGC NET',
                      field: 'Sanskrit',
                      specialization: 'Qualified (1995)'
                    },
                    {
                      degree: 'Ph.D',
                      field: 'Sanskrit',
                      specialization: 'Completed (2004)'
                    }
                  ],
                  researchWork: [
                    {
                      title: 'Vedic Literature & Philosophy',
                      description: 'In-depth research on Vedic texts, philosophical concepts, and their contemporary relevance'
                    },
                    {
                      title: 'Ayurveda Concepts in Sanskrit Texts',
                      description: 'Study of Ayurvedic principles and health concepts as documented in Sanskrit literature'
                    },
                    {
                      title: 'Environment & Sustainability from Vedic Perspective',
                      description: 'Research on ecological wisdom and environmental conservation principles in Vedic knowledge'
                    },
                    {
                      title: 'Indian Traditional Knowledge System',
                      description: 'Comprehensive study of indigenous knowledge systems preserved in Sanskrit literature'
                    }
                  ],
                  technicalSkills: [
                    'Sanskrit Language - Advanced proficiency',
                    'Vedic Studies & Interpretation',
                    'Ayurveda & Traditional Health Sciences',
                    'Academic Research & Scholarly Writing',
                    'Curriculum Design & Development',
                    'Academic Administration & Management',
                    'Bhagavad Gita & Upanishadic Philosophy',
                    'Sanskrit Grammar & Linguistics',
                    'Indian Knowledge Systems Documentation'
                  ],
                  publications: [
                    {
                      type: 'Books',
                      items: [
                        '3+ books on Sanskrit literature and Indian knowledge systems',
                        'Works on Vedic philosophy and traditional knowledge',
                        'Scholarly publications on Sanskrit studies and cultural preservation',
                        'Academic texts on Indian wisdom traditions'
                      ]
                    },
                    {
                      type: 'Book Chapters',
                      items: [
                        'Multiple chapters on Vedic health and knowledge systems',
                        'Contributions to international and national academic publications',
                        'Works on Ayurveda concepts in Sanskrit literature',
                        'Chapters on Indian traditional knowledge preservation'
                      ]
                    },
                    {
                      type: 'Research Papers',
                      items: [
                        'Multiple peer-reviewed papers (2013-2019+)',
                        'Papers on Bhagavad Gita and Vedic philosophy',
                        'Research on Sanskrit grammar and linguistics',
                        'Works on Indian traditional knowledge and sustainability',
                        'Publications on cultural and linguistic preservation'
                      ]
                    }
                  ],
                  other: [
                    'Guided multiple Ph.D students in Sanskrit studies',
                    'Presented research papers in international conferences',
                    'Active participation in national seminars and academic forums',
                    'Delivered invited talks at academic and cultural institutions',
                    'Strong advocate for preserving Indian traditional knowledge systems',
                    'Active member of academic committees and curriculum design initiatives',
                    'Combined expertise in research, teaching, and academic administration',
                    'Multilingual proficiency: Hindi, English, and Sanskrit'
                  ]
                }
              ]
            : isSociology
              ? [
                  {
                    name: 'Prof. (Dr.) Prashant Kumar Singh',
                    role: 'Professor, Head and Dean Faculty of Arts, Department of Sociology',
                    qualification: 'Ph.D in Sociology',
                    specialization: 'Social Change, Research Methodology, Policy Studies',
                    contact: '+919412138154',
                    email: 'drprashant1970@gmail.com',
                    image: '/img/Administrator/dinesh.jpg',
                    cvLink: '/img/sociology/Prof-Prashant-Kumar-Singh-CV.pdf',
                    keyHighlights: [
                      'Ph.D in Sociology with extensive expertise in social research and policy studies',
                      'Professor & Head of Department with 20+ years of academic and administrative experience',
                      'Dean of Faculty of Arts - institutional leadership and academic governance',
                      'Published 20+ peer-reviewed research papers in national and international journals',
                      'Completed 6 major research projects with field work and policy implications',
                      'Ph.D guide - supervised students with completed and ongoing research'
                    ],
                    education: [
                      {
                        degree: 'B.A',
                        field: 'Sociology'
                      },
                      {
                        degree: 'M.A',
                        field: 'Sociology'
                      },
                      {
                        degree: 'Ph.D',
                        field: 'Sociology',
                        specialization: 'Social Change and Development'
                      }
                    ],
                    researchWork: [
                      {
                        title: 'Alcohol Consumption & Society',
                        description: 'Research on social dimensions of alcohol use, cultural practices, and health implications in Indian communities'
                      },
                      {
                        title: 'Human-Wildlife Conflict',
                        description: 'Field-based research on conflicts between human settlements and wildlife, mitigation strategies and community adaptation'
                      },
                      {
                        title: 'AI Ethics & Media Influence',
                        description: 'Contemporary research on artificial intelligence ethics, media representation, and social impact in digital age'
                      },
                      {
                        title: 'Live-in Relationships & Law',
                        description: 'Sociological and legal research on changing relationship patterns and contemporary family structures in India'
                      },
                      {
                        title: 'Social Media & Society',
                        description: 'Research on social media impact on society, digital culture, and social change dynamics'
                      }
                    ],
                    technicalSkills: [
                      'Qualitative Research Methodology',
                      'Quantitative Data Analysis',
                      'Ethnographic Field Work',
                      'Policy Research & Analysis',
                      'Social Survey Design & Implementation',
                      'Academic Writing & Publication',
                      'Research Project Management',
                      'Departmental & Faculty Administration',
                      'Doctoral Student Supervision'
                    ],
                    publications: [
                      {
                        type: 'Research Papers',
                        items: [
                          'Over 20 peer-reviewed papers in national journals',
                          'International publications on social research',
                          'Papers on alcohol, health, and social change',
                          'Research on human-wildlife conflict and conservation',
                          'Contemporary studies on AI ethics and media influence',
                          'Publications on family, relationships, and law'
                        ]
                      },
                      {
                        type: 'Research Projects',
                        items: [
                          '6 completed major research projects',
                          'Field-based studies with community engagement',
                          'Policy-oriented research with practical applications',
                          'Inter-disciplinary research collaborations',
                          'Projects funded by government and research agencies'
                        ]
                      },
                      {
                        type: 'Doctoral Work',
                        items: [
                          'Ph.D guide for multiple students',
                          'Students with completed research and published work',
                          'Ongoing doctoral supervision',
                          'Research mentorship and academic guidance'
                        ]
                      }
                    ],
                    other: [
                      'Strong field work experience in rural and urban communities',
                      'Policy research contributions to government initiatives',
                      'Active member of academic and research committees',
                      'Regular presenter at national and international conferences',
                      'Contributor to curriculum development for Sociology programs',
                      'Experience in inter-disciplinary research collaboration',
                      'Known for integrating academic research with policy application',
                      'Leadership in institutional development and academic excellence'
                    ]
                  },
                  {
                    name: 'Dr. Kiran Fartiyal',
                    role: 'Assistant Professor (Guest Faculty), Department of Sociology',
                    qualification: 'Ph.D in Sociology',
                    specialization: 'Gender Studies, Digital Society, Cybercrime',
                    contact: '+918279441322',
                    email: 'fartiyalkiran@gmail.com',
                    image: '/img/Administrator/uma1.jpg',
                    cvLink: '/img/sociology/Updated-CV-2026-Kiran.pdf',
                    keyHighlights: [
                      'Ph.D in Sociology specializing in gender studies and digital society',
                      'Published 9+ research papers in peer-reviewed journals',
                      'National Research Paper Award recipient (2024) - recognition of research excellence',
                      'International Young Scientist Award - emerging scholar distinction',
                      'Active involvement in ICSSR-funded research projects',
                      'Research expertise in contemporary social issues: gender, cybercrime, workplace sociology'
                    ],
                    education: [
                      {
                        degree: 'B.A',
                        field: 'Sociology'
                      },
                      {
                        degree: 'M.A',
                        field: 'Sociology'
                      },
                      {
                        degree: 'Ph.D',
                        field: 'Sociology',
                        specialization: 'Gender Studies'
                      }
                    ],
                    researchWork: [
                      {
                        title: 'Gender Studies & Women Empowerment',
                        description: 'Research on gender relations, women\'s rights, and gender-based social issues in contemporary India'
                      },
                      {
                        title: 'Social Media Impact on Society',
                        description: 'Study of social media influence on behavior, relationships, and social dynamics in digital age'
                      },
                      {
                        title: 'Cybercrime & Women Safety',
                        description: 'Research on online harassment, cybercrime against women, digital safety, and legal frameworks'
                      },
                      {
                        title: 'Workplace Sociology',
                        description: 'Study of gender dynamics, workplace culture, and professional development in organizational settings'
                      }
                    ],
                    technicalSkills: [
                      'Gender Studies & Analysis',
                      'Qualitative Research Methods',
                      'Digital Society Research',
                      'Cybercrime & Online Safety Research',
                      'Survey Design & Data Collection',
                      'Academic Writing & Publication',
                      'Research Project Coordination',
                      'Gender-sensitive research methodology',
                      'Community engagement & fieldwork'
                    ],
                    publications: [
                      {
                        type: 'Research Papers',
                        items: [
                          '9+ peer-reviewed research papers published',
                          'Papers on gender studies and women\'s issues',
                          'Research on social media and digital society',
                          'Publications on cybercrime and online safety',
                          'Studies on workplace gender dynamics',
                          'Contemporary sociology of digital culture'
                        ]
                      },
                      {
                        type: 'Research Projects',
                        items: [
                          'ICSSR-funded research project involvement',
                          'Active research on contemporary social issues',
                          'Collaborative research initiatives',
                          'Field-based research with community participation'
                        ]
                      }
                    ],
                    other: [
                      'National Research Paper Award (2024) - recognition of research quality',
                      'International Young Scientist Award - emerging scholar distinction',
                      'Active participant in national research forums',
                      'Committed to bridging gender research and policy',
                      'Engaged in community education on digital safety and gender awareness',
                      'Regular conference presentations and academic contributions',
                      'Strong focus on applied research with social impact',
                      'Advocate for gender-inclusive research and teaching'
                    ]
                  }
                ]
              : isZoology
                ? [
                    {
                      name: 'Professor (Dr.) Smita Badola',
                      role: 'Professor, Department of Zoology',
                      qualification: 'Ph.D in Zoology',
                      specialization: 'Aquatic Biology, Fish & Fisheries, Wildlife Conservation, Avian Parasitology',
                      email: 'drsmitabadola@gmail.com',
                      image: '/img/Administrator/uma1.jpg',
                      cvLink: '/img/zoology/BIODATA-PROF-SMITA-BADOLA.pdf',
                      keyHighlights: [
                        '26+ years of dedicated research experience in zoological sciences',
                        'Additional Director (Research) - institutional research leadership',
                        'Director (International Student Cell) - global academic engagement',
                        'Published 38+ research papers in peer-reviewed journals',
                        'Editor of Scopus-indexed journal - editorial excellence',
                        'Specialization in aquatic biology, fisheries, wildlife conservation, and avian parasitology'
                      ],
                      education: [
                        {
                          degree: 'B.Sc',
                          field: 'Zoology'
                        },
                        {
                          degree: 'M.Sc',
                          field: 'Zoology'
                        },
                        {
                          degree: 'Ph.D',
                          field: 'Zoology',
                          specialization: 'Aquatic Biology & Parasitology'
                        }
                      ],
                      researchWork: [
                        {
                          title: 'Aquatic Biology & Fish Research',
                          description: 'Comprehensive research on aquatic ecosystems, fish biology, and aquatic organism physiology'
                        },
                        {
                          title: 'Fish & Fisheries',
                          description: 'Study of fish species, fishery management, conservation of aquatic resources, and sustainable aquaculture'
                        },
                        {
                          title: 'Wildlife Conservation',
                          description: 'Research on wildlife preservation, habitat management, and conservation strategies for biodiversity'
                        },
                        {
                          title: 'Avian Parasitology',
                          description: 'Study of parasitic organisms affecting birds, disease transmission, and control mechanisms'
                        }
                      ],
                      technicalSkills: [
                        'Aquatic Biology & Ecology',
                        'Fish & Fisheries Research',
                        'Parasitology Studies',
                        'Wildlife Conservation Science',
                        'Research Design & Data Analysis',
                        'Molecular Biology Techniques',
                        'Academic Research & Publications',
                        'International Journal Editing',
                        'Research Project Management'
                      ],
                      publications: [
                        {
                          type: 'Research Papers',
                          items: [
                            '38+ peer-reviewed research papers published',
                            'Papers on aquatic biology and fisheries',
                            'Research on wildlife conservation and biodiversity',
                            'Publications on avian parasitology and disease',
                            'International collaborative research publications',
                            'Impact-factor journal contributions'
                          ]
                        },
                        {
                          type: 'Editorial Work',
                          items: [
                            'Editor of Scopus-indexed journal',
                            'Peer review contributions to international journals',
                            'Editorial board member of research publications',
                            'Quality assessment of scientific research'
                          ]
                        }
                      ],
                      other: [
                        'Institutional Research Director - leading research initiatives',
                        'International Student Cell Director - global academic partnerships',
                        'Strong track record of research publications and collaborations',
                        'Regular presenter at national and international conferences',
                        'Active mentor for research scholars and doctoral students',
                        'Contributor to conservation and environmental awareness',
                        '26+ years of continuous research contribution',
                        'Known for excellence in aquatic and wildlife research'
                      ]
                    },
                    {
                      name: 'Prof. Surman Arya',
                      role: 'Professor, Department of Zoology',
                      qualification: 'Ph.D in Zoology',
                      specialization: 'Parasitic Entomology, Poultry Parasites',
                      contact: '+918279441322',
                      email: 'surmanaryadr69@gmail.com',
                      image: '/img/Administrator/hemant.jpg',
                      cvLink: '/img/zoology/Biodata-Prof-Surman-Arya.pdf',
                      keyHighlights: [
                        '25+ years combined teaching and research experience',
                        'Published 45 research papers in peer-reviewed journals',
                        'Completed UGC-funded major research project',
                        'Guided 50+ students through research and academic programs',
                        'Specialized expertise in parasitic entomology and poultry parasites',
                        'Strong research record spanning two and a half decades'
                      ],
                      education: [
                        {
                          degree: 'B.Sc',
                          field: 'Zoology'
                        },
                        {
                          degree: 'M.Sc',
                          field: 'Zoology'
                        },
                        {
                          degree: 'Ph.D',
                          field: 'Zoology',
                          specialization: 'Parasitic Entomology'
                        }
                      ],
                      researchWork: [
                        {
                          title: 'Parasitic Entomology',
                          description: 'Comprehensive study of parasitic insects, their biology, life cycles, and ecological roles'
                        },
                        {
                          title: 'Poultry Parasites Research',
                          description: 'Research on parasitic organisms affecting poultry, disease transmission, and control strategies in poultry farming'
                        },
                        {
                          title: 'Disease Vector Research',
                          description: 'Study of insects as disease vectors and their control in agricultural and public health contexts'
                        },
                        {
                          title: 'Applied Entomology',
                          description: 'Application of entomological research to practical solutions in agriculture and pest management'
                        }
                      ],
                      technicalSkills: [
                        'Parasitic Entomology & Taxonomy',
                        'Poultry Disease & Parasite Research',
                        'Insect Biology & Life Cycle Studies',
                        'Microscopy & Specimen Identification',
                        'Research Methodology & Analysis',
                        'UGC Research Project Management',
                        'Student Mentoring & Supervision',
                        'Academic Teaching & Laboratory Management',
                        'Scientific Writing & Publications'
                      ],
                      publications: [
                        {
                          type: 'Research Papers',
                          items: [
                            '45 peer-reviewed research papers published',
                            'Papers on parasitic entomology and insect biology',
                            'Research on poultry parasites and disease control',
                            'Publications on vector-borne disease transmission',
                            'Agricultural and veterinary parasitology research',
                            'National and international journal contributions'
                          ]
                        },
                        {
                          type: 'Research Projects',
                          items: [
                            'UGC-funded major research project (completed)',
                            'Field-based parasitological studies',
                            'Poultry farm research collaborations',
                            'Applied entomology research initiatives'
                          ]
                        }
                      ],
                      other: [
                        'Guided 50+ students in research and academic programs',
                        'Active mentor for master\'s and doctoral researchers',
                        'Regular presenter at scientific conferences',
                        'Contributed to parasitology education and awareness',
                        '25+ years of continuous teaching and research',
                        'Expert in poultry and agricultural entomology',
                        'Strong collaborative research networks',
                        'Recognized for research depth and student mentoring'
                      ]
                    },
                    {
                      name: 'Prof. Deo Mani Tripathi',
                      role: 'Professor & Head, Department of Zoology',
                      qualification: 'Ph.D in Zoology',
                      specialization: 'Immunology, Biotechnology, Herbal Medicine, Environmental & Wildlife Biology',
                      contact: '+919411742753, +919761239897',
                      email: 'dmtripathi31@gmail.com, dmimmuno10@gmail.com',
                      image: '/img/Administrator/Manoj.jpg',
                      cvLink: '/img/zoology/Ultimate-CV-15-Jan-2026.pdf',
                      keyHighlights: [
                        '37+ years of extensive research experience at international standards',
                        'International-level researcher with global recognition',
                        'Research background with CSIR, ICMR, ICAR - premier research organizations',
                        'Professor & Head of Department - institutional leadership and academic direction',
                        'Multiple awards and global academic recognition',
                        'Expertise spanning immunology, biotechnology, herbal medicine, and wildlife biology'
                      ],
                      education: [
                        {
                          degree: 'B.Sc',
                          field: 'Zoology'
                        },
                        {
                          degree: 'M.Sc',
                          field: 'Zoology'
                        },
                        {
                          degree: 'Ph.D',
                          field: 'Zoology',
                          specialization: 'Immunology & Biotechnology'
                        }
                      ],
                      researchWork: [
                        {
                          title: 'Immunology & Immune Response',
                          description: 'Advanced research on immunological mechanisms, antibody response, and immune system function'
                        },
                        {
                          title: 'Biotechnology Applications',
                          description: 'Application of biotechnology in biological research, genetic studies, and molecular techniques'
                        },
                        {
                          title: 'Herbal Medicine & Traditional Science',
                          description: 'Research on medicinal properties of plants, traditional knowledge systems, and herbal therapeutics'
                        },
                        {
                          title: 'Environmental & Wildlife Biology',
                          description: 'Study of wildlife, environmental conservation, biodiversity, and ecological relationships'
                        }
                      ],
                      technicalSkills: [
                        'Immunology & Immune System Research',
                        'Molecular Biology & Biotechnology',
                        'Genetic Engineering & Analysis',
                        'Herbal Medicine & Phytochemistry',
                        'Wildlife & Environmental Research',
                        'CSIR/ICMR Research Methodologies',
                        'Advanced Laboratory Techniques',
                        'International Research Standards',
                        'Academic Leadership & Administration'
                      ],
                      publications: [
                        {
                          type: 'Research Publications',
                          items: [
                            'Numerous peer-reviewed papers in international journals',
                            'Research on immunology and immune responses',
                            'Biotechnology and genetic research publications',
                            'Studies on medicinal plants and herbal therapeutics',
                            'Environmental and wildlife conservation research',
                            'CSIR/ICMR/ICAR project publications'
                          ]
                        },
                        {
                          type: 'Research Projects',
                          items: [
                            'CSIR (Council of Scientific and Industrial Research) projects',
                            'ICMR (Indian Council of Medical Research) collaborations',
                            'ICAR (Indian Council of Agricultural Research) initiatives',
                            'International research partnerships',
                            'Large-scale research programs with funding'
                          ]
                        }
                      ],
                      other: [
                        'International-level researcher with global recognition',
                        'Multiple awards and honors for research excellence',
                        'Former Coordinator with extensive institutional experience',
                        'Research association with premier Indian research organizations (CSIR, ICMR, ICAR)',
                        '37+ years of continuous research contribution',
                        'Known for integrating traditional knowledge with modern science',
                        'Strong international academic collaborations',
                        'Leader in advancing zoological research and environmental conservation'
                      ]
                    }
                  ]
                : isChemistry
                  ? [
                      {
                        name: 'Dr. Neeta Joshi',
                        role: 'Professor, Department of Chemistry',
                        contact: '+919412982875',
                        email: 'neeta_joshi000@yahoo.co.in',
                        image: '/img/Administrator/dinesh.jpg',
                        cvLink: '/img/chemistry/NJ-profile.docx',
                        keyHighlights: [
                          'M.Sc., Ph.D. with 25+ years of teaching & research experience',
                          'Expert in Phytochemistry, Organic Chemistry, Medicinal & Aromatic Plants',
                          'Specialized in Essential Oils and Bioactivity Studies',
                          'Guided 3 Ph.D. scholars successfully',
                          '22+ research papers in reputed international journals',
                          'Worked at Phytochemistry Lab (Nainital) and IVRI Bareilly'
                        ],
                        education: [
                          {
                            degree: 'M.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'Ph.D.',
                            field: 'Chemistry'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Phytochemical Analysis & Bioactivity Studies',
                            description: 'Research on medicinal plants, essential oils, and antimicrobial properties (1996–2002)'
                          },
                          {
                            title: 'Natural Product Evaluation',
                            description: 'Studies on aromatic plants and their therapeutic applications'
                          }
                        ],
                        technicalSkills: [
                          'Phytochemical analysis',
                          'Antimicrobial testing',
                          'Essential oil extraction',
                          'Natural product evaluation',
                          'Medicinal plant research',
                          'Bioactivity studies'
                        ],
                        publications: [
                          {
                            type: 'Research Papers',
                            items: [
                              '22+ research papers in international journals',
                              'Publications in Industrial Crops & Products',
                              'Papers in Chemistry & Biodiversity',
                              'Book chapters for Uttarakhand Open University'
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Dr. Shanti Prakash Sati',
                        role: 'Professor & Head, Department of Chemistry',
                        contact: '+917579110111',
                        email: 'satisp22@gmail.com',
                        image: '/img/Administrator/Manoj.jpg',
                        cvLink: '/img/chemistry/CURRICULUM-VITAE-Shanti-Prakash-Sati.docx',
                        keyHighlights: [
                          '27 years of teaching experience in Chemistry',
                          'Expertise in Inorganic Chemistry and Phytochemistry',
                          'Specialized in Medicinal Plants research',
                          'Strong academic leadership with multiple administrative roles',
                          'Conducted numerous workshops and seminars',
                          'Active in curriculum development and academic planning'
                        ],
                        education: [
                          {
                            degree: 'M.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'Ph.D.',
                            field: 'Chemistry'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Natural Products Research',
                            description: 'Research on medicinal plants and phytochemistry applications'
                          },
                          {
                            title: 'Academic Leadership',
                            description: 'Head of Department, Dean (Science), Principal roles'
                          }
                        ],
                        technicalSkills: [
                          'Inorganic Chemistry',
                          'Phytochemistry',
                          'Medicinal Plants research',
                          'Academic administration',
                          'Curriculum development',
                          'Workshop organization'
                        ]
                      },
                      {
                        name: 'Dr. Vibha Kumar',
                        role: 'Associate Professor, Department of Chemistry',
                        email: 'vibhasingh25@gmail.com',
                        image: '/img/Administrator/uma1.jpg',
                        cvLink: '/img/chemistry/CV-Vibha-Kumar.docx',
                        keyHighlights: [
                          'Ph.D. and M.Sc. from IIT Roorkee',
                          'CSIR-NET JRF Qualified with GATE (87.23 percentile)',
                          'Top ranks in M.Sc. examinations',
                          'Multiple research papers (2014–2024)',
                          'Focus on Structural Chemistry, Groundwater Analysis, and Biosensors',
                          'Authored books on Inorganic and Organic Chemistry'
                        ],
                        education: [
                          {
                            degree: 'B.Sc.',
                            field: 'Chemistry',
                            specialization: 'CCS University'
                          },
                          {
                            degree: 'M.Sc.',
                            field: 'Chemistry',
                            specialization: 'IIT Roorkee'
                          },
                          {
                            degree: 'Ph.D.',
                            field: 'Chemistry',
                            specialization: 'IIT Roorkee'
                          },
                          {
                            degree: 'CSIR-NET JRF',
                            field: 'Chemistry',
                            specialization: 'Qualified'
                          },
                          {
                            degree: 'GATE',
                            field: 'Chemistry',
                            specialization: '87.23 percentile'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Structural Chemistry Research',
                            description: 'Advanced studies in chemical structures and molecular analysis'
                          },
                          {
                            title: 'Groundwater Analysis',
                            description: 'Research on water quality and contamination studies'
                          },
                          {
                            title: 'Biosensor Development',
                            description: 'Development and application of chemical sensors'
                          }
                        ],
                        technicalSkills: [
                          'Structural Chemistry',
                          'Groundwater Analysis',
                          'Biosensor Technology',
                          'Analytical Chemistry',
                          'Research Methodology',
                          'Scientific Writing'
                        ],
                        publications: [
                          {
                            type: 'Research Papers',
                            items: [
                              '10+ papers in international journals (2014–2024)',
                              'Publications on structural chemistry and environmental analysis'
                            ]
                          },
                          {
                            type: 'Books',
                            items: [
                              'Inorganic Chemistry textbook',
                              'Organic Chemistry textbook'
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Dr. Ashish Kumar Sharma',
                        role: 'Professor, Department of Chemistry',
                        image: '/img/Administrator/hemant.jpg',
                        cvLink: '/img/chemistry/Dr-Ashish-Sharma.docx',
                        keyHighlights: [
                          'D.Phil from University of Allahabad',
                          'Research in Thermodynamics and Liquid Systems',
                          'Specialized in Binary & Ternary Mixtures and Hydrogen Bonding',
                          'Expertise in Ionic Liquids and Molecular Interactions',
                          'Member of Acoustical Society of India',
                          'Computational and experimental thermodynamics research'
                        ],
                        education: [
                          {
                            degree: 'B.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'M.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'D.Phil.',
                            field: 'Chemistry',
                            specialization: 'University of Allahabad'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Thermodynamics Research',
                            description: 'Experimental and computational studies on liquid systems'
                          },
                          {
                            title: 'Molecular Interaction Studies',
                            description: 'Research on binary & ternary mixtures, hydrogen bonding, and ionic liquids'
                          }
                        ],
                        technicalSkills: [
                          'Thermodynamics',
                          'Liquid Systems Analysis',
                          'Molecular Interaction Studies',
                          'Computational Chemistry',
                          'Acoustical Analysis',
                          'Research Methodology'
                        ],
                        other: [
                          'Member of Acoustical Society of India',
                          'Expert in experimental thermodynamics',
                          'Research on hydrogen bonding in liquid mixtures'
                        ]
                      },
                      {
                        name: 'Dr. Seema',
                        role: 'Associate Professor, Department of Chemistry',
                        contact: '+919258138438',
                        email: 'sbaniwal1974@gmail.com, sbaniwal@rediffmail.com',
                        image: '/img/Administrator/COE2.jpeg',
                        cvLink: '/img/chemistry/Dr-Seema-CV-New-2026.docx',
                        keyHighlights: [
                          'Ph.D. from IIT Roorkee in Organic Chemistry',
                          '14+ years of academic experience',
                          'Industry experience at PI Industries Ltd. and Jubilant Organosys',
                          'Research focus on Macrocycles Synthesis and Electrochemical Sensors',
                          'CSIR SRF Fellowship recipient',
                          'Multiple awards including NSS recognition'
                        ],
                        education: [
                          {
                            degree: 'M.Sc.',
                            field: 'Organic Chemistry'
                          },
                          {
                            degree: 'Ph.D.',
                            field: 'Chemistry',
                            specialization: 'IIT Roorkee'
                          },
                          {
                            degree: 'CSIR SRF Fellowship',
                            field: 'Chemistry',
                            specialization: 'Recipient'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Macrocycles Synthesis',
                            description: 'Research on synthesis and applications of macrocyclic compounds'
                          },
                          {
                            title: 'Electrochemical Sensors',
                            description: 'Development of sensors for chemical analysis'
                          },
                          {
                            title: 'Antimicrobial Studies',
                            description: 'Research on antimicrobial properties of chemical compounds'
                          }
                        ],
                        technicalSkills: [
                          'Organic Chemistry',
                          'Macrocycles Synthesis',
                          'Electrochemical Analysis',
                          'Antimicrobial Testing',
                          'Sensor Development',
                          'Research Methodology'
                        ],
                        publications: [
                          {
                            type: 'Books',
                            items: [
                              'Multiple books on Chemistry subjects',
                              'Textbooks for undergraduate and postgraduate levels'
                            ]
                          },
                          {
                            type: 'Research Papers',
                            items: [
                              'Multiple research papers (2023–2024)',
                              'Publications on macrocycles and sensors'
                            ]
                          }
                        ],
                        other: [
                          'NSS awards recipient',
                          'Active conference participation',
                          'Industry-academia collaboration experience'
                        ]
                      },
                      {
                        name: 'Dr. Neha Bhatt',
                        role: 'Assistant Professor (Guest), Department of Chemistry',
                        contact: '+918384818010, +919760655758',
                        email: 'nehagairola1992@gmail.com',
                        image: '/img/Administrator/AEC.jpg',
                        cvLink: '/img/chemistry/Dr-Neha-Academic-CV.docx',
                        keyHighlights: [
                          'Ph.D. in Physical Chemistry',
                          'Research in Chemical Kinetics and Oxidation Reactions',
                          'Studies on Nanoparticles, Antioxidants, and Groundwater Contamination',
                          'Multiple SCOPUS indexed publications',
                          'Assistant Professor (2022–2023) and current Guest Faculty',
                          'Authored books and chapters on Environmental Science'
                        ],
                        education: [
                          {
                            degree: 'B.Sc.',
                            field: 'PCM (Physics, Chemistry, Mathematics)'
                          },
                          {
                            degree: 'M.Sc.',
                            field: 'Analytical Chemistry'
                          },
                          {
                            degree: 'Ph.D.',
                            field: 'Physical Chemistry'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Chemical Kinetics Research',
                            description: 'Studies on reaction mechanisms and oxidation processes'
                          },
                          {
                            title: 'Nanoparticles Research',
                            description: 'Synthesis and applications of nanoparticles'
                          },
                          {
                            title: 'Environmental Chemistry',
                            description: 'Groundwater contamination and antioxidant studies'
                          }
                        ],
                        technicalSkills: [
                          'Chemical Kinetics',
                          'Oxidation Reactions',
                          'Nanoparticle Synthesis',
                          'Antioxidant Analysis',
                          'Groundwater Analysis',
                          'Thermodynamic Analysis'
                        ],
                        publications: [
                          {
                            type: 'Research Papers',
                            items: [
                              'Multiple SCOPUS indexed papers',
                              'Publications on nanoparticles and antioxidants',
                              'Papers on groundwater contamination studies'
                            ]
                          },
                          {
                            type: 'Books & Chapters',
                            items: [
                              'Books on Environmental Science',
                              'Chapters on Natural Products research'
                            ]
                          }
                        ]
                      },
                      {
                        name: 'Dr. Rakesh Kumar Joshi',
                        role: 'Assistant Professor, Department of Chemistry',
                        contact: '+919412441598',
                        email: 'joshirk12@gmail.com',
                        image: '/img/Administrator/Pramod.jpg',
                        cvLink: '/img/chemistry/Dr-Rakesh-Joshi.doc',
                        keyHighlights: [
                          'M.Sc. and D.Phil in Chemistry',
                          'Specialized in Organic Chemistry, Phytochemistry, and Natural Dyes',
                          'Extensive research papers (1993–2025)',
                          'Patents in Cyclopentane Production and Pollution Removal Systems',
                          'Teacher of the Year (2021)',
                          'Editor roles in academic journals'
                        ],
                        education: [
                          {
                            degree: 'M.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'D.Phil.',
                            field: 'Chemistry'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Organic Chemistry Research',
                            description: 'Studies on organic compounds and synthesis'
                          },
                          {
                            title: 'Phytochemistry',
                            description: 'Research on plant-based chemical compounds'
                          },
                          {
                            title: 'Natural Dyes',
                            description: 'Development and application of natural dyes'
                          },
                          {
                            title: 'Petrochemical Separation',
                            description: 'Research on petrochemical processes'
                          }
                        ],
                        technicalSkills: [
                          'Organic Chemistry',
                          'Phytochemistry',
                          'Natural Dyes Processing',
                          'Petrochemical Separation',
                          'Patent Development',
                          'Editorial Work'
                        ],
                        publications: [
                          {
                            type: 'Research Papers',
                            items: [
                              'Extensive research papers (1993–2025)',
                              'Publications in high-impact journals'
                            ]
                          },
                          {
                            type: 'Books',
                            items: [
                              'Organic Chemistry textbook',
                              'Physical Chemistry textbook',
                              'Fundamentals of Chemistry'
                            ]
                          }
                        ],
                        other: [
                          'Teacher of the Year (2021)',
                          'Editor in academic journals',
                          'ML-based education research patent',
                          'Pollution removal systems patent'
                        ]
                      },
                      {
                        name: 'Dr. Hitendra Singh',
                        role: 'Professor, Department of Chemistry',
                        email: 'hitensingh25@gmail.com',
                        image: '/img/Administrator/Vijay.jpg',
                        cvLink: '/img/chemistry/Hitendra-CV.docx',
                        keyHighlights: [
                          'Ph.D. from IIT Roorkee',
                          'Specialized in Organometallic and Bio-inorganic Chemistry',
                          'CSIR-NET and GATE qualified',
                          'Scientist-C (NIH Roorkee) and Director IQAC (15 years)',
                          '12+ research papers and 2 books + chapters',
                          'Active in Ph.D. supervision and editorial work'
                        ],
                        education: [
                          {
                            degree: 'B.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'M.Sc.',
                            field: 'Chemistry'
                          },
                          {
                            degree: 'Ph.D.',
                            field: 'Chemistry',
                            specialization: 'IIT Roorkee'
                          },
                          {
                            degree: 'CSIR-NET',
                            field: 'Chemistry',
                            specialization: 'Qualified'
                          },
                          {
                            degree: 'GATE',
                            field: 'Chemistry',
                            specialization: 'Qualified'
                          }
                        ],
                        researchWork: [
                          {
                            title: 'Organometallic Chemistry',
                            description: 'Research on organometallic compounds and their applications'
                          },
                          {
                            title: 'Bio-inorganic Chemistry',
                            description: 'Studies on metal complexes in biological systems'
                          },
                          {
                            title: 'Water Quality Analysis',
                            description: 'Research on water contamination and purification'
                          }
                        ],
                        technicalSkills: [
                          'Organometallic Chemistry',
                          'Bio-inorganic Chemistry',
                          'Water Quality Analysis',
                          'Research Supervision',
                          'Academic Administration',
                          'Editorial Work'
                        ],
                        publications: [
                          {
                            type: 'Research Papers',
                            items: [
                              '12+ research papers in reputed journals'
                            ]
                          },
                          {
                            type: 'Books & Chapters',
                            items: [
                              '2 books on Chemistry',
                              'Multiple book chapters'
                            ]
                          }
                        ],
                        other: [
                          'Ph.D. supervision experience',
                          'Editorial roles in journals',
                          'Professional memberships',
                          '15 years as Director IQAC'
                        ]
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
                          cvLink: '/img/english/Dr-Parul-Mishra.docx',
                          keyHighlights: [
                            'Ph.D. in English from BHU (2012)',
                            'UGC-NET Qualified (2005)',
                            'UGC Research Fellowship recipient',
                            'Diploma in IT from NIIT',
                            'Published poetry book "Aadhe Aadhe Chehre"',
                            'Delivered keynote lectures and organized training programs'
                          ],
                          education: [
                            {
                              degree: 'M.A. English',
                              field: 'English',
                              specialization: 'BHU'
                            },
                            {
                              degree: 'B.A. (Hons.) English',
                              field: 'English',
                              specialization: 'BHU'
                            }
                          ],
                          researchWork: [
                            {
                              title: 'Feminism',
                              description: 'Research on feminist themes in English literature'
                            },
                            {
                              title: 'Family relationships in literature',
                              description: 'Study of familial dynamics across modern and contemporary texts'
                            },
                            {
                              title: 'Works of Shashi Deshpande',
                              description: 'Critical analysis of Shashi Deshpande’s major novels'
                            }
                          ],
                          publications: [
                            {
                              type: 'Journal Papers',
                              items: ['Multiple journal papers published between 2009 and 2013']
                            },
                            {
                              type: 'Conference Papers',
                              items: ['45+ conference and seminar papers']
                            }
                          ],
                          other: [
                            'Sahitya Ratna Samman recipient (2024)',
                            'Organized faculty and student training programs',
                            'Delivered keynote lectures at academic events'
                          ]
                        },
                        {
                          name: 'Dr. Hemant Kumar Shukla',
                          role: 'Professor, Department of English',
                          contact: '+917500784114, +919897438142',
                          email: 'hemantkumar.shukla1@gmail.com',
                          image: '/img/Administrator/Manoj.jpg',
                          cvLink: '/img/english/Hemant-Shukla.docx',
                          keyHighlights: [
                            'Professor in English with deep expertise in theatre and comparative literature',
                            'Led a major research project funded at approximately ₹6.8 lakh',
                            'Published multiple research papers between 2022 and 2024',
                            'Authored UOU books on American Literature',
                            'Active in Indian English literature and cultural studies'
                          ],
                          education: [
                            {
                              degree: 'Ph.D.',
                              field: 'English',
                              specialization: 'Brechtian Theatre & Uttarakhand Theatre'
                            },
                            {
                              degree: 'M.Phil',
                              field: 'English',
                              specialization: 'Reading Comprehension'
                            }
                          ],
                          researchWork: [
                            {
                              title: 'Theatre and Cultural Studies',
                              description: 'Research focusing on theatre traditions and cultural narratives in India'
                            },
                            {
                              title: 'Comparative Literature',
                              description: 'Study of literature across cultures, with emphasis on Indian and Western texts'
                            }
                          ],
                          technicalSkills: [
                            'Theatre studies',
                            'Comparative literature',
                            'Indian English literature',
                            'Academic research and project management'
                          ],
                          publications: [
                            {
                              type: 'Research Papers',
                              items: [
                                'Multiple papers published from 2022 to 2024 on Anita Desai, Sudha Murthy, Sylvia Plath, and Dalit literature'
                              ]
                            },
                            {
                              type: 'Books & Chapters',
                              items: ['American Literature (UOU publications)', 'Literary analysis chapters']
                            }
                          ],
                          other: [
                            'Professor at SDSU University since 2021',
                            'Extensive teaching experience in government and higher education institutions'
                          ]
                        },
                        {
                          name: 'Dr. Pramod Kumar Kukreti',
                          role: 'Professor, Department of English Literature',
                          contact: '+919528379117',
                          email: 'parmodkukreti3@gmail.com',
                          image: '/img/Administrator/Pramod.jpg',
                          cvLink: '/img/english/Dr-Pramod-Kumar-Kukreti.docx',
                          keyHighlights: [
                            'D.Phil. in English with specialization in Twentieth Century Literature',
                            'Research interest in Uttarakhand folk literature',
                            'Co-investigator on government-funded research projects'
                          ],
                          education: [
                            {
                              degree: 'D.Phil.',
                              field: 'English',
                              specialization: 'HNB Garhwal University'
                            },
                            {
                              degree: 'M.Phil',
                              field: 'English'
                            },
                            {
                              degree: 'M.A. English',
                              field: 'English'
                            },
                            {
                              degree: 'B.Sc.',
                              field: 'Science'
                            }
                          ],
                          researchWork: [
                            {
                              title: 'Folk Literature of Uttarakhand',
                              description: 'Study of regional folk narratives and cultural traditions in Uttarakhand'
                            },
                            {
                              title: 'Govt-funded Research Projects',
                              description: 'Role as co-investigator on academic and cultural studies projects'
                            }
                          ],
                          publications: [
                            {
                              type: 'Book Chapters',
                              items: ['Chapter on moral values in Indian youth']
                            }
                          ],
                          other: [
                            'Faculty at SDSU University since 2021',
                            'Former government college teaching experience from 2005 to 2021'
                          ]
                        }
                      ]
                    : isHomeScience
                      ? [
                          {
                            name: 'Dr. Vandana Bhandari',
                            role: 'Assistant Professor (Guest Faculty), Department of Home Science',
                            field: 'Home Science',
                            qualification: 'Ph.D in Textile & Apparel Designing',
                            specialization: 'Textile Designing, Natural Dyes, Nanotechnology in Textiles',
                            email: 'bhandarivandana2016@gmail.com',
                            image: '/img/Administrator/uma1.jpg',
                            cvLink: '/img/home-science/Dr-Vandana-Bhandari-CV.docx',
                            keyHighlights: [
                              'Ph.D in Textile & Apparel Designing with expertise in innovative textile technologies',
                              'Qualified UGC NET in Home Science - recognized academic researcher',
                              'Young Scientist Award recipient (UCOST, 2022)',
                              'Specialization in sustainable textiles and nanotechnology applications',
                              'Research combining traditional art (Aipan designs) with modern science',
                              'Focus on women empowerment through textile crafts and entrepreneurship'
                            ],
                            education: [
                              {
                                degree: 'B.Sc',
                                field: 'Home Science',
                                specialization: 'GBPUAT'
                              },
                              {
                                degree: 'M.Sc',
                                field: 'Clothing & Textiles'
                              },
                              {
                                degree: 'Ph.D',
                                field: 'Textile & Apparel Designing'
                              },
                              {
                                degree: 'UGC NET',
                                field: 'Home Science',
                                specialization: 'Qualified'
                              }
                            ],
                            researchWork: [
                              {
                                title: 'Nanotechnology in Textiles',
                                description: 'Research on integration of nano particles in textile design and functionality enhancement'
                              },
                              {
                                title: 'Natural Dyes & Sustainable Textiles',
                                description: 'Development of eco-friendly dyeing methods using natural dyes for sustainable textile production'
                              },
                              {
                                title: 'Traditional Art & Textile Design',
                                description: 'Research on Aipan and Madhubani folk art applied to modern textile designing and cultural preservation'
                              },
                              {
                                title: 'Women Empowerment Through Crafts',
                                description: 'Initiatives for empowering women through traditional textile crafts and skill development'
                              }
                            ],
                            technicalSkills: [
                              'Textile Designing & Pattern Making',
                              'Nanotechnology Applications in Textiles',
                              'Natural Dye Processing & Eco-friendly Methods',
                              'Apparel Designing & Construction',
                              'Textile Sustainability & Green Practices',
                              'Traditional Folk Art Integration (Aipan, Madhubani)',
                              'Textile Innovation & Research',
                              'Fashion Science & Textile Technology',
                              'Material Science in Textiles'
                            ],
                            publications: [
                              {
                                type: 'Research Papers',
                                items: [
                                  'Multiple research papers published (2019-2023)',
                                  'Papers on nanotechnology in textiles and sustainability',
                                  'Research on eco-friendly dyeing processes',
                                  'Publications on traditional textile arts and cultural preservation'
                                ]
                              },
                              {
                                type: 'Book Chapters',
                                items: [
                                  'Book chapters in international publications (Wiley)',
                                  'Contributions on textile sustainability and innovation',
                                  'Works on folk art in contemporary textile design',
                                  'Chapters on women empowerment through textiles'
                                ]
                              },
                              {
                                type: 'Research Topics',
                                items: [
                                  'Nanotechnology in textile applications',
                                  'Eco-friendly dyeing and sustainable textiles',
                                  'Folk art (Aipan, Madhubani) integration in design',
                                  'Textile sustainability and environmental impact'
                                ]
                              }
                            ],
                            other: [
                              'Young Scientist Award (UCOST, 2022) - recognition of research excellence',
                              'Assistant Professor (Guest Faculty), Department of Home Science, Pt. L.M.S Campus',
                              'Strong profile combining traditional + modern research approaches',
                              'Research connects science, fashion, and cultural heritage',
                              'Active focus on real-world applications in textiles and women empowerment',
                              'UGC NET qualified with strong academic credentials',
                              'Recent publication record (2019-2023) demonstrates active research engagement',
                              'Available for teaching, research guidance, and skill development programs'
                            ]
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
                                role: 'Head of Department, Department of History',
                                field: 'History',
                                qualification: 'Ph.D in History',
                                specialization: 'Ancient Indian Studies, Vedic Culture, Buddhism & Jainism',
                                contact: '+919412965832',
                                email: 'sangeetamishra450@gmail.com',
                                cvLink: '/img/history/Prof-Sangeeta-Mishra-Biodata.pdf',
                                keyHighlights: [
                                  'Head of Department with 30+ years of academic experience',
                                  'Ph.D in History specializing in Ancient Indian studies',
                                  'Expertise in Vedic culture, Buddhism, and Jainism',
                                  'Member of Syllabus Committee for UG, PG, and Ph.D programs',
                                  'Editorial board member for academic journals',
                                  'Published numerous research papers and book chapters (2010-2025)'
                                ],
                                education: [
                                  {
                                    degree: 'B.A',
                                    field: 'History'
                                  },
                                  {
                                    degree: 'M.A',
                                    field: 'Ancient History'
                                  },
                                  {
                                    degree: 'Ph.D',
                                    field: 'History',
                                    specialization: 'Ancient Indian Studies'
                                  }
                                ],
                                researchWork: [
                                  {
                                    title: 'Ancient Indian Civilization',
                                    description: 'Research on ancient Indian civilization, culture, and societal structures'
                                  },
                                  {
                                    title: 'Vedic Culture & Traditions',
                                    description: 'In-depth study of Vedic traditions, rituals, and their influence on Indian society'
                                  },
                                  {
                                    title: 'Buddhism & Jainism Studies',
                                    description: 'Research on Buddhist and Jain philosophies and their historical development'
                                  },
                                  {
                                    title: 'Religion & Society',
                                    description: 'Analysis of women and society in historical context across different periods'
                                  }
                                ],
                                technicalSkills: [
                                  'Ancient History Research & Analysis',
                                  'Vedic Studies & Sanskrit Knowledge',
                                  'Buddhist & Jain Philosophy Studies',
                                  'Archaeological Research Methods',
                                  'Historical Documentation & Analysis',
                                  'Curriculum Design & Development',
                                  'Academic Writing & Publishing',
                                  'Environmental History',
                                  'Social History Analysis'
                                ],
                                publications: [
                                  {
                                    type: 'Research Papers',
                                    items: [
                                      'Large number of research papers published (2010-2025)',
                                      'Topics: Ancient culture, religion, environment, and society',
                                      'Published in national and international academic journals'
                                    ]
                                  },
                                  {
                                    type: 'Book Chapters',
                                    items: [
                                      'Multiple book chapters in edited volumes',
                                      'Contributions to academic publications on Indian history',
                                      'Works on Vedic studies and ancient civilizations'
                                    ]
                                  }
                                ],
                                other: [
                                  'Member of Syllabus Committee (UG, PG, PhD levels)',
                                  'Editorial board member for academic journals',
                                  'Former Principal with administrative experience',
                                  'Organizer of webinars and academic events',
                                  'Active participant in national and international conferences',
                                  'Mentor to research scholars and graduate students',
                                  'Focus on Indian traditional knowledge and cultural heritage',
                                  'Department has 440+ students (B.A to M.A) and 3 active research scholars'
                                ]
                              },
                              {
                                name: 'Dr. Arjun Singh',
                                role: 'Assistant Professor (Guest Faculty), Department of History',
                                field: 'History',
                                qualification: 'Ph.D in History (2022)',
                                specialization: 'Himalayan History, Urbanization, Colonial Studies',
                                contact: '+917500884084',
                                email: 'arjunarjun4727@gmail.com',
                                image: '/img/Administrator/Manoj.jpg',
                                cvLink: '/img/history/Dr-Arjun-Singh-CV.pdf',
                                keyHighlights: [
                                  'Ph.D in History from 2022 - recent doctorate holder',
                                  'Qualified NET (National Eligibility Test) - multiple times',
                                  'Qualified JRF (Junior Research Fellowship) from ICHR',
                                  'Specialization in Himalayan history and regional studies',
                                  'Research focus on urbanization and colonial development',
                                  'Active researcher with publications (2019-2024)'
                                ],
                                education: [
                                  {
                                    degree: 'B.A',
                                    field: 'History & Political Science'
                                  },
                                  {
                                    degree: 'M.A',
                                    field: 'History'
                                  },
                                  {
                                    degree: 'Ph.D',
                                    field: 'History',
                                    specialization: '2022'
                                  },
                                  {
                                    degree: 'NET',
                                    field: 'National Eligibility Test',
                                    specialization: 'Qualified (Multiple times)'
                                  },
                                  {
                                    degree: 'JRF',
                                    field: 'Junior Research Fellowship (ICHR)',
                                    specialization: 'Qualified'
                                  }
                                ],
                                researchWork: [
                                  {
                                    title: 'Himalayan Regional History',
                                    description: 'Research on the history, culture, and development of Himalayan regions'
                                  },
                                  {
                                    title: 'Urbanization Studies',
                                    description: 'Analysis of urban development and urbanization processes in Indian history'
                                  },
                                  {
                                    title: 'Colonial & Military History',
                                    description: 'Studies on colonial period, military history, and their impact on Indian society'
                                  }
                                ],
                                technicalSkills: [
                                  'Himalayan History Research',
                                  'Urbanization & Urban History Analysis',
                                  'Colonial History Studies',
                                  'Military History Research',
                                  'Regional History Specialization',
                                  'Archival Research Methods',
                                  'Historical Documentation',
                                  'Academic Writing & Publishing',
                                  'Seminar & Conference Presentation'
                                ],
                                publications: [
                                  {
                                    type: 'Research Papers',
                                    items: [
                                      'Multiple research papers published in academic journals (2019-2024)',
                                      'Publications on Himalayan history and regional studies',
                                      'Papers on urbanization and colonial development',
                                      'Active contributions to academic discourse'
                                    ]
                                  },
                                  {
                                    type: 'Books',
                                    items: [
                                      'Book on Himalayan history in progress',
                                      'Research-based scholarly work on regional history'
                                    ]
                                  }
                                ],
                                other: [
                                  'Assistant Professor (Guest Faculty) at Department of History',
                                  'NET qualified researcher (multiple times)',
                                  'ICHR JRF qualified - recognized research potential',
                                  'Active participant in national and international conferences',
                                  'Regular contributor to academic seminars',
                                  'Focus on Indian regional and traditional history',
                                  'Young researcher with contemporary research approach',
                                  'Available for teaching, research supervision, and mentoring'
                                ]
                              }
                            ]
                          : isGeography
                            ? [
                                {
                                  name: 'Dr. Dinesh Chandra Goswami',
                                  role: 'Senior Faculty, Department of Geography',
                                  image: '/img/Administrator/Manoj.jpg',
                                  cvLink: '/img/geography/Dr-Dinesh-Chandra-Goswami.docx',
                                  keyHighlights: [
                                    'Ph.D. in Geography with specialization in Regional Development',
                                    'Published multiple research papers on transport and regional development',
                                    'Guided multiple D.Phil scholars and supervised 60+ MA dissertations',
                                    'Led UGC Minor & Major Projects on tourism, landslides, and regional development',
                                    'Recipient of Seva Ratna Samman award',
                                    'Active contributor with radio and Doordarshan talks on geography'
                                  ],
                                  education: [
                                    {
                                      degree: 'M.A. Geography',
                                      field: 'Geography',
                                      specialization: 'HNB Garhwal University'
                                    },
                                    {
                                      degree: 'LL.B.',
                                      field: 'Law',
                                      specialization: 'Lucknow University'
                                    },
                                    {
                                      degree: 'B.Lib., M.Lib.',
                                      field: 'Library Science',
                                      specialization: 'Lucknow University'
                                    }
                                  ],
                                  researchWork: [
                                    {
                                      title: 'Transport & Regional Development',
                                      description: 'Ph.D. research (2003) on transport systems and regional development patterns'
                                    },
                                    {
                                      title: 'Tourism Geography',
                                      description: 'Research on tourism development, disaster management, and hazard assessment in Himalayan region'
                                    },
                                    {
                                      title: 'Population Studies',
                                      description: 'Studies on population distribution and demographic patterns'
                                    }
                                  ],
                                  publications: [
                                    {
                                      type: 'Research Papers',
                                      items: ['Multiple research papers published 2001–2006+']
                                    },
                                    {
                                      type: 'Books & Edited Volumes',
                                      items: ['Books on Himalayan environment and geography']
                                    }
                                  ],
                                  other: [
                                    'NET Qualified',
                                    'Contributed to radio and Doordarshan talks',
                                    'Editor of geography journals',
                                    'Member of multiple geography associations'
                                  ]
                                },
                                {
                                  name: 'Dr. Srikrishna Nautiyal',
                                  role: 'Faculty, Department of Geography',
                                  image: '/img/Administrator/dinesh.jpg',
                                  cvLink: '/img/geography/Dr-Srikrishna-Nautiyal.docx',
                                  keyHighlights: [
                                    'Ph.D. in Geology with expertise in Himalayan geomorphology',
                                    'NET Qualified in Earth Sciences',
                                    'Specialized research on glacier change and landslide hazards',
                                    'Focus on Rishi Ganga catchment and geomorphic hazard assessment',
                                    'Contributed to Joshimath land subsidence studies',
                                    'Published research papers on Himalayan geological hazards'
                                  ],
                                  education: [
                                    {
                                      degree: 'Ph.D.',
                                      field: 'Geology',
                                      specialization: 'Rishi Ganga Catchment Study'
                                    }
                                  ],
                                  researchWork: [
                                    {
                                      title: 'Geomorphology & Glacier Studies',
                                      description: 'Research on glacial change, mountain geomorphology, and climate impacts'
                                    },
                                    {
                                      title: 'Himalayan Hazard Assessment',
                                      description: 'Study of landslides, terrain hazards, and geomorphic processes'
                                    },
                                    {
                                      title: 'Remote Sensing & Geo-environmental Studies',
                                      description: 'Application of remote sensing in environmental monitoring and geological studies'
                                    }
                                  ],
                                  publications: [
                                    {
                                      type: 'Research Papers',
                                      items: [
                                        'Glacier change studies',
                                        'Landslide research',
                                        'Himalayan geology publications'
                                      ]
                                    }
                                  ],
                                  other: [
                                    'NET Qualified (Earth Sciences)',
                                    'Collaboration in biodiversity and geology studies',
                                    'Contributor to Joshimath land subsidence report'
                                  ]
                                },
                                {
                                  name: 'Kedar Singh',
                                  role: 'Geography Faculty, Department of Geography',
                                  image: '/img/Administrator/Pramod.jpg',
                                  cvLink: '/img/geography/Kedar-Singh.docx',
                                  keyHighlights: [
                                    'Geography researcher with specialization in landslide hazard assessment',
                                    'Published multiple research papers from 2016–2024',
                                    'Focus on Alaknanda Valley landslides and regional geography',
                                    'Researcher on literacy and workforce studies in Himalayan region',
                                    'Holds patent for disaster resilience monitoring device',
                                    'Extensive teaching experience at undergraduate and postgraduate levels'
                                  ],
                                  researchWork: [
                                    {
                                      title: 'Landslide Hazard Assessment',
                                      description: 'Research on landslide prone areas, particularly in Alaknanda Valley'
                                    },
                                    {
                                      title: 'Regional Geography',
                                      description: 'Studies on regional development, basin geomorphology, and terrain analysis'
                                    },
                                    {
                                      title: 'Tourism Development',
                                      description: 'Research on tourism geography and sustainable development in mountains'
                                    }
                                  ],
                                  technicalSkills: [
                                    'Landslide hazard mapping',
                                    'GIS and Remote Sensing',
                                    'MS Office, Tally, Photoshop, CorelDraw',
                                    'Basin geomorphology analysis'
                                  ],
                                  publications: [
                                    {
                                      type: 'Research Papers',
                                      items: [
                                        'Multiple publications 2016–2024',
                                        'Alaknanda Valley landslide studies',
                                        'Literacy and workforce studies',
                                        'Basin geomorphology research'
                                      ]
                                    }
                                  ],
                                  other: [
                                    'Patent: Disaster resilience monitoring device',
                                    'Active participant in MANU Project (Mapping Uttarakhand)',
                                    'Teaching experience at undergraduate and postgraduate levels'
                                  ]
                                },
                                {
                                  name: 'Dr. Anjani Prasad Dubey',
                                  role: 'Faculty, Department of Geography',
                                  image: '/img/Administrator/AEC.jpg',
                                  cvLink: '/img/geography/Dr-Anjani-Prasad-Dubey.docx',
                                  keyHighlights: [
                                    '25+ years of teaching experience in geography',
                                    'Specialized in rural development and environmental geography',
                                    'Published multiple research papers on environmental and social issues (2008–2020)',
                                    'Authored book on Personality Development & Communication Skills',
                                    'Edited book on Ganga ecosystem and biodiversity',
                                    'Officiating Principal with 8 years of administrative experience'
                                  ],
                                  education: [
                                    {
                                      degree: 'Ph.D.',
                                      field: 'Geography'
                                    }
                                  ],
                                  researchWork: [
                                    {
                                      title: 'Rural Development & Population Studies',
                                      description: 'Research on rural geography, population dynamics, and economic systems'
                                    },
                                    {
                                      title: 'Environmental Geography',
                                      description: 'Studies on environmental degradation, biodiversity loss, air pollution, and water resources'
                                    },
                                    {
                                      title: 'Tourism & Food Security',
                                      description: 'Research on tourism geography and food security challenges'
                                    }
                                  ],
                                  publications: [
                                    {
                                      type: 'Research Papers',
                                      items: [
                                        'Multiple papers 2008–2020 on air pollution',
                                        'Ganga river studies',
                                        'Food security research',
                                        'Biodiversity loss and conservation'
                                      ]
                                    },
                                    {
                                      type: 'Books',
                                      items: [
                                        'Personality Development & Communication Skills',
                                        'Edited book on Ganga ecosystem'
                                      ]
                                    }
                                  ],
                                  technicalSkills: [
                                    'Environmental assessment',
                                    'Population geography analysis',
                                    'Rural development planning'
                                  ],
                                  other: [
                                    'Patents: AI-based soil & environment analyzer',
                                    'Patent: Climate prediction & flood management device',
                                    'Officiating Principal (8 years total)',
                                    '25+ years of teaching experience'
                                  ]
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
    : isCommerceAndManagement || isEconomics
      ? []
      : [];

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
      : isCommerceAndManagement || isEconomics
        ? []
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
      : isGeography
        ? []
      : isBotany
        ? ['/img/botany/botany-department-group.jpeg']
    : [];

  return (
    <div className="department-secondary-page">
      <div className="department-secondary-header">
        <button className="back-button" onClick={onBack}>
          {language === 'en' ? 'Back' : 'Back'}
        </button>
        <h1>DEPARTMENT OF {departmentName.toUpperCase()}</h1>
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
          ) : isGeography ? (
            geographyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : isBotany ? (
            botanyIntroParagraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>{data.introText}</p>
          )}
        </section>

        {photos.length > 0 && (
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
        )}

        {staffMembers.length > 0 && (
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
                  <button
                    className="staff-cv-btn"
                    onClick={() => handleViewTeacherProfile(member)}
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export function getSelectedTeacher() {
  return selectedTeacherInfo;
}

export default DepartmentSecondaryPage;

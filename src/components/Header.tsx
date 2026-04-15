import React, { useState } from 'react';
import AdmissionPortrait from './AdmissionPortrait';
import '../styles/Header.css';

interface HeaderProps {
  language: 'en' | 'hi';
  setCurrentPage?: (page: string) => void;
}

interface SubMenuItem {
  labelEn: string;
  labelHi: string;
  url: string;
}

const Header: React.FC<HeaderProps> = ({ language, setCurrentPage }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const institutesSubMenu: SubMenuItem[] = [
    {
      labelEn: 'University Campus',
      labelHi: 'à¤µà¤¿à¤¶à¥à¤µà¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ à¤ªà¤°à¤¿à¤¸à¤°',
      url: '#'
    },
    {
      labelEn: 'Pandit Lalit Mohan Sharma Government PG College',
      labelHi: 'à¤ªà¤‚à¤¡à¤¿à¤¤ à¤²à¤²à¤¿à¤¤ à¤®à¥‹à¤¹à¤¨ à¤¶à¤°à¥à¤®à¤¾ à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¸à¥à¤¨à¤¾à¤¤à¤•à¥‹à¤¤à¥à¤¤à¤° à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯',
      url: '#'
    },
    {
      labelEn: 'Government Post Graduate College - Gopeshwar, Chamoli',
      labelHi: 'à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¸à¥à¤¨à¤¾à¤¤à¤•à¥‹à¤¤à¥à¤¤à¤° à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ - à¤—à¥‹à¤ªà¥‡à¤¶à¥à¤µà¤°, à¤šà¤®à¥‹à¤²à¥€',
      url: '#'
    },
    {
      labelEn: 'Government Degree College - Chandrabadni(naikhi)',
      labelHi: 'à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¸à¥à¤¨à¤¾à¤¤à¤•à¥‹à¤¤à¥à¤¤à¤° à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ - à¤—à¥‹à¤ªà¥‡à¤¶à¥à¤µà¤°, à¤šà¤®à¥‹à¤²à¥€',
      url: '#'
    },
    
    {
      labelEn: 'Government Degree College Chandrabadni (Naikhi)',
      labelHi: 'à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯',
      url: '#'
    },
    {
      labelEn: 'University Affiliated Colleges',
      labelHi: 'à¤µà¤¿à¤¶à¥à¤µà¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ à¤¸à¤‚à¤¬à¤¦à¥à¤§ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯',
      url: '#'
    },
    {
      labelEn: 'Aided Colleges',
      labelHi: 'à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯',
      url: '#'
    },
    {
      labelEn: 'Private Colleges',
      labelHi: 'à¤¨à¤¿à¤œà¥€ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯',
      url: '#'
    }
    
  ];

  const departmentsSubMenu: SubMenuItem[] = [
    { labelEn: 'Biotechnology', labelHi: 'à¤œà¥ˆà¤µ à¤ªà¥à¤°à¥Œà¤¦à¥à¤¯à¥‹à¤—à¤¿à¤•à¥€', url: '#' },
    { labelEn: 'Botany', labelHi: 'à¤µà¤¨à¤¸à¥à¤ªà¤¤à¤¿ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Charak School of Pharmacy', labelHi: 'à¤šà¤°à¤• à¤¸à¥à¤•à¥‚à¤² à¤‘à¤« à¤«à¤¾à¤°à¥à¤®à¥‡à¤¸à¥€', url: '#' },
    { labelEn: 'Chemistry', labelHi: 'à¤°à¤¸à¤¾à¤¯à¤¨ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Commerce', labelHi: 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯', url: '#' },
    { labelEn: 'Computer Application', labelHi: 'à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤…à¤¨à¥à¤ªà¥à¤°à¤¯à¥‹à¤—', url: '#' },
    { labelEn: 'Economics', labelHi: 'à¤…à¤°à¥à¤¥à¤¶à¤¾à¤¸à¥à¤¤à¥à¤°', url: '#' },
    { labelEn: 'Education', labelHi: 'à¤¶à¤¿à¤•à¥à¤·à¤¾', url: '#' },
    { labelEn: 'English', labelHi: 'à¤…à¤‚à¤—à¥à¤°à¥‡à¤œà¥€', url: '#' },
    { labelEn: 'Environmental Science', labelHi: 'à¤ªà¤°à¥à¤¯à¤¾à¤µà¤°à¤£ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Fine Arts', labelHi: 'à¤²à¤²à¤¿à¤¤ à¤•à¤²à¤¾', url: '#' },
    { labelEn: 'Food Science & Technology', labelHi: 'à¤–à¤¾à¤¦à¥à¤¯ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨ à¤”à¤° à¤ªà¥à¤°à¥Œà¤¦à¥à¤¯à¥‹à¤—à¤¿à¤•à¥€', url: '#' },
    { labelEn: 'Foreign Language', labelHi: 'à¤µà¤¿à¤¦à¥‡à¤¶à¥€ à¤­à¤¾à¤·à¤¾', url: '#' },
    { labelEn: 'Forensic Science', labelHi: 'à¤«à¥‹à¤°à¥‡à¤‚à¤¸à¤¿à¤• à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Genetics & Plant Breeding', labelHi: 'à¤†à¤¨à¥à¤µà¤‚à¤¶à¤¿à¤•à¥€ à¤”à¤° à¤ªà¤¾à¤¦à¤ª à¤ªà¥à¤°à¤œà¤¨à¤¨', url: '#' },
    { labelEn: 'Geography', labelHi: 'à¤­à¥‚à¤—à¥‹à¤²', url: '#' },
    { labelEn: 'Hindi', labelHi: 'à¤¹à¤¿à¤‚à¤¦à¥€', url: '#' },
    { labelEn: 'History', labelHi: 'à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸', url: '#' },
    { labelEn: 'Home Science', labelHi: 'à¤—à¥ƒà¤¹ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Horticulture', labelHi: 'à¤¬à¤¾à¤—à¤µà¤¾à¤¨à¥€', url: '#' },
    { labelEn: 'Institute of Business Studies', labelHi: 'à¤µà¥à¤¯à¤¾à¤µà¤¸à¤¾à¤¯à¤¿à¤• à¤…à¤§à¥à¤¯à¤¯à¤¨ à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤¨', url: '#' },
    { labelEn: 'Institute of Engineering & Technology', labelHi: 'à¤‡à¤‚à¤œà¥€à¤¨à¤¿à¤¯à¤°à¤¿à¤‚à¤— à¤”à¤° à¤ªà¥à¤°à¥Œà¤¦à¥à¤¯à¥‹à¤—à¤¿à¤•à¥€ à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤¨', url: '#' },
    { labelEn: 'Jewellery Design & Technology', labelHi: 'à¤—à¤¹à¤¨à¥‡ à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤”à¤° à¤ªà¥à¤°à¥Œà¤¦à¥à¤¯à¥‹à¤—à¤¿à¤•à¥€', url: '#' },
    { labelEn: 'Legal Studies', labelHi: 'à¤•à¤¾à¤¨à¥‚à¤¨à¥€ à¤…à¤§à¥à¤¯à¤¯à¤¨', url: '#' },
    { labelEn: 'Library and Information Science', labelHi: 'à¤ªà¥à¤¸à¥à¤¤à¤•à¤¾à¤²à¤¯ à¤”à¤° à¤¸à¥‚à¤šà¤¨à¤¾ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Mathematics', labelHi: 'à¤—à¤£à¤¿à¤¤', url: '#' },
    { labelEn: 'Microbiology', labelHi: 'à¤¸à¥‚à¤•à¥à¤·à¥à¤®à¤œà¥€à¤µ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Physical Education', labelHi: 'à¤¶à¤¾à¤°à¥€à¤°à¤¿à¤• à¤¶à¤¿à¤•à¥à¤·à¤¾', url: '#' },
    { labelEn: 'Physics', labelHi: 'à¤­à¥Œà¤¤à¤¿à¤•à¥€', url: '#' },
    { labelEn: 'Plant Protection', labelHi: 'à¤ªà¤¾à¤¦à¤ª à¤¸à¥à¤°à¤•à¥à¤·à¤¾', url: '#' },
    { labelEn: 'Political Science', labelHi: 'à¤°à¤¾à¤œà¤¨à¥€à¤¤à¤¿ à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Psychology', labelHi: 'à¤®à¤¨à¥‹à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨', url: '#' },
    { labelEn: 'Sanskrit', labelHi: 'à¤¸à¤‚à¤¸à¥à¤•à¥ƒà¤¤', url: '#' }
  ];

  const academicSubMenu: SubMenuItem[] = [
    { labelEn: 'Faculty of Arts', labelHi: 'à¤•à¤²à¤¾ à¤¸à¤‚à¤•à¤¾à¤¯', url: '#' },
    { labelEn: 'Faculty of Science', labelHi: 'à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨ à¤¸à¤‚à¤•à¤¾à¤¯', url: '#' },
    { labelEn: 'Faculty of Commerce', labelHi: 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯ à¤¸à¤‚à¤•à¤¾à¤¯', url: '#' },
    { labelEn: 'All Programmes', labelHi: 'à¤¸à¤­à¥€ à¤•à¤¾à¤°à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Regular Courses', labelHi: 'à¤¨à¤¿à¤¯à¤®à¤¿à¤¤ à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Self Financial Courses', labelHi: 'à¤†à¤¤à¥à¤®à¤¨à¤¿à¤°à¥à¤­à¤° à¤µà¤¿à¤¤à¥à¤¤à¥€à¤¯ à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Self-Designed Courses', labelHi: 'à¤¸à¥à¤µ-à¤¡à¤¿à¤œà¤¾à¤‡à¤¨ à¤•à¤¿à¤ à¤—à¤ à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Campus Syllabus', labelHi: 'à¤ªà¤°à¤¿à¤¸à¤° à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'College Syllabus', labelHi: 'à¤•à¥‰à¤²à¥‡à¤œ à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'NEP-2020 Syllabus', labelHi: 'à¤°à¤¾à¤·à¥à¤Ÿà¥à¤°à¥€à¤¯ à¤¶à¤¿à¤•à¥à¤·à¤¾ à¤¨à¥€à¤¤à¤¿-2020 à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Skill Development Syllabus', labelHi: 'à¤•à¥Œà¤¶à¤² à¤µà¤¿à¤•à¤¾à¤¸ à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Academic Calendar', labelHi: 'à¤¶à¥ˆà¤•à¥à¤·à¤£à¤¿à¤• à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤°', url: '#' },
    { labelEn: 'College Code', labelHi: 'à¤•à¥‰à¤²à¥‡à¤œ à¤•à¥‹à¤¡', url: '#' },
    { labelEn: 'Course Code', labelHi: 'à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤® à¤•à¥‹à¤¡', url: '#' },
    { labelEn: 'Alumni', labelHi: 'à¤ªà¥‚à¤°à¥à¤µ à¤›à¤¾à¤¤à¥à¤°', url: '#' },
    { labelEn: 'Feedback', labelHi: 'à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾', url: '#' }
  ];

  const infrastructureSubMenu: SubMenuItem[] = [
    { labelEn: 'Auditorium', labelHi: 'à¤¸à¤­à¤¾à¤—à¤¾à¤°', url: '#' },
    { labelEn: 'Canteen', labelHi: 'à¤•à¥ˆà¤‚à¤Ÿà¥€à¤¨', url: '#' },
    { labelEn: 'Guest House', labelHi: 'à¤…à¤¤à¤¿à¤¥à¤¿ à¤—à¥ƒà¤¹', url: '#' },
    { labelEn: 'Hostel', labelHi: 'à¤›à¤¾à¤¤à¥à¤°à¤¾à¤µà¤¾à¤¸', url: '#' },
    { labelEn: 'Internet Facility', labelHi: 'à¤‡à¤‚à¤Ÿà¤°à¤¨à¥‡à¤Ÿ à¤¸à¥à¤µà¤¿à¤§à¤¾', url: '#' },
    { labelEn: 'Placement Call Centre', labelHi: 'à¤ªà¥à¤²à¥‡à¤¸à¤®à¥‡à¤‚à¤Ÿ à¤•à¥‰à¤² à¤¸à¥‡à¤‚à¤Ÿà¤°', url: '#' },
    { labelEn: 'Healthcare', labelHi: 'à¤¸à¥à¤µà¤¾à¤¸à¥à¤¥à¥à¤¯ à¤¸à¥‡à¤µà¤¾', url: '#' },
    { labelEn: 'Skill Development Centre', labelHi: 'à¤•à¥Œà¤¶à¤² à¤µà¤¿à¤•à¤¾à¤¸ à¤•à¥‡à¤‚à¤¦à¥à¤°', url: '#' },
    { labelEn: 'Sports and Games', labelHi: 'à¤–à¥‡à¤² à¤”à¤° à¤–à¥‡à¤² à¤•à¥‚à¤¦', url: '#' },
    { labelEn: 'Computer Lab', labelHi: 'à¤•à¤‚à¤ªà¥à¤¯à¥‚à¤Ÿà¤° à¤ªà¥à¤°à¤¯à¥‹à¤—à¤¶à¤¾à¤²à¤¾', url: '#' },
    { labelEn: 'Library', labelHi: 'à¤ªà¥à¤¸à¥à¤¤à¤•à¤¾à¤²à¤¯', url: '#' },
    { labelEn: 'Faculty Development Centre', labelHi: 'à¤¸à¤‚à¤•à¤¾à¤¯ à¤µà¤¿à¤•à¤¾à¤¸ à¤•à¥‡à¤‚à¤¦à¥à¤°', url: '#' },
    { labelEn: 'Centre of Excellence', labelHi: 'à¤‰à¤¤à¥à¤•à¥ƒà¤·à¥à¤Ÿà¤¤à¤¾ à¤•à¥‡à¤‚à¤¦à¥à¤°', url: '#' },
    { labelEn: 'Medical Room', labelHi: 'à¤šà¤¿à¤•à¤¿à¤¤à¥à¤¸à¤¾ à¤•à¤•à¥à¤·', url: '#' },
    { labelEn: 'Student Counseling Centre', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¤°à¤¾à¤®à¤°à¥à¤¶ à¤•à¥‡à¤‚à¤¦à¥à¤°', url: '#' },
    { labelEn: 'Transportation', labelHi: 'à¤ªà¤°à¤¿à¤µà¤¹à¤¨', url: '#' }
  ];

  const iqacSubMenu: SubMenuItem[] = [
    { labelEn: 'IQAC', labelHi: 'à¤†à¤ˆà¤•à¥à¤¯à¥‚à¤à¤¸à¥€', url: '#' },
    { labelEn: 'AGAR Reports', labelHi: 'à¤à¤œà¥€à¤à¤†à¤° à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ', url: '#' },
    { labelEn: 'Minutes of IQAC Meetings', labelHi: 'à¤†à¤ˆà¤•à¥à¤¯à¥‚à¤à¤¸à¥€ à¤¬à¥ˆà¤ à¤•à¥‹à¤‚ à¤•à¥‡ à¤®à¤¿à¤¨à¤Ÿ', url: '#' },
    { labelEn: 'Best Practices', labelHi: 'à¤¸à¤°à¥à¤µà¥‹à¤¤à¥à¤¤à¤® à¤ªà¥à¤°à¤¥à¤¾à¤à¤‚', url: '#' },
    { labelEn: 'IQAC Committee Letter', labelHi: 'à¤†à¤ˆà¤•à¥à¤¯à¥‚à¤à¤¸à¥€ à¤¸à¤®à¤¿à¤¤à¤¿ à¤ªà¤¤à¥à¤°', url: '#' },
    { labelEn: 'Notifications', labelHi: 'à¤¸à¥‚à¤šà¤¨à¤¾à¤à¤‚', url: '#' },
    { labelEn: 'Institutional Distinctiveness', labelHi: 'à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤—à¤¤ à¤µà¤¿à¤¶à¤¿à¤·à¥à¤Ÿà¤¤à¤¾', url: '#' },
    { labelEn: 'Industry Consultancy Cell', labelHi: 'à¤‰à¤¦à¥à¤¯à¥‹à¤— à¤ªà¤°à¤¾à¤®à¤°à¥à¤¶ à¤•à¤•à¥à¤·', url: '#' },
    { labelEn: 'Facilities', labelHi: 'à¤¸à¥à¤µà¤¿à¤§à¤¾à¤à¤‚', url: '#' },
    { labelEn: 'Proceeding AC/BOS', labelHi: 'à¤•à¤¾à¤°à¥à¤¯à¤µà¤¾à¤¹à¥€ à¤à¤¸à¥€/à¤¬à¥€à¤“à¤à¤¸', url: '#' },
    { labelEn: 'Student Projects/Field Reports', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¤°à¤¿à¤¯à¥‹à¤œà¤¨à¤¾à¤à¤‚/à¤•à¥à¤·à¥‡à¤¤à¥à¤° à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ', url: '#' },
    { labelEn: 'Academic Calendar', labelHi: 'à¤¶à¥ˆà¤•à¥à¤·à¤£à¤¿à¤• à¤•à¥ˆà¤²à¥‡à¤‚à¤¡à¤°', url: '#' },
    { labelEn: 'Audited Statement of Income Expenditure', labelHi: 'à¤†à¤¯ à¤”à¤° à¤µà¥à¤¯à¤¯ à¤•à¤¾ à¤²à¥‡à¤–à¤¾à¤ªà¤°à¥€à¤•à¥à¤·à¤¿à¤¤ à¤µà¤¿à¤µà¤°à¤£', url: '#' },
    { labelEn: 'Feedback', labelHi: 'à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾', url: '#' },
    { labelEn: 'Activities', labelHi: 'à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿à¤¯à¤¾à¤', url: '#' },
    { labelEn: 'Contact', labelHi: 'à¤¸à¤‚à¤ªà¤°à¥à¤•', url: '#' }
  ];

  const examinationSubMenu: SubMenuItem[] = [
    { labelEn: 'Exam Rules', labelHi: 'à¤ªà¤°à¥€à¤•à¥à¤·à¤¾ à¤¨à¤¿à¤¯à¤®', url: '#' },
    { labelEn: 'Exam Related Information', labelHi: 'à¤ªà¤°à¥€à¤•à¥à¤·à¤¾ à¤¸à¥‡ à¤¸à¤‚à¤¬à¤‚à¤§à¤¿à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€', url: '#' },
    { labelEn: 'Exam Schedule/Revised Exam Schedule', labelHi: 'à¤ªà¤°à¥€à¤•à¥à¤·à¤¾ à¤¸à¤®à¤¯ à¤¸à¤¾à¤°à¤£à¥€/à¤¸à¤‚à¤¶à¥‹à¤§à¤¿à¤¤ à¤ªà¤°à¥€à¤•à¥à¤·à¤¾ à¤¸à¤®à¤¯ à¤¸à¤¾à¤°à¤£à¥€', url: '#' },
    { labelEn: 'Examination Forms', labelHi: 'à¤ªà¤°à¥€à¤•à¥à¤·à¤¾ à¤«à¤¾à¤°à¥à¤®', url: '#' },
    { labelEn: 'Code Books', labelHi: 'à¤•à¥‹à¤¡ à¤¬à¥à¤•', url: '#' }
  ];

  const studentsCornerSubMenu: SubMenuItem[] = [
    { labelEn: 'Syllabus', labelHi: 'à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®', url: '#' },
    { labelEn: 'Result', labelHi: 'à¤ªà¤°à¤¿à¤£à¤¾à¤®', url: '#' },
    { labelEn: 'Anti ragging', labelHi: 'à¤°à¥ˆà¤—à¤¿à¤‚à¤— à¤µà¤¿à¤°à¥‹à¤§à¥€', url: '#' },
    { labelEn: 'Conduct & Discipline', labelHi: 'à¤†à¤šà¤°à¤£ à¤”à¤° à¤…à¤¨à¥à¤¶à¤¾à¤¸à¤¨', url: '#' },
    { labelEn: 'Hostel Registration', labelHi: 'à¤›à¤¾à¤¤à¥à¤°à¤¾à¤µà¤¾à¤¸ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£', url: '#' },
    { labelEn: 'Online Fees Payment for Campus Courses', labelHi: 'à¤•à¥ˆà¤‚à¤ªà¤¸ à¤ªà¤¾à¤ à¥à¤¯à¤•à¥à¤°à¤®à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤¶à¥à¤²à¥à¤• à¤­à¥à¤—à¤¤à¤¾à¤¨', url: '#' },
    { labelEn: 'Campus Fee Payment', labelHi: 'à¤•à¥ˆà¤‚à¤ªà¤¸ à¤¶à¥à¤²à¥à¤• à¤­à¥à¤—à¤¤à¤¾à¤¨', url: '#' },
    { labelEn: 'Online Provisional & Migration Certificate', labelHi: 'à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤…à¤¨à¤‚à¤¤à¤¿à¤® à¤”à¤° à¤ªà¥à¤°à¤µà¤¾à¤¸ à¤ªà¥à¤°à¤®à¤¾à¤£à¤ªà¤¤à¥à¤°', url: '#' },
    { labelEn: 'Student Council', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¤°à¤¿à¤·à¤¦', url: '#' },
    { labelEn: 'Fee Refund Policy', labelHi: 'à¤¶à¥à¤²à¥à¤• à¤µà¤¾à¤ªà¤¸à¥€ à¤¨à¥€à¤¤à¤¿', url: '#' },
    { labelEn: 'Student Handbook', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¥à¤¸à¥à¤¤à¤¿à¤•à¤¾', url: '#' },
    { labelEn: 'Student Satisfaction Survey', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤¸à¤‚à¤¤à¥à¤·à¥à¤Ÿà¤¿ à¤¸à¤°à¥à¤µà¥‡à¤•à¥à¤·à¤£', url: '#' },
    { labelEn: 'Student Feedback form', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤«à¥‰à¤°à¥à¤®', url: '#' },
    { labelEn: 'OMR Keys, Sheet & Response', labelHi: 'OMR à¤•à¥à¤‚à¤œà¥€, à¤¶à¥€à¤Ÿ à¤”à¤° à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾', url: '#' },
    { labelEn: 'Student Help Desk', labelHi: 'à¤›à¤¾à¤¤à¥à¤° à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤¡à¥‡à¤¸à¥à¤•', url: '#' },
    { labelEn: 'Answer Book Viewing & Challenge Evaluation', labelHi: 'à¤‰à¤¤à¥à¤¤à¤° à¤ªà¥à¤¸à¥à¤¤à¤¿à¤•à¤¾ à¤¦à¥‡à¤–à¤¨à¤¾ à¤”à¤° à¤šà¥à¤¨à¥Œà¤¤à¥€ à¤®à¥‚à¤²à¥à¤¯à¤¾à¤‚à¤•à¤¨', url: '#' },
    { labelEn: 'Women Cell', labelHi: 'à¤®à¤¹à¤¿à¤²à¤¾ à¤•à¤•à¥à¤·', url: '#' },
    { labelEn: 'Apply for left out practical/viva', labelHi: 'à¤›à¥‹à¤¡à¤¼à¥€ à¤—à¤ˆ à¤µà¥à¤¯à¤¾à¤µà¤¹à¤¾à¤°à¤¿à¤•/à¤®à¥Œà¤–à¤¿à¤•à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤†à¤µà¥‡à¤¦à¤¨ à¤•à¤°à¥‡à¤‚', url: '#' },
    { labelEn: 'Document Verification', labelHi: 'à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨', url: '#' },
    { labelEn: 'NCC', labelHi: 'à¤à¤¨à¤¸à¥€à¤¸à¥€', url: '#' }
  ];

  const eventsSubMenu: SubMenuItem[] = [
    { labelEn: 'Photo Gallery', labelHi: 'à¤«à¥‹à¤Ÿà¥‹ à¤—à¥ˆà¤²à¤°à¥€', url: '#' },
    { labelEn: 'News Gallery', labelHi: 'à¤¸à¤®à¤¾à¤šà¤¾à¤° à¤—à¥ˆà¤²à¤°à¥€', url: '#' },
    { labelEn: 'Conference/Seminar & Workshop', labelHi: 'à¤¸à¤®à¥à¤®à¥‡à¤²à¤¨/à¤¸à¥‡à¤®à¤¿à¤¨à¤¾à¤° à¤”à¤° à¤•à¤¾à¤°à¥à¤¯à¤¶à¤¾à¤²à¤¾', url: '#' },
    { labelEn: 'Centre of Excellence', labelHi: 'à¤‰à¤¤à¥à¤•à¥ƒà¤·à¥à¤Ÿà¤¤à¤¾ à¤•à¥‡à¤‚à¤¦à¥à¤°', url: '#' },
    { labelEn: 'NCC', labelHi: 'à¤à¤¨à¤¸à¥€à¤¸à¥€', url: '#' },
    { labelEn: 'Sports', labelHi: 'à¤–à¥‡à¤²', url: '#' },
    { labelEn: 'MOUs', labelHi: 'à¤¸à¤®à¤à¥Œà¤¤à¤¾', url: '#' }
  ];

  const journalsSubMenu: SubMenuItem[] = [
    { labelEn: 'Science Journal', labelHi: 'à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨ à¤ªà¤¤à¥à¤°à¤¿à¤•à¤¾', url: '#' },
    { labelEn: 'Commerce Journal', labelHi: 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯ à¤ªà¤¤à¥à¤°à¤¿à¤•à¤¾', url: '#' },
    { labelEn: 'Art Journal', labelHi: 'à¤•à¤²à¤¾ à¤ªà¤¤à¥à¤°à¤¿à¤•à¤¾', url: '#' }
  ];

  const staffsSubMenu: SubMenuItem[] = [
    { labelEn: 'Science Faculty Staff', labelHi: 'à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨ à¤¸à¤‚à¤•à¤¾à¤¯ à¤•à¤°à¥à¤®à¤šà¤¾à¤°à¥€', url: '#' },
    { labelEn: 'Arts Faculty Staff', labelHi: 'à¤•à¤²à¤¾ à¤¸à¤‚à¤•à¤¾à¤¯ à¤•à¤°à¥à¤®à¤šà¤¾à¤°à¥€', url: '#' },
    { labelEn: 'Commerce Faculty Staff', labelHi: 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯ à¤¸à¤‚à¤•à¤¾à¤¯ à¤•à¤°à¥à¤®à¤šà¤¾à¤°à¥€', url: '#' }
  ];

  const content = {
    en: {
      university: 'Sri Dev Suman Uttarakhand University',
      address: 'Badshahitol, Tehri (Garhwal), Uttarakhand 249199',
      admission: 'Admission 2026-2027',
      nav: ['Home', 'About Us', 'Administration', 'Organizational Units', 'Departments', 'Academic', 'Infrastructure', 'Examination', 'Students Corner', 'Events', 'Journals', 'Staffs']
    },
    hi: {
      university: 'श्री देव सुमन उत्तराखंड विश्वविद्यालय',
      address: 'बादशाहीथौल, टिहरी (गढ़वाल), उत्तराखंड 249199',
      admission: 'प्रवेश 2026-2027',
      nav: ['Home', 'About Us', 'Administration', 'Organizational Units', 'Departments', 'Academic', 'Infrastructure', 'Examination', 'Students Corner', 'Events', 'Journals', 'Staffs']
    }
  };

  const data = content[language];

  const handleDropdownToggle = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMouseEnter = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleDropdownItemClick = (labelEn: string, labelHi: string) => {
    setOpenDropdown(null);
    
    // Handle institutes/colleges navigation
    if (labelEn === 'University Campus' || labelHi === 'à¤µà¤¿à¤¶à¥à¤µà¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ à¤ªà¤°à¤¿à¤¸à¤°') {
      setCurrentPage?.('university-campus');
    } else if (labelEn === 'Pandit Lalit Mohan Sharma Government PG College' || labelHi === 'à¤ªà¤‚à¤¡à¤¿à¤¤ à¤²à¤²à¤¿à¤¤ à¤®à¥‹à¤¹à¤¨ à¤¶à¤°à¥à¤®à¤¾ à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¸à¥à¤¨à¤¾à¤¤à¤•à¥‹à¤¤à¥à¤¤à¤° à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯') {
      setCurrentPage?.('pandit-lalit-college');
    } else if (labelEn === 'Government Post Graduate College - Gopeshwar, Chamoli' || labelHi === 'à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤¸à¥à¤¨à¤¾à¤¤à¤•à¥‹à¤¤à¥à¤¤à¤° à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ - à¤—à¥‹à¤ªà¥‡à¤¶à¥à¤µà¤°, à¤šà¤®à¥‹à¤²à¥€') {
      setCurrentPage?.('govt-pg-college');
    } else if (labelEn === 'University Affiliated Colleges' || labelHi === 'à¤µà¤¿à¤¶à¥à¤µà¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯ à¤¸à¤‚à¤¬à¤¦à¥à¤§ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯') {
      setCurrentPage?.('affiliated-colleges');
    } else if (labelEn === 'Government Degree College Chandrabadni (Naikhi)' || labelHi === 'à¤¸à¤°à¤•à¤¾à¤°à¥€ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯') {
      setCurrentPage?.('govt-colleges');
    } else if (labelEn === 'Aided Colleges' || labelHi === 'à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯') {
      setCurrentPage?.('aided-colleges');
    } else if (labelEn === 'Private Colleges' || labelHi === 'à¤¨à¤¿à¤œà¥€ à¤®à¤¹à¤¾à¤µà¤¿à¤¦à¥à¤¯à¤¾à¤²à¤¯') {
      setCurrentPage?.('private-colleges');
    }
    // Handle staff navigation
    else if (labelEn === 'Science Faculty Staff' || labelHi === 'à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨ à¤¸à¤‚à¤•à¤¾à¤¯ à¤•à¤°à¥à¤®à¤šà¤¾à¤°à¥€') {
      setCurrentPage?.('science-staff');
    } else if (labelEn === 'Arts Faculty Staff' || labelHi === 'à¤•à¤²à¤¾ à¤¸à¤‚à¤•à¤¾à¤¯ à¤•à¤°à¥à¤®à¤šà¤¾à¤°à¥€') {
      setCurrentPage?.('arts-staff');
    } else if (labelEn === 'Commerce Faculty Staff' || labelHi === 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯ à¤¸à¤‚à¤•à¤¾à¤¯ à¤•à¤°à¥à¤®à¤šà¤¾à¤°à¥€') {
      setCurrentPage?.('commerce-staff');
    }
    // Handle events navigation
    else if (labelEn === 'Photo Gallery' || labelHi === 'à¤«à¥‹à¤Ÿà¥‹ à¤—à¥ˆà¤²à¤°à¥€') {
      setCurrentPage?.('photo-gallery');
    } else if (labelEn === 'News Gallery' || labelHi === 'à¤¸à¤®à¤¾à¤šà¤¾à¤° à¤—à¥ˆà¤²à¤°à¥€') {
      setCurrentPage?.('news-gallery');
    } else if (labelEn === 'Conference/Seminar & Workshop' || labelHi === 'à¤¸à¤®à¥à¤®à¥‡à¤²à¤¨/à¤¸à¥‡à¤®à¤¿à¤¨à¤¾à¤° à¤”à¤° à¤•à¤¾à¤°à¥à¤¯à¤¶à¤¾à¤²à¤¾') {
      setCurrentPage?.('conference-seminar');
    } else if (labelEn === 'Centre of Excellence' || labelHi === 'à¤‰à¤¤à¥à¤•à¥ƒà¤·à¥à¤Ÿà¤¤à¤¾ à¤•à¥‡à¤‚à¤¦à¥à¤°') {
      setCurrentPage?.('centre-excellence');
    } else if (labelEn === 'NCC' || labelHi === 'à¤à¤¨à¤¸à¥€à¤¸à¥€') {
      setCurrentPage?.('ncc');
    } else if (labelEn === 'Sports' || labelHi === 'à¤–à¥‡à¤²') {
      setCurrentPage?.('campus-sports-gallery');
    } else if (labelEn === 'MOUs' || labelHi === 'à¤¸à¤®à¤à¥Œà¤¤à¤¾') {
      setCurrentPage?.('moues');
    }
    // Handle journals navigation
    else if (labelEn === 'Science Journal' || labelHi === 'à¤µà¤¿à¤œà¥à¤žà¤¾à¤¨ à¤ªà¤¤à¥à¤°à¤¿à¤•à¤¾') {
      setCurrentPage?.('science-journal');
    } else if (labelEn === 'Commerce Journal' || labelHi === 'à¤µà¤¾à¤£à¤¿à¤œà¥à¤¯ à¤ªà¤¤à¥à¤°à¤¿à¤•à¤¾') {
      setCurrentPage?.('commerce-journal');
    } else if (labelEn === 'Art Journal' || labelHi === 'à¤•à¤²à¤¾ à¤ªà¤¤à¥à¤°à¤¿à¤•à¤¾') {
      setCurrentPage?.('art-journal');
    }
    // Handle students corner navigation
    else if (labelEn === 'Anti ragging' || labelHi === 'à¤°à¥ˆà¤—à¤¿à¤‚à¤— à¤µà¤¿à¤°à¥‹à¤§à¥€') {
      setCurrentPage?.('anti-ragging');
    } else if (labelEn === 'Hostel Registration' || labelHi === 'à¤›à¤¾à¤¤à¥à¤°à¤¾à¤µà¤¾à¤¸ à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£') {
      setCurrentPage?.('hostel-registration');
    } else if (labelEn === 'Campus Fee Payment' || labelHi === 'à¤•à¥ˆà¤‚à¤ªà¤¸ à¤¶à¥à¤²à¥à¤• à¤­à¥à¤—à¤¤à¤¾à¤¨') {
      setCurrentPage?.('campus-fee-payment');
    } else if (labelEn === 'Student Council' || labelHi === 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¤°à¤¿à¤·à¤¦') {
      setCurrentPage?.('student-council');
    } else if (labelEn === 'Student Handbook' || labelHi === 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¥à¤¸à¥à¤¤à¤¿à¤•à¤¾') {
      setCurrentPage?.('student-handbook');
    } else if (labelEn === 'Student Feedback form' || labelHi === 'à¤›à¤¾à¤¤à¥à¤° à¤ªà¥à¤°à¤¤à¤¿à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤«à¥‰à¤°à¥à¤®') {
      setCurrentPage?.('student-feedback-form');
    } else if (labelEn === 'Student Help Desk' || labelHi === 'à¤›à¤¾à¤¤à¥à¤° à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤¡à¥‡à¤¸à¥à¤•') {
      setCurrentPage?.('student-help-desk');
    } else if (labelEn === 'Women Cell' || labelHi === 'à¤®à¤¹à¤¿à¤²à¤¾ à¤•à¤•à¥à¤·') {
      setCurrentPage?.('women-cell');
    } else if (labelEn === 'Document Verification' || labelHi === 'à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨') {
      setCurrentPage?.('document-verification');
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <div className="logo-placeholder">
            <img src="/img/logo.jpg" alt="Sri Dev Suman Uttarakhand University Logo" className="logo-image" />
          </div>
          <div className="header-text-section">
            <h1>{data.university}</h1>
            <p className="header-address">{data.address}</p>
          </div>
        </div>
      </div>
      <nav className="navbar">
        {data.nav.map((item, index) => {
          const getMenuItems = (itemName: string) => {
            const menus: { [key: string]: SubMenuItem[] } = {
              'Organizational Units': institutesSubMenu,
              'à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤¨/à¤µà¤¿à¤­à¤¾à¤—/à¤˜à¤Ÿà¤• à¤•à¥‰à¤²à¥‡à¤œ': institutesSubMenu,
              'Departments': departmentsSubMenu,
              'à¤µà¤¿à¤­à¤¾à¤—': departmentsSubMenu,
              'Academic': academicSubMenu,
              'à¤…à¤•à¤¾à¤¦à¤®à¤¿à¤•': academicSubMenu,
              'Infrastructure': infrastructureSubMenu,
              'à¤¬à¥à¤¨à¤¿à¤¯à¤¾à¤¦à¥€ à¤¢à¤¾à¤‚à¤šà¤¾': infrastructureSubMenu,
              'IQAC': iqacSubMenu,
              'à¤†à¤ˆà¤•à¥à¤¯à¥‚à¤à¤¸à¥€': iqacSubMenu,
              'Examination': examinationSubMenu,
              'à¤ªà¤°à¥€à¤•à¥à¤·à¤¾': examinationSubMenu,
              'Students Corner': studentsCornerSubMenu,
              'à¤›à¤¾à¤¤à¥à¤° à¤•à¥‹à¤¨à¤¾': studentsCornerSubMenu,
              'Events': eventsSubMenu,
              'à¤‡à¤µà¥‡à¤‚à¤Ÿà¥à¤¸': eventsSubMenu,
              'Journals': journalsSubMenu,
              'à¤œà¤°à¥à¤¨à¤²': journalsSubMenu,
              'Staffs': staffsSubMenu,
              'à¤¸à¥à¤Ÿà¤¾à¤«': staffsSubMenu
            };
            return menus[itemName];
          };

          const menuItems = getMenuItems(item);
          const menuClass = item === 'Organizational Units' || item === 'à¤¸à¤‚à¤¸à¥à¤¥à¤¾à¤¨/à¤µà¤¿à¤­à¤¾à¤—/à¤˜à¤Ÿà¤• à¤•à¥‰à¤²à¥‡à¤œ' ? 'institutes-menu' :
                           item === 'Departments' || item === 'à¤µà¤¿à¤­à¤¾à¤—' ? 'departments-menu' : 
                           item === 'Academic' || item === 'à¤…à¤•à¤¾à¤¦à¤®à¤¿à¤•' ? 'academic-menu' : 
                           item === 'Students Corner' || item === 'à¤›à¤¾à¤¤à¥à¤° à¤•à¥‹à¤¨à¤¾' ? 'students-menu' : '';

          return (
            <div 
              key={index} 
              className="nav-item"
              onMouseEnter={menuItems ? (e) => handleMouseEnter(index, e) : undefined}
              onMouseLeave={menuItems ? handleMouseLeave : undefined}
            >
              {menuItems ? (
                <>
                  <button 
                    className="nav-link dropdown-toggle"
                    onClick={(e) => handleDropdownToggle(index, e)}
                  >
                    {item}
                  </button>
                  {openDropdown === index && (
                    <div 
                      className={`dropdown-menu ${menuClass}`}
                    >
                      {menuItems.map((subitem, subindex) => (
                        <a 
                          key={subindex} 
                          href={subitem.url} 
                          className="dropdown-item"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDropdownItemClick(subitem.labelEn, subitem.labelHi);
                          }}
                        >
                          {subitem.labelEn}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : item === 'Administration' || item === 'à¤ªà¥à¤°à¤¶à¤¾à¤¸à¤¨' ? (
                <button 
                  className="nav-link"
                  onClick={() => setCurrentPage?.('administration')}
                >
                  {item}
                </button>
              ) : item === 'About Us' || item === 'à¤¹à¤®à¤¾à¤°à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚' ? (
                <button 
                  className="nav-link"
                  onClick={() => setCurrentPage?.('about')}
                >
                  {item}
                </button>
              ) : (
                <a href="#" className="nav-link">{item}</a>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;


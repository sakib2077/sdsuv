import React from 'react';
import '../styles/DepartmentSecondaryPage.css';
interface DepartmentSecondaryPageProps {
    language: 'en' | 'hi';
    onBack: () => void;
    departmentName: string;
    setCurrentPage?: (page: string) => void;
}
declare const DepartmentSecondaryPage: React.FC<DepartmentSecondaryPageProps>;
export declare function getSelectedTeacher(): any;
export default DepartmentSecondaryPage;
//# sourceMappingURL=DepartmentSecondaryPage.d.ts.map
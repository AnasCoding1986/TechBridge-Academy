import { TAcademicSemisterCode, TAcademicSemisterName, TAcademicSemisterNameCodeMapper, TMonth } from "./academicSemister.interface";

export const months: TMonth[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const academicSemesterNames: TAcademicSemisterName[] = ['Autumn', 'Summer', 'Fall'];
  export const academicSemesterCodes: TAcademicSemisterCode[] = ['01', '02', '03'];

  export  const academicSemisterNameCodeMapper: TAcademicSemisterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };
export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  parent: string;
  duration: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "NCRD's Sterling Institute of Management Studies",
    parent: "University of Mumbai",
    duration: "Sep 2018 – Jul 2021",
  },
  {
    id: "bsc",
    degree: "Bachelor of Science in Computer Science (B.Sc.)",
    institution: "The SIA College of Higher Education",
    parent: "University of Mumbai",
    duration: "Sep 2015 – Jul 2018",
  },
];

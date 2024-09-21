/**
 * Represents the family members of a person.
 * Each member can be optional and additional members can be added dynamically.
 */
interface FamilyMembers {
  wife?: string;
  mother?: string;
  father?: string;
  brother?: string;
  sister?: string;
  grandmother?: string[];
  grandfather?: string[];
  motherInLaw?: string[];
  fatherInLaw?: string[];
  brotherInLaw?: string[];
  sisterInLaw?: string[];
  [key: string]: string | string[] | undefined;
}

/**
 * Represents list of friends and their relation.
 */
interface Friends {
  names: string[];
  relations: "school-friend" | "colleague";
}

/**
 * Represents a single job in a person's work history.
 */
interface Job {
  title: string;
  company: string;
  startYear: number;
  endYear?: number | null;
  description: string;
}

/**
 * Represents a person's full work history.
 */
interface WorkHistory {
  jobs: Job[];
}

/**
 * Represents a person's education background.
 */
interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear?: number | null;
  fieldOfStudy: string;
}

/**
 * Represents a skill that a person possesses.
 */
interface Skill {
  name: string;
  proficiency: "nothing" | "beginner" | "intermediate" | "advanced";
}

/**
 * A collection of a person's skills.
 */
interface Skills {
  technicalSkills: Skill[];
  languagesSpoken: Skill[];
}

/**
 * Represents detailed information about an individual.
 */
interface PersonData {
  firstName: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  eyeColour: string;
  hairColour: string;
  race: string;
  email: string;
  hobbies: string[];
  mood: {
    happy: boolean;
    angry: boolean;
    sad: boolean;
  };
  family: FamilyMembers;
  schoolFriends: Friends;
  workHistory: WorkHistory;
  education: Education[];
  skills: Skills;
}

/**
 * Data about Tom Hackshaw.
 * @type {PersonData}
 */
const tomData: PersonData = {
  firstName: "Tom",
  lastName: "Hackshaw",
  age: 29,
  height: 186,
  weight: 90,
  eyeColour: "brown",
  hairColour: "black",
  race: "Japanese European",
  email: "tom@tomhackshaw.com",
  hobbies: ["reading", "walking", "running", "coding", "making", "craft"],
  mood: {
    happy: true,
    angry: false,
    sad: false,
  },
  family: {
    wife: "Sophie",
    mother: "Chiaki",
    father: "Ross",
    brother: "Ray",
    grandmother: ["Linda", "Miki"],
    grandfather: ["Desmond", "Iwao"],
    fatherInLaw: ["Scott", "Paul"],
    motherInLaw: ["Margaret", "Emma"],
    sisterInLaw: ["Lucy"],
    brotherInLaw: ["Ben", "Tom", "Daniel", "Robert", "Antonio", "Andrew"],
  },
  schoolFriends: {
    names: ["Robert", "George", "Toby", "Daniel", "Avi"],
    relations: "school-friend",
  },
  workHistory: {
    jobs: [
      {
        title: "Web Adviser",
        company: "Wellington City Council",
        startYear: 2023,
        endYear: null,
        description: "Working with the website team on wellington.govt.nz.",
      },
      {
        title: "Visual Design Teacher",
        company: "Takapuna Grammar",
        startYear: 2021,
        endYear: 2023,
        description:
          "Digital design, photography and technology teacher for junior and senior levels.",
      },
    ],
  },
  education: [
    {
      degree: "Graduate Diploma of Secondary Teaching",
      institution: "University of Auckland",
      startYear: 2019,
      endYear: 2019,
      fieldOfStudy: "Visual Art",
    },
    {
      degree: "Bachelor of Fine Arts (Honours)",
      institution: "Elam School of Fine Arts, University of Auckland",
      startYear: 2014,
      endYear: 2018,
      fieldOfStudy: "Sculpture",
    },
  ],
  skills: {
    technicalSkills: [
      { name: "JavaScript", proficiency: "intermediate" },
      { name: "TypeScript", proficiency: "beginner" },
    ],
    languagesSpoken: [
      { name: "English", proficiency: "advanced" },
      { name: "Japanese", proficiency: "intermediate" },
    ],
  },
};

export default tomData;

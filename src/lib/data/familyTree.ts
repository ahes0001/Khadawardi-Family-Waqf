/**
 * Family Tree Data
 * 
 * Dummy data for the family tree visualization.
 * ~15 members across 3 generations.
 */

export interface FamilyMember {
  id: string;
  name: string;
  fullName: string;
  generation: number;
  birthYear?: number;
  deathYear?: number;
  relation: string;
  contact?: string;
  email?: string;
  branch?: string;
  bio?: string;
  spouse?: string;
  children?: string[];
  parentId?: string;
}

export interface TreeNode {
  name: string;
  attributes?: Record<string, string>;
  children?: TreeNode[];
  memberId?: string;
}

// Raw family data
export const familyMembers: FamilyMember[] = [
  // Generation 1 (Founders)
  {
    id: "founder-1",
    name: "عبدالرحمن",
    fullName: "الشيخ عبدالرحمن بن علي الخضاوردي",
    generation: 1,
    birthYear: 1895,
    deathYear: 1965,
    relation: "المؤسس",
    branch: "الفرع الرئيسي",
    bio: "رجل الأعمال والتاجر البارز الذي أسس هذا الوقف في بداية عهد المملكة الموحدة.",
    children: ["gen2-1", "gen2-2", "gen2-3"],
  },
  {
    id: "founder-2",
    name: "محمد",
    fullName: "الشيخ محمد بن علي الخضاوردي",
    generation: 1,
    birthYear: 1900,
    deathYear: 1972,
    relation: "شريك التأسيس",
    branch: "الفرع الجنوبي",
    bio: "شريك التأسيس وسند أخيه في بناء هذه المؤسسة العائلية.",
    children: ["gen2-4", "gen2-5"],
  },
  
  // Generation 2
  {
    id: "gen2-1",
    name: "أحمد",
    fullName: "أحمد بن عبدالرحمن الخضاوردي",
    generation: 2,
    birthYear: 1920,
    deathYear: 1998,
    relation: "الابن البكر",
    branch: "الفرع الرئيسي",
    contact: "+966 50 xxx xxxx",
    email: "ahmed@example.com",
    parentId: "founder-1",
    children: ["gen3-1", "gen3-2"],
  },
  {
    id: "gen2-2",
    name: "عبدالله",
    fullName: "عبدالله بن عبدالرحمن الخضاوردي",
    generation: 2,
    birthYear: 1925,
    deathYear: 2005,
    relation: "الابن الثاني",
    branch: "الفرع الرئيسي",
    contact: "+966 50 xxx xxxx",
    parentId: "founder-1",
    children: ["gen3-3", "gen3-4"],
  },
  {
    id: "gen2-3",
    name: "خالد",
    fullName: "خالد بن عبدالرحمن الخضاوردي",
    generation: 2,
    birthYear: 1930,
    deathYear: 2010,
    relation: "الابن الثالث",
    branch: "الفرع الرئيسي",
    contact: "+966 50 xxx xxxx",
    parentId: "founder-1",
    children: ["gen3-5"],
  },
  {
    id: "gen2-4",
    name: "سلطان",
    fullName: "سلطان بن محمد الخضاوردي",
    generation: 2,
    birthYear: 1928,
    deathYear: 2000,
    relation: "ابن محمد",
    branch: "الفرع الجنوبي",
    contact: "+966 50 xxx xxxx",
    parentId: "founder-2",
    children: ["gen3-6", "gen3-7"],
  },
  {
    id: "gen2-5",
    name: "فهد",
    fullName: "فهد بن محمد الخضاوردي",
    generation: 2,
    birthYear: 1935,
    relation: "ابن محمد",
    branch: "الفرع الجنوبي",
    contact: "+966 50 xxx xxxx",
    parentId: "founder-2",
    children: ["gen3-8"],
  },
  
  // Generation 3
  {
    id: "gen3-1",
    name: "سعد",
    fullName: "سعد بن أحمد الخضاوردي",
    generation: 3,
    birthYear: 1950,
    relation: "حفيد المؤسس",
    branch: "الفرع الرئيسي",
    contact: "+966 55 xxx xxxx",
    email: "saad@example.com",
    parentId: "gen2-1",
  },
  {
    id: "gen3-2",
    name: "ناصر",
    fullName: "ناصر بن أحمد الخضاوردي",
    generation: 3,
    birthYear: 1955,
    relation: "حفيد المؤسس",
    branch: "الفرع الرئيسي",
    parentId: "gen2-1",
  },
  {
    id: "gen3-3",
    name: "فيصل",
    fullName: "فيصل بن عبدالله الخضاوردي",
    generation: 3,
    birthYear: 1952,
    relation: "حفيد المؤسس",
    branch: "الفرع الرئيسي",
    contact: "+966 55 xxx xxxx",
    parentId: "gen2-2",
  },
  {
    id: "gen3-4",
    name: "بندر",
    fullName: "بندر بن عبدالله الخضاوردي",
    generation: 3,
    birthYear: 1958,
    relation: "حفيد المؤسس",
    branch: "الفرع الرئيسي",
    contact: "+966 55 xxx xxxx",
    parentId: "gen2-2",
  },
  {
    id: "gen3-5",
    name: "تركي",
    fullName: "تركي بن خالد الخضاوردي",
    generation: 3,
    birthYear: 1960,
    relation: "حفيد المؤسس",
    branch: "الفرع الرئيسي",
    contact: "+966 55 xxx xxxx",
    parentId: "gen2-3",
  },
  {
    id: "gen3-6",
    name: "ماجد",
    fullName: "ماجد بن سلطان الخضاوردي",
    generation: 3,
    birthYear: 1955,
    relation: "حفيد محمد",
    branch: "الفرع الجنوبي",
    contact: "+966 55 xxx xxxx",
    parentId: "gen2-4",
  },
  {
    id: "gen3-7",
    name: "عبدالعزيز",
    fullName: "عبدالعزيز بن سلطان الخضاوردي",
    generation: 3,
    birthYear: 1962,
    relation: "حفيد محمد",
    branch: "الفرع الجنوبي",
    contact: "+966 55 xxx xxxx",
    parentId: "gen2-4",
  },
  {
    id: "gen3-8",
    name: "مشعل",
    fullName: "مشعل بن فهد الخضاوردي",
    generation: 3,
    birthYear: 1965,
    relation: "حفيد محمد",
    branch: "الفرع الجنوبي",
    contact: "+966 55 xxx xxxx",
    parentId: "gen2-5",
  },
];

// Build tree structure for react-d3-tree
export function buildTreeData(): TreeNode {
  const buildNode = (member: FamilyMember): TreeNode => {
    const children = familyMembers
      .filter((m) => member.children?.includes(m.id))
      .map(buildNode);

    return {
      name: member.name,
      attributes: {
        generation: `الجيل ${member.generation}`,
        relation: member.relation,
      },
      children: children.length > 0 ? children : undefined,
      memberId: member.id,
    };
  };

  // Start with founders (generation 1)
  const founders = familyMembers.filter((m) => m.generation === 1);
  
  return {
    name: "الجذر",
    children: founders.map(buildNode),
  };
}

// Get member by ID
export function getMemberById(id: string): FamilyMember | undefined {
  return familyMembers.find((m) => m.id === id);
}

// Search members by name
export function searchMembers(query: string): FamilyMember[] {
  const lowerQuery = query.toLowerCase();
  return familyMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(lowerQuery) ||
      m.fullName.toLowerCase().includes(lowerQuery)
  );
}
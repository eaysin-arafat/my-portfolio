type Skill = {
  icon?: JSX.Element;
  name?: string;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type SkillsData = SkillCategory[];

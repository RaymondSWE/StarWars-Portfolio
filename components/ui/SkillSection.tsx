import React from 'react';
import SkillDataProvider from './SkillDataProvider';

interface Skill {
  Image: string;
  width: number;
  height: number;
  skillName: string;
}

interface SkillSectionProps {
  title?: string;  //Optional if i want to add title for each part, depends on the design outcome
  skillsData: Skill[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData }) => {
  return (
    <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
      {skillsData.map((skill, index) => (
        <SkillDataProvider
          key={`${skill.skillName}-${index}`} 
          src={skill.Image}
          width={skill.width}
          height={skill.height}
          index={index}
          skillName={skill.skillName}
        />
      ))}
    </div>
  );
};

export default SkillSection;

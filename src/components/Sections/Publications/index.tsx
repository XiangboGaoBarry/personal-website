import {FC, memo} from 'react';

import {selected, onsubmission, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import PublicationSection from './PublicationSection';
// import {SkillGroup} from './Skills';
import PublicationItem from './PublicationItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Publications}>
      <h1 className="text-center text-2xl font-bold uppercase text-neutral-800 my-4">Publications</h1>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <PublicationSection title="Selected">
          {selected.map((item, index) => (
            <PublicationItem item={item} key={`${item.title}-${index}`} />
          ))}
        </PublicationSection>
        <PublicationSection title="On Submission">
          {onsubmission.map((item, index) => (
            <PublicationItem item={item} key={`${item.title}-${index}`} />
          ))}
        </PublicationSection>
        {/* <ResumeSection title="Skills">
          <p className="pb-8">Here you can show a snapshot of your skills to show off to employers</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection> */}
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;

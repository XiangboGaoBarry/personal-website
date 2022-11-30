import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div>
      <h1 className='text-xl font-bold uppercase text-neutral-800 my-2'>{title}</h1>
      <div>{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'PublicationSection';
export default ResumeSection;

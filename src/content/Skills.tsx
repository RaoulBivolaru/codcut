import { ContentItem, LevelType } from 'content';
import React from 'react';

export default function () {
  return (
    <>
      <ContentItem
        title="Javascript"
        meta="10 years"
        level={LevelType.EXPERT}
      />
      <ContentItem title="HTML/CSS" meta="10 years" level={LevelType.EXPERT} />
      <ContentItem title="ReactJS" meta="5 years" level={LevelType.EXPERT} />
      <ContentItem
        title="Typescript"
        meta="5 years"
        level={LevelType.ADVANCE}
      />
      <ContentItem
        title="Adobe Experience Manager"
        meta="5 years"
        level={LevelType.ADVANCE}
      />
      <ContentItem title="NodeJS" meta="6 years" level={LevelType.ADVANCE} />
      <ContentItem title="NextJS" meta="3 years" level={LevelType.ADVANCE} />
      <ContentItem title="NestJS" meta="2 years" level={LevelType.ADVANCE} />
      <ContentItem title="Firebase" meta="3 years" level={LevelType.MEDIUM} />
      <ContentItem
        title="Adobe Photoshop"
        meta="5 years"
        level={LevelType.MEDIUM}
      />
      <ContentItem
        title="React Native"
        meta="1 years"
        level={LevelType.INTERMEDIATE}
      />
    </>
  );
}

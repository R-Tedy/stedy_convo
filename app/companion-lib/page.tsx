import CompanionCard from '@/components/CompanionCard';
import SearchInput from '@/components/SearchInput';
import SubjectFilter from '@/components/SubjectFilter';
import { getAllCompanions } from '@/lib/actions/companion.actions';
import { getSubjectColor } from '@/lib/utils';
import React from 'react'

const page = async ({searchParams} : SearchParams) => {
  const filters = await searchParams;
  const subject = filters.suject ? filters.subject : '';
  const topic = filters.subject ? filters.topic : '';

  const companions = await getAllCompanions({subject, topic});

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <SearchInput/>
        <SubjectFilter/>
      </section>
      <section className='companion-grid'>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default page
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked?: boolean;
}

const CompanionCard = ({id, name, topic, subject, duration, color} : CompanionCardProps) => {
  const [marked, setMarked] = useState(false)
  // const pathname = usePathname();
  const handleBookmark =  () => {
    setMarked(!marked)
  }

  return (
    <article className='companion-card' style={{backgroundColor: color}}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>
          {subject}
        </div>
        <button className='companion-bookmark' onClick={handleBookmark}>
          <Image
            src={
              marked ? '/icons/bookmark-filled.svg' : '/icons/bookmark.svg'
            }
            alt='bookmark'
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-sm'>Topic: {topic}</p>
      <div className='flex items-center gap-2'>
        <Image
          src={'/icons/clock.svg'}
          alt='duration'
          width={13.5}
          height={13.5}
        />
        <p className='text-sm'>{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className='w-full'>
            <button className='btn-primary w-full justify-center'>
              Launch Lesson
            </button>
      </Link>
    </article>
  )
}

export default CompanionCard
import { cn } from '@/lib/utils';
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import Link from 'next/link';
import Image from 'next/image';

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({title, companions, classNames} : CompanionListProps) => {
  // console.log(companions);
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className='font-bold text-3xl'>{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-lg w-2/3'>Lessons</TableHead>
            <TableHead className='text-lg'>Subject</TableHead>
            <TableHead className='text-lg text-right'>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({id, subject, name, topic, duration, color}) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/icons/${id}`}>
                  <div className='flex items-center gap-2'>
                    <div className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden' style={{backgroundColor: color}}>
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <p className='font-bold text-2xl'>{name}</p>
                      <p className='text-lg'>{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className='subject-badge w-fit max-md:hidden'>
                  {subject}
                </div>
                <div className='flex items-center justify-center rounded-lg w-fit p-2 md:hidden' style={{backgroundColor: color}}>
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt='subject'
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2 w-full justify-end'>
                  <p className='max-md:hidden'>
                    {duration} {' '}
                    mins</p>
                  <Image
                    src={`/icons/clock.svg`}
                    alt='minutes'
                    width={14}
                    height={14}
                    className='md:hidden'
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionList
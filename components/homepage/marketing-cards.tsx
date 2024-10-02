"use client"
import { TITLE_TAILWIND_CLASS } from '@/utils/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const ProjectsData = [
  {
    id: 1,
    name: 'AP Homes',
        description: 'Innovating in the construction industry with a focus on sustainable, scalable social housing projects. Unlocking new growth opportunities through real-world asset tokenization.',
        image: 'https://utfs.io/f/XlNOM5gnOXxMd7AtBMujO04nIA2NxXpbLKHw8dso7tW5qlae',
        imageDark: "https://utfs.io/f/XlNOM5gnOXxMd7AtBMujO04nIA2NxXpbLKHw8dso7tW5qlae",
    url: "https://aphomesltd.co.uk/"
  },
  {
    id: 2,
    name: 'London Electric Centre',
      description: 'Leading the charge in renewable energy solutions and green technology. Driving progress toward a more sustainable future, with promising returns for investors.',
      image: 'https://utfs.io/f/XlNOM5gnOXxMLhKDAUK6v2PzCY967ayMBemFdAjnTKt8h5xN',
    url: "https://www.l-ec.co.uk/"
  },
  {
    id: 3,
    name: 'MUTE Bikes',
      description: 'Pioneering advancements in electric vehicle (EV) technology. A bold leap toward zero-emission transportation, contributing to a cleaner planet.',
    image: 'https://utfs.io/f/666774c0-dc3a-4d5a-84b7-cc96e682db61-bhgw4o.png',
    url: "https://tailwindui.com/"
  },
  {
    id: 4,
    name: 'Go EVE',
      description: 'Go Eve produces DockChain: The rapid charging system for fleet operators and car park owners',
    image: 'https://utfs.io/f/bc4c7cdb-dc42-452c-8744-0ad2c3232e7f-exyul9.png',
    imageDark: "https://utfs.io/f/f9ae4f1b-76a1-4505-afc0-dfcbea05012d-62drog.png",
    url: "https://ui.shadcn.com"
  },
  {
    id: 5,
    name: 'Postx',
      description: 'We are dedicated to solving complex transportation and logistics challenges making it easier to eliminate emissions from your deliveries.',
    image: 'https://utfs.io/f/aee7360d-54f1-4ed1-a4b4-49a56b455bf4-1ker11.png',
    url: "https://clerk.com/"
  },
]

const SpringAnimatedFeatures = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[75%]">
      <div className='flex flex-col mb-[3rem]'>
        <h2 className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}>
                  Portfolio Companies: Backed by the Best
        </h2>
        <p className="mx-auto max-w-[500px] text-gray-600 dark:text-gray-400 text-center mt-2 ">
                  Your investments are in good hands. We carefully select the most innovative and impactful companies across various sectors, giving you access to game-changing projects.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: 'spring',
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left border p-6 rounded-md dark:bg-black"
            >
              <Link href={project?.url} target="_blank" rel="noopener noreferrer" >
                <Image
                  src={project?.imageDark ? project?.imageDark : project.image}
                  width={40}
                  height={30}
                  className="mb-3 rounded"
                  alt={project.name}
                />
                <div className="mb-1 text-sm font-medium ">
                  {project.name}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-gray-600 dark:text-gray-400">
                  {project.description}
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SpringAnimatedFeatures

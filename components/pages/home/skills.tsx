const Skills = () => {
  const techs = [
    {
      label: 'TypeScript',
      specialStyle: 'bg-blue-900 text-2xl left-4 top-4',
      initialPadding: 3,
    },
    {
      label: 'JavaScript',
      specialStyle: 'bg-orange-400 text-2xl top-14 right-14',
      initialPadding: 4,
    },
    {
      label: 'React',
      specialStyle: 'bg-cyan-400 text-xl right-64',
      initialPadding: 3,
    },
    {
      label: 'PostgreSQL',
      specialStyle: 'bg-slate-600 text-xl top-28 left-32',
      initialPadding: 3,
    },
    {
      label: 'MongoDB',
      specialStyle: 'bg-green-800 text-2xl top-48 left-12',
      initialPadding: 3,
    },
    {
      label: 'NextJS',
      specialStyle: 'bg-gray-800 text-4xl top-72 left-32',
      initialPadding: 3,
    },
    {
      label: 'NestJS',
      specialStyle: 'bg-red-800 text-3xl top-40 right-32',
      initialPadding: 4,
    },
  ];

  return (
    <div className="flex flex-col space-y-6 justify-start py-10 items-center h-full">
      <h1 className="text-5xl font-bold">My Skillz</h1>
      <div className="h-full w-full relative">
        {techs.map((tech) => (
          <div
            className={`w-max absolute font-bold ${tech.specialStyle} text-white py-${
              tech.initialPadding
            } px-${tech.initialPadding + 3} rounded-full ring-4 ring-gray-900`}
          >
            {tech.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

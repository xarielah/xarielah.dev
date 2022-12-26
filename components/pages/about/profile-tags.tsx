const ProfileTags = () => {
  const getAge = (): number => {
    const dateOfBirth = new Date('02/21/1997');
    const today = new Date();

    const ms = today.getTime() - dateOfBirth.getTime();
    const date = new Date(ms);

    return Math.abs(date.getUTCFullYear() - 1970);
  };

  const tags: string[] = [
    'fullstack',
    'selftaught',
    `${getAge()}yo`,
    'north',
    'israel',
    'lovesmusic',
    'animalover',
    'vegan',
    'guitarplayer',
  ];

  return (
    <div className="my-3 text-sm w-3/4 mx-auto text-center text-gray-500">
      <p>
        {tags.map((tag, index) => (
          <span key={index}>{`#${tag + (index !== tags.length - 1 ? ', ' : '')}`}</span>
        ))}
      </p>
    </div>
  );
};

export default ProfileTags;

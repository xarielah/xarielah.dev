import React, { useEffect, useState } from 'react';
import { dummyProjects } from '../../dummy-data';
import ProjectBox from './project-box';

const SearchProjects = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [projects, setProjects] = useState(dummyProjects);

    useEffect(() => {
        if (searchTerm) {
            const filteredData = dummyProjects.filter(
                (project) =>
                    project.name
                        .toLocaleLowerCase()
                        .includes(searchTerm.toLocaleLowerCase()) ||
                    project.tags
                        .toLocaleLowerCase()
                        .includes(searchTerm.toLocaleLowerCase()),
            );
            setProjects(filteredData);
        }
        return setProjects(dummyProjects);
    }, [searchTerm]);

    return (
        <>
            <div className='w-full flex justify-center flex-col items-center'>
                <input
                    onChange={(event) =>
                        setSearchTerm(event.target.value.trim())
                    }
                    placeholder='Search project...'
                    className='text-stone-500 search-input border-2 w-3/4 border-stone-500 focus:outline-0'
                />
            </div>
            <article className='my-8 grid grid-flow-row grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {projects.map((project, index) => (
                    <ProjectBox project={project} key={index} />
                ))}
            </article>
        </>
    );
};

export default SearchProjects;

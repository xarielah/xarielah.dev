import Link from 'next/link';
import React from 'react';
import { Project } from '../../dummy-data';

interface ProjectBoxProps {
    project: Project;
}

const ProjectBox = ({ project }: ProjectBoxProps) => {
    return (
        <Link href={`/project/${project.id}`}>
            <div
                className={`bg-stone-500 rounded-md min-h-[200px] overflow-hidden`}
            >
                <img src={project.img} className='object-contain' />
                <div className='text-white py-3 px-4 space-y-10 cursor-pointer bg-stone-800/50'>
                    <h4 className='text-lg font-medium'>{project.name}</h4>
                    <p className='text-sm text-stone-300'>{project.tags}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProjectBox;

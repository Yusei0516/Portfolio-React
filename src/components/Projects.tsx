import { projects} from "../data/projects";

export const Projects = () => {
    const teamProjects = projects.filter((p) => p.kind === "team");
    const indicidualProjects = projects.filter((p) => p.kind === "individual");

    return (
        <div className="projects">
            <div className="project-group">
                <h3>Team Projects</h3>
                <div className="project-list">
                    {teamProjects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>
            </div>

            <div className="project-group">
                <h3>Individual Projects</h3>
                <div className="project-list">
                    {indicidualProjects.map((p) => (
                        <ProjectCard key={p.title} project={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

type ProjectCardProps = {
    project: (typeof projects)[number];
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className="project-card">
            <h4>{project.title}</h4>
            <p className="project-role">{project.role}</p>
            <p className="project-description">{project.description}</p>
            <p className="project-tech">
                {project.techStack.map((t) => (
                    <span key={t} className="project-tech-chip">
                        {t}
                    </span>
                ))}
            </p>
            <a 
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link"
            >
                GitHub
            </a>
        </article>
    );
};
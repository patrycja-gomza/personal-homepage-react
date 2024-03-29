import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    StyledArticle,
    StyledHeader,
    StyledGitHubIcon,
    PortfolioTitle, PortfolioSubtitle,
    Wrapper,
    Tile,
    ProjectTitle,
    ProjectDescription,
    ProjectLinks,
    Link
} from './styled';
import {
    fetchProjects, selectProjects, selectLoading, selectError
} from './projectsSlice';
import Loading from "../Portfolio/States/Loading";
import Error from "../Portfolio/States/Error";
import shortenProjectName from "./API/shortenProjectName";

const Portfolio = () => {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <StyledArticle>
            <StyledHeader>
                <StyledGitHubIcon />
                <PortfolioTitle>Portfolio</PortfolioTitle>
                <PortfolioSubtitle>My recent projects</PortfolioSubtitle>
            </StyledHeader>
            {loading && <Loading />}
            {error ? (
                <Error />
            ) : (
                <Wrapper>
                    {projects && projects.map((project) => (
                        <Tile key={project.id}>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <ProjectLinks>
                                {project.homepage && (
                                    <>
                                        Demo: {" "}
                                        <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                                            https://{shortenProjectName(project.name)}.demo.com
                                        </Link>
                                    </>
                                )}
                                {project.html_url && (
                                    <>
                                        Code:{" "}
                                        <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                                            https://{shortenProjectName(project.name)}.code.com
                                        </Link>
                                    </>
                                )}
                            </ProjectLinks>
                        </Tile>
                    ))}
                </Wrapper>
            )}
        </StyledArticle>
    );
};

export default Portfolio;
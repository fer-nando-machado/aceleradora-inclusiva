import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "@mui/material/Link";
import json from "./pages.json";
import "./App.css";

interface Page {
  name: string;
  path: string;
}

interface Project {
  name: string;
  path: string;
  description: string;
  picture: string;
  pages: Page[];
}

interface Group {
  name: string;
  path: string;
  projects: Project[];
  hidden?: boolean;
}

interface GroupPanelProps {
  name: string;
  path: string;
  projects: Project[];
}

interface ProjectCardProps {
  name: string;
  currentPath: string;
  path: string;
  description: string;
  picture: string;
  pages: Page[];
}

interface ProjectLinkProps {
  name: string;
  currentPath: string;
  path: string;
}

const theme = createTheme({
  typography: {
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const GroupPanel: React.FC<GroupPanelProps> = ({ name, path, projects }) => (
  <Accordion className="GroupPanel">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel-${name}-content`}
      id={`panel-${name}-header`}
    >
      <Typography className="Title">{name}</Typography>
    </AccordionSummary>
    <AccordionDetails className="GroupPanelDetails">
      {projects.map((project, index) => (
        <ProjectCard key={index} currentPath={path} {...project} />
      ))}
    </AccordionDetails>
  </Accordion>
);

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  currentPath,
  path,
  description,
  picture,
  pages,
}) => (
  <Card className="ProjectCard">
    <CardMedia component="img" image={picture} title={name} />
    <CardContent className="CardContent">
      <Typography variant="h5" className="Title" gutterBottom>
        {name}
      </Typography>
      <Typography
        className="CardDescription"
        color="textSecondary"
        gutterBottom
      >
        {description}
      </Typography>
      <List dense>
        {pages.map((page, index) => (
          <ProjectLink
            key={index}
            currentPath={`${currentPath}/${path}`}
            {...page}
          />
        ))}
      </List>
    </CardContent>
  </Card>
);

const ProjectLink: React.FC<ProjectLinkProps> = ({
  name,
  currentPath,
  path,
}) => (
  <ListItem component="a" href={`pages/${currentPath}/${path}/index.html`}>
    <ListItemText className="Title" primary={name} />
  </ListItem>
);

const Header: React.FC = () => (
  <header className="Header">
    <img
      src="./inclusiva-logo-white.png"
      className="Logo"
      alt="logo da Aceleradora Inclusiva, com uma onda crescente de pessoas emergindo de um computador"
    />
    <Typography color="textSecondary">
      A <b>Aceleradora Inclusiva</b> é um projeto de educação inclusiva fruto de
      uma parceria entre a{" "}
      <b>
        <Link
          href="https://www.thoughtworks.com/pt-br/about-us/diversity-and-inclusion/aceleradora"
          target="_blank"
        >
          ThoughtWorks
        </Link>
      </b>
      , a{" "}
      <b>
        <Link href="http://www.pucrs.br/" target="_blank">
          PUCRS
        </Link>
      </b>
      , e o{" "}
      <b>
        <Link href="http://www.centrodeinovacao.org.br/" target="_blank">
          Centro de Inovação
        </Link>
      </b>
      , com o objetivo de facilitar o acesso de pessoas em situação de
      vulnerabilidade socioeconômica à área de tecnologia através do ensino de{" "}
      <b>lógica de programação</b> e tecnologias para a construção de{" "}
      <b>páginas web</b>.
    </Typography>
    <Link href="./aceleradora-ágil-e-inclusiva.pdf" target="_blank">
      <div className="Download">
        <em>eBook</em>
        <b>Aceleradora Ágil & Inclusiva</b>
        <small>(2019)</small>
      </div>
    </Link>
  </header>
);

const Main: React.FC = () => (
  <main className="Main">
    <Typography className="Title" variant="h5" gutterBottom>
      Projetos
    </Typography>
    {json
      .filter((group: Group) => !group.hidden)
      .map((group: Group, index: number) => (
        <GroupPanel key={index} {...group} />
      ))}
    <br />
    <br />
  </main>
);

const Footer: React.FC = () => (
  <footer className="Footer">
    <Typography variant="overline">© 2018-2020</Typography>
    <Typography variant="overline">
      Feito com <FavoriteIcon className="FavoriteIcon" /> por Fernando Machado
    </Typography>
  </footer>
);

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;

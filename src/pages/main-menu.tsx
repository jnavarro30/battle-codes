import { SimpleGrid, Title, Center, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./styles/main-menu.css";

const MainMenu = () => {
  const routes: string[] = ["solve", "create", "library", "settings"];

  return (
    <div className="main-menu">
      <Center>
        <Title className='title'>BATTLE CODES</Title>
      </Center>
      <SimpleGrid className="simple-grid">
        {routes.map((route) => (
          <Link to={"/" + route} className="route-link" key={route}>
            <Button className="route-btn">{route.toUpperCase()}</Button>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default MainMenu;

import {
  HistoryIcon,
  HouseIcon,
  PlayCircleIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import Button from "./components/button";
import Heading from "./components/heading";
import Timer from "./components/timer";

import "./styles/global.css";
import "./styles/theme.css";
import Cycles from "./components/cycles";
import Input from "./components/input";
import { Container } from "./components/container";
import DefaultButton from "./components/defaultButton";

function App() {
  return (
    <>
      <Container>
        <Heading> Chronos </Heading>
      </Container>
      <Container>
        <div className="content">
          <Button background="var(--primary)">
            <HouseIcon width={24} height={24} />
          </Button>
          <Button background="var(--primary)">
            <HistoryIcon width={24} height={24} />
          </Button>
          <Button background="var(--primary)">
            <SettingsIcon width={24} height={24} />
          </Button>
          <Button background="var(--primary)">
            <SunIcon width={24} height={24} />
          </Button>
        </div>
      </Container>
      <Container>
        <Timer />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <Input type="text" id="meuInput" title="Task" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;

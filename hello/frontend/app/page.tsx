import { Card, Center, Code, Description, Grid, Main } from "@/app/style";
import { StyledButton } from "./style";

export default function Home() {
  return (
    <Main>
      <Center>
        <Card
          href="/experiment"
          target="_self"
          rel="noopener noreferrer"
        >
          <h2>
            Experiment Manager <span>-&gt;</span>
          </h2>
          <p>
            Delve into the specifics of each experiment within the projects. Add additional experiments to projects. Find files used to generate datasets.
          </p>
        </Card>
      </Center>
    </Main>
  );
}

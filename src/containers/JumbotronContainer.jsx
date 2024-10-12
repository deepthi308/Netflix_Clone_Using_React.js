import Jumbotron from "../components/jumbotron/Jumbotron";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((jumboItem) => {
        return (
          <Jumbotron key={jumboItem.id} direction={jumboItem.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{jumboItem.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{jumboItem.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={jumboItem.image}
                alt={jumboItem.alt}
              ></Jumbotron.Image>
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}

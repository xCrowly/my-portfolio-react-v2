import imgs from "../assets/images/Portfolio-projects/imageImport";
import cards from "../assets/json/cards.json";
import Card from "./card";
import Card2 from "./card2";

var cardDirection = 0;

function ProjectsSection() {
  return (
    <div
      id="projects-sec"
      className="p-md-5 p-3 w-100 align-items-center justify-content-center"
    >
      <h1 className="text-center fw-bold pt-md-3 pt-5">
        PROJECTS
      </h1>
      
      {/* mapping in card Json file to render elements */}
      <div id="projects-container" className="container">
        {cards.data.cards.map((user) => {
          if (cardDirection % 2 === 0) {
            cardDirection++;
            return (
              <Card
                key={user.name}
                id={"card" + cardDirection}
                name={user.name}
                description={user.description}
                link={user.link}
                image={imgs[user.name]}
              />
            );
          } else {
            cardDirection++;
            return (
              <Card2
                key={user.name}
                id={"card" + cardDirection}
                name={user.name}
                description={user.description}
                link={user.link}
                image={imgs[user.name]}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;

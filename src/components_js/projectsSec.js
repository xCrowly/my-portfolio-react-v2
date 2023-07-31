import imgs from '../assets/images/Portfolio-projects/imageImport';
import cards from "../assets/json/cards.json";
import Card from "./card";
import Card2 from "./card2";

var cardDirection = 0;

function ProjectsSection() {
    return (

        <div id="projects-sec" className="p-5 w-100 align-items-center justify-content-center">
            {/* mapping in card Json file to render elements */}
            <div id='projects-container' className='container'>
                {cards.data.cards.map(user => {

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
                        )
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
                            />)
                    }
                })}
            </div>

        </div>

    )
}

export default ProjectsSection;
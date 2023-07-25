import imgs from '../assets/images/Portfolio-projects/imageImport';
import cards from "../assets/json/cards.json";
import Card from "./card";

function ProjectsSection() {
    return (
        <section id="projects-sec" className="projects-sec" style={{ background: "var(--header)" }}>
            <div className="card-container text-center container">
                
                {/* mapping in card Json file to render elements */}
                {cards.data.cards.map(user => {
                    return (
                        <Card
                            key={user.name}
                            name={user.name}
                            description={user.description}
                            link={user.link}
                            image={imgs[user.name]}
                        />
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection;
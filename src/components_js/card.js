function Card(props) {

    // Passing props to card from the Json file
    return (
        <div className="card card-holder m-4">
            <img src={props.image} className="card-image" alt={props.name} />
            <div className="card-body position-relative" alt={props.name} >
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.link} className="card-btn text-center" target={"_blank"} rel="noreferrer" >
                    Visit website
                </a>
            </div>
        </div>
    )
}

export default Card;
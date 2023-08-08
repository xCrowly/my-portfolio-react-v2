function Card(props) {
  // Passing props to card from the Json file
  return (
    <div id={props.id} className="card-holder row">
      <div className="myCard-img col-md-6 p-0">
        <a href={props.link} target={"_blank"} rel="noreferrer">
          <img src={props.image} className="card-image" alt={props.name} />
        </a>
      </div>

      <div
        className="myCard-text d-flex 
            col-md-6 p-lg-5 p-md-2 align-items-center justify-content-center"
      >
        <div>
          <h5 className="mt-md-0 my-3 fs-2 fw-bolder text-center">
            {props.name}
          </h5>
          <p className="text-start text-md-center text-lg-start">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

const Pet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.animal}</p>
            <p>{props.breed}</p>
            <hr></hr>
        </div>
    )
}

export default Pet

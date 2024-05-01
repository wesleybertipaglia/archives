import { Component } from "react"

class Carrousel extends Component {
    state = {
        active: 0,
    }

    static defaultProps = {
        images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
    }

    handleIndexClick = (e) => {
        this.setState({
            active: +e.target.dataset.index, // the + transfor the string into a number
        })
    }

    render() {
        const { name, animal, images  } = this.props
        const { active } = this.state

        return (
            <div className="carrousel">
                <figure>
                    <div className="w-full h-auto aspect-square rounded-lg shadow-md overflow-hidden">
                        <img
                            src={images[active]}
                            alt={name}
                            className="w-full object-cover scale-110"
                        />
                    </div>

                    <figcaption>
                        <span className="italic text-sm">
                            {name} - the {animal}
                        </span>
                    </figcaption>
                </figure>

                <div className="flex gap-4 mt-3 w-full overflow-auto">
                    {images.map((photo, index) => (
                        <div className="h-20 w-auto aspect-square rounded overflow-hidden cursor-pointer">
                            <img
                                key={photo}
                                src={photo}
                                data-index={index}
                                onClick={(e) => {
                                    this.handleIndexClick(e)
                                }}
                                className={'w-full object-cover scale-110 ' + (index === active ? 'active' : 'opacity-50')}
                                alt="animal thumbnail"
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Carrousel

export default function Entry(props) {
    return (
        <main>
            <article>
                <div className="image">
                    <img className="card" src={props.img.src} alt={props.img.alt} />
                </div>

                <div className="content">
                    <div className="header">
                        <div className="location">
                            <img className="icon" src="/src/components/loacation.png" alt="location icon" />
                            <span className="country">{props.country}</span>
                            <a
                                className="map-link"
                                href="https://www.google.com/maps/place/Mount+Fuji"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on Google Maps
                            </a>
                        </div>
                        <h1 className="title">{props.title}</h1>
                    </div>

                    <div className="details">
                        <h2 className="dates">{props.dates}</h2>
                        <p className="description">
                            {props.text}
                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
}

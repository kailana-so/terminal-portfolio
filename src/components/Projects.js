import './Projects.css'

export default function Projects() {
    return (
        <section className="projects" >
            <h1> Projects </h1>

            <div className="projects-container">

                <section>
                    <div>
                        <div>
                            <iframe src="https://pages.git.generalassemb.ly/kailana/tic-tac/"></iframe>
                        </div>
                    </div>
                    <div> desciption</div>
                </section>

                <section className="project">
                    <div> 
                        <p>
                        GenusGenius is a web app design to assist with the identification of different plant species.
                        </p>
                        <p>
                        This single-page app currently has three methods for exploring plants in your area:
                        </p>
                        <p>
                            <ul>
                                <li> Image identification API</li>
                                <li> Intelligent searching: keyword extraction</li>
                                <li> Google maps API</li>
                            </ul>
                            <small> I love native plants...</small>
                        </p>
                    </div>
                    <div>
                        <iframe src="https://genus-genius.herokuapp.com/"></iframe>
                    </div>
                </section>

            </div>
        </section>
    )
}
import './CardMovie.css';

function MovieDetail(props) {
    console.log(props)
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content  bg-dark">
                    {/* <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div> */}
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-4">
                                <img src={props.img} alt={props.title} width="100%"/>
                            </div>
                            <div className="col-8">
                                <h1>{props.title}</h1>
                                <p>{props.overview}</p>
                            </div>
                        </div>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/QV4qKaeEf9c"  title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; 
                        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
  }




export default MovieDetail;
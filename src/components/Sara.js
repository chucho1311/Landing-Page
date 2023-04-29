import foto from "../common/foto.jpg"
import tabla1 from "../common/tabla-1.png"
import tabla2 from "../common/tabla-2.png"

const Sara = () => {
    return (
        <div className="col-11 centrar h-full ">
            <div className="row gradient-row centrar h-full sm:min-h-80 p-6 sm:p-20" style={{ backgroundColor: "white" }}>
                <div className="col-sm-11 centrar mb-10">
                    <h3 className="text-2xl sm:text-5xl text-white centrar">Estrategia Didáctica para potenciar la enseñanza - aprendizaje en estudiantes sordos de la ENSB</h3>

                </div>
                <div className="col-sm-6 centrar mb-10">
                    <img className="h-40 sm:h-80 img-chess" src={foto} alt="chess" />
                </div>
                <div className="col-sm-6 centrar">
                    <h2 className="text-2xl sm:text-3xl text-white">Investigadoras:</h2>
                    <h2 className="text-2xl sm:text-4xl text-white centrar ml-5"> Sara Lucía y Margareth Garzon</h2>
                    <h2 className="text-2xl sm:text-3xl text-white">Asesoras:</h2>
                    <h2 className="text-2xl sm:text-4xl text-white centrar ml-10"> Andrea Caceres y Camila Sanchez.</h2>
                </div>

            </div>
            <div className="row centrar min-h-80 p:10 sm:p-20 " style={{ backgroundColor: "white" }}>
                {/* <hr className="col self-center" /> */}
                <h2 className="col-8 text-4xl sm:text-7xl text-black centrar">Categorias y Subcategorias</h2>
                {/* <hr className="col self-center" /> */}
                <h2 className="col-12 text-xl sm:text-3xl text-black centrar">Tabla 1 Categorias y subcategorias</h2>

                <div className="col-12 centrar mb-10">
                    <img className="h-48 sm:h-full img-chess" src={tabla1} alt="chess" />
                </div>
                <h2 className="col-12 text-xl sm:text-3xl text-black centrar">Tabla 2 Entrevistados</h2>

                <div className="col-12 centrar mb-10">
                    <img className="h-40 sm:h-full img-chess" src={tabla2} alt="chess" />
                </div>
            </div>
            {/* <div className="row centrar min-h-80  divide-x  divide-y">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 chess-piece min-h-20 p-3">
                    <div className="row centrar">
                        <img className="col-10 col-sm-11 col-md-8 h-40 sm:h-60 md:min-h-full" src="https://static.vecteezy.com/system/resources/thumbnails/006/670/924/small_2x/golden-chess-king-standing-alone-on-the-chessboard-photo.jpg" alt="chess king" />
                        <div className="col-10 col-sm-11 col-md-11 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-3xl text-white underline decoration-sky-500">KING</h2>
                            <p className="text-justify text-white pt-1">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 chess-piece min-h-20  w-full p-3">
                    <div className="row centrar">
                        <img className="col-10 col-sm-11 col-md-8 h-40 sm:h-60 md:min-h-full" src="https://media.istockphoto.com/id/1154467452/photo/gold-queen-chess-standing-against-black-background.jpg?s=170667a&w=0&k=20&c=9EyUkSDAVd09wC6aMb0gEAq8Yam8o4w33jC-WfEMM14=" alt="chess king" />
                        <div className="col-10 col-sm-11 col-md-11 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-3xl text-white underline decoration-sky-500">QUEEN</h2>
                            <p className="text-justify text-white pt-1">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row centrar">
                        <img className="col-10 col-sm-11 col-md-8 h-40 sm:h-60 md:min-h-full" src="https://media.istockphoto.com/id/1154467847/photo/gold-bishop-chess-standing-against-black-background.jpg?s=612x612&w=0&k=20&c=5O1C1NjpmoyyN-C54o0BlJku08cEQVi_Rl9gOAukiwc=" alt="chess king" />
                        <div className="col-10 col-sm-11 col-md-11 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-3xl text-white underline decoration-sky-500">BISHOP</h2>
                            <p className="text-justify text-white pt-1">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row centrar">
                        <img className="col-10 col-sm-11 col-md-8 h-40 sm:h-60 md:min-h-full" src="https://thumbs.dreamstime.com/b/gold-knightchess-piece-stand-black-background-concept-leadership-unique-183866521.jpg" alt="chess king" />
                        <div className="col-10 col-sm-11 col-md-11 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-3xl text-white underline decoration-sky-500">KNIGHT</h2>
                            <p className="text-justify text-white pt-1">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row centrar">
                        <img className="col-10 col-sm-11 col-md-8 h-40 sm:h-60 md:min-h-full" src="https://thumbs.dreamstime.com/b/gold-rook-chess-standing-against-black-background-game-figurine-leader-success-business-concept-pieces-board-games-strategy-d-186894870.jpg" alt="chess king" />
                        <div className="col-10 col-sm-11 col-md-11 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-3xl text-white underline decoration-sky-500">TOWER</h2>
                            <p className="text-justify text-white pt-1">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row centrar">
                        <img className="col-10 col-sm-11 col-md-8 h-40 sm:h-60 md:min-h-full" src="https://media.istockphoto.com/id/1154467849/es/foto/ajedrez-de-peones-de-oro-de-pie-sobre-fondo-negro.jpg?s=612x612&w=0&k=20&c=Mw8-zCvBoH7H1HcgBqPF44j7xIIMnjwcQ_hqsaCNX4Y=" alt="chess king" />
                        <div className="col-10 col-sm-11 col-md-11 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-3xl text-white underline decoration-sky-500">KING</h2>
                            <p className="text-justify text-white pt-1">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row centrar h-full" style={{ backgroundColor: "white" }}>
                <div className="col-12 col-sm-10 col-md-10 col-lg-8 centrar p-6" style={{ backgroundColor: "#33374b" }}>
                    <h4 className="text-white text-justify sm:px-10 md:px-10">
                        Link para ingresar al canal oficial de la ENSB- visitar la lista de reproducción titulada “proyecto de investigación UCC - LSC
                    </h4>
                    <a className="text-justify sm:px- md:px-10" href="https://www.youtube.com/watch?v=Ng_awSzFalU&list=PLGhvG83vckdR4Qz7JdQPNJ3DkQYK2SLy4"> Click Aqui </a>
                    <h4 className="text-white text-justify sm:px-10 md:px-10 mt-10">
                        Link del video propuesta N-señaconmigo
                    </h4>
                    <a className="text-justify sm:px-10 md:px-10" href="https://youtu.be/Xvlu1i1kTNQ"> Click Aqui  </a>

                </div>

            </div>
        </div>
    )
}

export default Sara;
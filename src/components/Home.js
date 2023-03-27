

const Home = () => {

//     import Spline from "@splinetool/react-spline";

//  <div className="h-80">
//     <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline" />

// </div> 
//  <div className="row centrar container-rotate">
//                 <div className="col-4 rotate ">
//                     <img className="image-rotate" src="https://img.freepik.com/psd-premium/tablero-ajedrez-ilustracion-renderizado-3d-fondo-transparente_494250-23166.jpg?w=2000" alt="image_test" />
//                 </div>

//             </div>

    return (
        <div className="col-11 centrar h-full ">
            <div className="row gradient-row centrar min-h-80 p-20" style={{ backgroundColor: "white" }}>
                <h2 className="text-8xl text-white centrar">Web Shoker</h2>
                <h2 className="text-5xl text-white centrar">CHESS SET</h2>
                {/* <div className="centrar">
                    <img className="h-20" src="https://5.imimg.com/data5/MS/MY/JN/SELLER-68453713/15-x-15-collectible-chess-game-board-set-made-with-black-marble-1000x1000.jpg" alt="chess-image" />

                </div> */}
            </div>
            <div className="row centrar min-h-80 p-20" style={{ backgroundColor: "white" }}>
                <h2 className="col-12 text-3xl text-black centrar">CHECK THE</h2>
                <hr className="col-4 self-center" />
                <h2 className="col-3 text-7xl text-black centrar">FIGURES</h2>
                <hr className="col-4 self-center" />
                <h4 className="col-11 text-justify md:px-40">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </h4>
                <div className="col-12 centrar">
                    <img className=" h-80 img-chess" src="https://previews.123rf.com/images/bankrx/bankrx1803/bankrx180300375/98317688-gold-chess-piece-stand-in-a-row-king-queen-bishop-knight-rook-pawn-on-white-background.jpg" alt="chess" />

                </div>
            </div>
            <div className="row centrar min-h-80  divide-x  divide-y">
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row">
                        <img className="col-6 h-50" src="https://static.vecteezy.com/system/resources/thumbnails/006/670/924/small_2x/golden-chess-king-standing-alone-on-the-chessboard-photo.jpg" alt="chess king" />
                        <div className="col-6 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-5xl text-white underline decoration-sky-500">KING</h2>
                            <p className="text-justify text-white pt-3">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row">
                        <img className="col-6 min-h-full" src="https://media.istockphoto.com/id/1154467452/photo/gold-queen-chess-standing-against-black-background.jpg?s=170667a&w=0&k=20&c=9EyUkSDAVd09wC6aMb0gEAq8Yam8o4w33jC-WfEMM14=" alt="chess king" />
                        <div className="col-6 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-5xl text-white underline decoration-sky-500">QUEEN</h2>
                            <p className="text-justify text-white pt-3">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row">
                        <img className="col-6 min-h-full" src="https://media.istockphoto.com/id/1154467847/photo/gold-bishop-chess-standing-against-black-background.jpg?s=612x612&w=0&k=20&c=5O1C1NjpmoyyN-C54o0BlJku08cEQVi_Rl9gOAukiwc=" alt="chess king" />
                        <div className="col-6 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-5xl text-white underline decoration-sky-500">BISHOP</h2>
                            <p className="text-justify text-white pt-3">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row">
                        <img className="col-6 min-h-full" src="https://thumbs.dreamstime.com/b/gold-knightchess-piece-stand-black-background-concept-leadership-unique-183866521.jpg" alt="chess king" />
                        <div className="col-6 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-5xl text-white underline decoration-sky-500">KNIGHT</h2>
                            <p className="text-justify text-white pt-3">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row">
                        <img className="col-6 min-h-full" src="https://thumbs.dreamstime.com/b/gold-rook-chess-standing-against-black-background-game-figurine-leader-success-business-concept-pieces-board-games-strategy-d-186894870.jpg" alt="chess king" />
                        <div className="col-6 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-5xl text-white underline decoration-sky-500">TOWER</h2>
                            <p className="text-justify text-white pt-3">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-5 col-lg-4 chess-piece min-h-40  w-full p-3">
                    <div className="row">
                        <img className="col-6 min-h-full" src="https://media.istockphoto.com/id/1154467849/es/foto/ajedrez-de-peones-de-oro-de-pie-sobre-fondo-negro.jpg?s=612x612&w=0&k=20&c=Mw8-zCvBoH7H1HcgBqPF44j7xIIMnjwcQ_hqsaCNX4Y=" alt="chess king" />
                        <div className="col-6 justify-center">
                            <label className="text-xl text-white underline decoration-sky-500">THE</label>
                            <h2 className="text-5xl text-white underline decoration-sky-500">KING</h2>
                            <p className="text-justify text-white pt-3">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ."
                            </p>
                            <label className="text-red-800 text-xl"> DIMENSIONS</label>
                            <label className="text-white"> W: 2.5cm D:2.5cm H:6.4cm</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row centrar h-full" style={{ backgroundColor: "white" }}>
                <div className="col-12 col-sm-6 centrar p-6" style={{ backgroundColor: "#33374b" }}>
                    <h2 className="text-3xl text-black centrar">CHECK THE</h2>
                    <h2 className="text-7xl text-black centrar">CHESSBOARD</h2>
                    <h4 className="text-white text-justify md:px-20">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </h4>
                    <button className="col-4 btn btn-danger justify-self-center">
                        View
                    </button>
                </div>

                <div className="col-12 col-sm-6 centrar" style={{ overflow: "hidden" }}>
                    <img className="h-full img-chess2" src="https://5.imimg.com/data5/MS/MY/JN/SELLER-68453713/15-x-15-collectible-chess-game-board-set-made-with-black-marble-1000x1000.jpg" alt="chess" />

                </div>

            </div>


        </div>

    )
}

export default Home;
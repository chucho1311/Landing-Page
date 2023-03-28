

const Header = () => {

    return (
        <div className="row justify-center sm:justify-start sm:h-48 pt-3 pb-24 gap-8 md:gap-2">
            <div className="col-10 col-sm-4 col-lg-3 self-center centrar py-3">
                <img className="h-32 sm:h-38 rounded-lg" src="https://previews.123rf.com/images/zhogolevpv/zhogolevpv1705/zhogolevpv170500002/77974836-un-logotipo-de-club-de-ajedrez-en-blanco-y-negro-vector-para-su-dise%C3%B1o-de-diferentes-tipos-de.jpg" alt="logo-chess" />
            </div>
            <div className="col-3 col-sm-1 col-md-1 self-center centrar">
                <button className="btn btn-primary">Chess</button>
            </div>
            <div className="col-3 col-sm-2 col-md-2 col-lg-1 self-center centrar">
                <button className="btn btn-warning">Figures</button>
            </div>
            <div className="col-3 col-sm-1 col-md-1 self-center centrar">
                <button className="btn btn-info">Table</button>
            </div>
        </div>
    )
}

export default Header;
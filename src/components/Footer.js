import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = (props) => {
    return (
      <div className="fixed-bottom container" style={{backgroundColor:'white'}}>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-2 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src="https://i.pinimg.com/originals/33/88/64/338864d9e7a7cd25a02b57b893e424c3.gif"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </a>
            <span className="text-muted">© 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
}

export default FooterComponent;
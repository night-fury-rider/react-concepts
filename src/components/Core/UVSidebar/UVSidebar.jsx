import { Home, Users } from "react-feather";
import { getErrorInString } from "../../../modules/Errors/ErrorService";

const UVSidebar = props => {

  if (!props.links || props.links.length === 0) {
    throw new Error(getErrorInString('Invalid Sidebar Data', null, 'Invalid sidebar data is passed to UVSidebar component'));
  }

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
        <ul className="nav flex-column h-100">
          {props.links.map((linkObj, linkIndex) => (
            <li className="nav-item" key={linkIndex}>
              <a className="nav-link active" href="#home">
                <Home size={16} />
                <span className="sidebar-link-title">{linkObj.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default UVSidebar;

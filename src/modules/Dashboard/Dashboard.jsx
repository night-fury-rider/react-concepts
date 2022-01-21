import UVSidebar from '../../components/Core/UVSidebar/UVSidebar';
import UVGrid from '../../components/UVGrid/UVGrid';

import UVFooter from '../../components/Core/UVFooter/UVFooter';

import './Dashboard.css';
import dData from './dashboard-data.json';

import appData from '../../app-data.json';

const Dashboard = props => {

  return (
    <div>


      <div className="container-fluid">
        <div className="row">
          <UVSidebar links={appData.sidebar.links} />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <UVGrid columns={appData.table.columns} rows={appData.table.rows} title={dData.title} />
          </main>
        </div>
      </div>

      <UVFooter message={appData.footer.message} />
    </div>
  )
};

export default Dashboard;

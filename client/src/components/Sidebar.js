import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import M from 'materialize-css';
import './Sidebar.css';

const Sidebar = ({
  auth: {
    user: { name, email },
  },
}) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="row">
      <div className="sidebar col s3 m3 l3">
        <ul className="collapsible">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="img/ocean.jpg" alt="user" className="bg" />
              </div>
              <img src="img/person1.jpg" alt="" className="circle" />
              <div className="details">
                <p>{name}</p>
                <p>{email}</p>
              </div>
            </div>
          </li>

          <li className="links">
            <div className="collapsible-header">
              <p>Profile</p>
            </div>

            <div className="collapsible-body blue">
              <Link to="/settings">
                <h5 className="linkInner">
                  Settings
                  <i class="material-icons prefix">settings</i>
                </h5>
              </Link>
            </div>

            <div className="collapsible-body green">
              <Link to="/notifications">
                <h5 className="linkInner">
                  Notifications
                  <i class="material-icons prefix">notifications_active</i>
                </h5>
              </Link>
            </div>
          </li>
          <li className="links">
            <div className="collapsible-header">
              <p>My Tasks</p>
            </div>
            <div className="collapsible-body orange darken-3">
              <Link to="/task1">
                <h5 className="linkInner">
                  Task 1<i class="material-icons prefix">looks_one</i>
                </h5>
              </Link>
            </div>
            <div className="collapsible-body  orange darken-5">
              <Link to="/task2">
                <h5 className="linkInner">
                  Task 2<i class="material-icons prefix">looks_two</i>
                </h5>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Sidebar);

import { useEffect, useState } from 'react';
import { useUsersContext } from '../contexts/UsersContext';

const ListItem = ({ user }) => {
  const userName = Object.values(user.name).join(' ');
  const { street, city, state, country, postcode } = user.location;
  return (
    <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
      <div className="d-flex">
        <img
          src={user.picture.large}
          className="custom-block-image img-fluid"
          alt=""
          loading="lazy"
        />

        <div className="custom-block-topics-listing-info d-flex">
          <div>
            <h5 className="mb-2">{userName}</h5>

            <p className="mb-0">
              {street.number},&nbsp;{street.name}
              <br />
              {city},&nbsp;{state},&nbsp;{country},&nbsp;{postcode}
              <br />
              Phone: {user.phone},&nbsp;Cell: {user.cell}
            </p>

            <a
              href="#"
              //   href="topics-detail.html"
              className="btn custom-btn mt-3 mt-lg-4"
            >
              Learn More
            </a>
          </div>

          <span className="badge bg-design rounded-pill ms-auto">
            {user.dob.age}
          </span>
        </div>
      </div>
    </div>
  );
};

const Listing = () => {
  const { query } = useUsersContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://randomuser.me/api/?results=50');
      const data = await res.json();
      if (data && data.results) {
        setUsers(data.results);
      }
    };
    fetchUsers();
  }, []);

  const usersList = () => {
    if (query) {
      return users.filter((u) => {
        // const vals = Object.values(u);
        // return new RegExp(query, 'gi').test(vals.toString());
        // OR
        return new RegExp(query, 'gi').test(JSON.stringify(u));
      });
    }

    return users;
  };

  const renderUsers = () => {
    if (users.length > 0) {
      return usersList().map((user) => (
        <ListItem key={user.login.uuid} user={user} />
      ));
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h3 className="mb-4">User Details</h3>
          </div>

          <div className="col-lg-8 col-12 mt-3 mx-auto">{renderUsers()}</div>

          {/* <div className="col-lg-12 col-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">Prev</span>
                  </a>
                </li>

                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>

                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Listing;

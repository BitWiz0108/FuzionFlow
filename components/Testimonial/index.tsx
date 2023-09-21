import React, { useState, useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  const MDB = global.window ? require("mdb-react-ui-kit") : null;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <MDB.MDBContainer className="py-5 border-solid border-blue-700 border-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-750 shadow-lg">
      <MDB.MDBCarousel showControls dark>
        <MDB.MDBCarouselInner>
          <MDB.MDBCarouselItem className="active">
            <MDB.MDBContainer>
              <MDB.MDBRow className="text-center">
                <MDB.MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-white mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
                <MDB.MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-white mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
                <MDB.MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-white mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
              </MDB.MDBRow>
            </MDB.MDBContainer>
          </MDB.MDBCarouselItem>
          <MDB.MDBCarouselItem>
            <MDB.MDBContainer>
              <MDB.MDBRow className="text-center">
                <MDB.MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-105">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <p className="mb-2 text-xl font-semibold text-gray-800">
                    Anna Deynah
                  </p>
                  <h6 className="text-white mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
                <MDB.MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Alex Rey</h5>
                  <h6 className="text-white mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
                <MDB.MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-white mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
              </MDB.MDBRow>
            </MDB.MDBContainer>
          </MDB.MDBCarouselItem>
          <MDB.MDBCarouselItem>
            <MDB.MDBContainer>
              <MDB.MDBRow className="text-center">
                <MDB.MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Anna Deynah</h5>
                  <h6 className="text-white mb-3">UX Designer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
                <MDB.MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">John Doe</h5>
                  <h6 className="text-white mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star-half-alt"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
                <MDB.MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4 transform transition-transform hover:scale-110">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                    />
                  </div>
                  <h5 className="mb-3">Maria Kate</h5>
                  <h6 className="text-white mb-3">Photographer</h6>
                  <p className="px-xl-3">
                    <MDB.MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDB.MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        fas
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                    <li>
                      <MDB.MDBIcon
                        far
                        icon="star"
                        size="sm"
                        className="text-warning"
                      />
                    </li>
                  </MDB.MDBTypography>
                </MDB.MDBCol>
              </MDB.MDBRow>
            </MDB.MDBContainer>
          </MDB.MDBCarouselItem>
        </MDB.MDBCarouselInner>
      </MDB.MDBCarousel>
    </MDB.MDBContainer>
  ) : null;
}

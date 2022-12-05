import styled from "styled-components";

const Footer = () => {
  return (
    <footer className="container-fluid footer d-flex align-items-center justify-content-center flex-row">
      <div className="container mt-3">
        <div className="row mb-4">
          <div className="col-md-4">
          </div>
          <div className="col-md-6">
            <CreatBy className="created_by">
              <h6>
                Developed By{" "}
                <a target="_blank">Saeid Mastali</a>
              </h6>
            </CreatBy>
          </div>
          <div className="col-md-2">
            <div className="backToTop text-end">
              <h6>
                <a href="#whole__section">Back To Top</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const CreatBy = styled.div`
  color: #fff;
  width: 90%;
  margin: auto;

  h6 i {
    color: var(--bs-danger);
    animation: heart 1.5s infinite;
    animation-timing-function: linear;
  }

  h6 a {
    font-family: "Playball";
    text-decoration: none;
    color: var(--primaryColor);
    font-weight: 600;
  }
  h6 a:hover {
    text-decoration: underline;
}
`;
export default Footer;

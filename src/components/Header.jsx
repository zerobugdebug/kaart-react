import PropTypes from "prop-types";

const headingStyle = {
  color: "blue",
  backgroundColor: "red",
};

const Header = ({ data, data2 }) => {
  return (
    <header>
      <h1 style={headingStyle}>
        Task Tracker, {data} and {data2}
      </h1>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.string.isRequired,
  data2: PropTypes.string,
};

Header.defaultProps = {
  data2: "DATA2",
};

export default Header;

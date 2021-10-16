// class Dropdown extends Component {
//   state = {
//     isOpen: false,
//   };

//   toggleList = () => {
//     this.setState((prevState) => ({
//       isOpen: prevState.isOpen ? false : true,
//     }));
//   };

//   render() {
//     const { title, content } = this.props;
//     const { isOpen } = this.state;

//     return (
//       <div className='dropdown'>
//         <h3 onClick={() => this.toggleList()}>
//           {title}
//           <span
//             className={isOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"}
//           ></span>
//         </h3>

//         {Array.isArray(content) ? (
//           <ul
//             className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}
//           >
//             {content.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         ) : (
//           <p className={`dropdown-list ${isOpen ? "drop-open" : "drop-close"}`}>
//             {content}
//           </p>
//         )}
//       </div>
//     );
//   }
// }

// Dropdown.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
// };

// export default Dropdown;

import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Buttons = ({ loading, pageData, setPage, page }) => {
  const pageConditions = [
    0,
    1,
    page - 3,
    page - 2,
    page - 1,
    page,
    page + 1,
    page + 2,
    page + 3,
  ];
  const pointsConditions = [page - 3, page + 3];
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pageData.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
    console.log("ButtonsPage", page);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = pageData.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <>
      {!loading && (
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPage}>
            <FaChevronLeft />
          </button>
          {pageData.map((item, index) => {
            if (pageConditions.includes(index)) {
              return (
                <button
                  key={index + 1}
                  // className={`page-btn ${
                  //   index + 1 == page - 2 && index + 1 > 3 ? "points-btn" : null
                  // }`}
                  disabled={
                    pointsConditions.includes(index) && index != 0 && index != 1
                      ? true
                      : false
                  }
                  // className={`${
                  //   pointsConditions.includes(index) && index != 0 && index != 1
                  //     ? "points-btn"
                  //     : index == page
                  //     ? null
                  //     : "page-btn"
                  // } `}
                  className={`${
                    pointsConditions.includes(index) && index != 0 && index != 1
                      ? "points-btn"
                      : index == page
                      ? "page-btn page-active"
                      : "page-btn"
                  } `}
                  onClick={() => handlePage(index)}
                >
                  {pointsConditions.includes(index) && index != 0 && index != 1
                    ? "..."
                    : index + 1}
                </button>
              );
            }
          })}
          <button type="button" className="next-btn" onClick={nextPage}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
};
export default Buttons;

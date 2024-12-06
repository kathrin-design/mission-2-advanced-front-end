import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Courses from "../../components/course/Courses";
import FilterCategory from "../../components/FilterCategory";
import "./all-products.css";

const SemuaProduk = () => {
  const categories = [
    {
      iconClass: "fa-book",
      title: "Bidang Studi",
      options: [
        "Pemasaran",
        "Desain",
        "Digital & Teknologi",
        "Bisnis Manajemen",
      ],
    },
    {
      iconClass: "fa-bag-shopping",
      title: "Harga",
      options: ["Gratis", "Berbayar", "Diskon"],
    },
    {
      iconClass: "fa-clock",
      title: "Durasi",
      options: ["Kurang dari 4 Jam", "4 - 8 Jam", "Lebih dari 8 Jam"],
    },
  ];

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="mb-4">
          <p className="text-start fw-semibold fs-4 poppins text-dark mb-1">
            Koleksi Video Pembelajaran Unggulan
          </p>
          <p className="text-start text-secondary fw-medium DM_Sans">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <div className="bg-white border rounded-4 p-3 d-flex flex-column gap-3">
              <div className="d-flex flex-row justify-content-between">
                <div className="text-secondary fw-medium">Filter</div>
                <div className="text-danger fw-medium">Reset</div>
              </div>
              <div className="d-flex flex-column gap-3">
                {categories.map((category, idx) => (
                  <FilterCategory
                    key={idx}
                    iconClass={category.iconClass}
                    title={category.title}
                    options={category.options}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-wrap gap-3">
                <div className="dropdown border rounded-3">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle bg-white border-0 text-secondary px-4 d-flex align-items-center fw-medium"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Urutkan
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item  text-secondary text-center"
                        href="#"
                      >
                        Harga Terendah
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item  text-secondary text-center"
                        href="#"
                      >
                        Harga Tertinggi
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-secondary text-center"
                        href="#"
                      >
                        Rating Terendah
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-secondary text-center"
                        href="#"
                      >
                        Rating Tertinggi
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="search-box border rounded-3 d-flex flex-grow-1 align-items-center">
                  <input
                    type="text"
                    className="border-0 w-100 px-3 input-field"
                    placeholder="Search..."
                  />
                  <i className="fa-solid fa-magnifying-glass p-2 text-secondary"></i>
                </div>
              </div>
              <Courses />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SemuaProduk;

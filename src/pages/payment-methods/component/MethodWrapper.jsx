import React, { useState } from "react";
import Method from "./Method";
import "../payment-methods.css";
import logoBCA from "../../../assets/logo-bca.png";
import logoBRI from "../../../assets/logo-bri.png";
import logoBNI from "../../../assets/logo-bni.png";
import logoMandiri from "../../../assets/logoMandiri.webp";
import logoDana from "../../../assets/logo-dana.jpg";
import logoLinkAja from "../../../assets/logo-linkaja.png";
import logoOvo from "../../../assets/logo-ovo.png";
import logoShopeepay from "../../../assets/logo-shopeepay.png";
import logoJCB from "../../../assets/logo-jcb.jpg";
import logoMasterCard from "../../../assets/logo-mastercard.png";
import logoVisa from "../../../assets/logo-visa.png";

const MethodWrapper = ({ title, className, button }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div
      className={`border rounded-2 bg-white p-3 p-sm-4 d-flex flex-column gap-3 ${className}`}
    >
      <p className="text-black fs-5 fw-semibold m-0">{title}</p>

      <div
        className="border rounded-2 p-3 d-flex justify-content-between align-items-center"
        onClick={() => toggleSection("transferBank")}
      >
        <div className="text-black fw-semibold fs-6">Transfer Bank</div>
        <i
          className={`fa-solid fa-chevron-${
            expandedSection === "transferBank" ? "up" : "down"
          } text-secondary fa-lg`}
        ></i>
      </div>
      {expandedSection === "transferBank" && (
        <>
          <Method
            img={<img src={logoBCA} alt="logo BCA" className="logo-bank me-3" />}
            title="Bank BCA"
          />
          <Method
            img={<img src={logoBNI} alt="logo BNI" className="logo-bank me-3" />}
            title="Bank BNI"
          />
          <Method
            img={<img src={logoBRI} alt="logo BRI" className="logo-bank me-3" />}
            title="Bank BRI"
          />
          <Method
            img={
              <img src={logoMandiri} alt="logo Mandiri" className="logo-bank me-3" />
            }
            title="Bank Mandiri"
          />
        </>
      )}

      <div
        className="border rounded-2 p-3 d-flex justify-content-between align-items-center"
        onClick={() => toggleSection("eWallet")}
      >
        <div className="text-black fw-semibold fs-6">E-Wallet</div>
        <i
          className={`fa-solid fa-chevron-${
            expandedSection === "eWallet" ? "up" : "down"
          } text-secondary fa-lg`}
        ></i>
      </div>
      {expandedSection === "eWallet" && (
        <>
          <Method
            img={
              <img
                src={logoDana}
                alt="logo Dana"
                className="logo-wallet me-3"
              />
            }
            title="Dana"
          />
          <Method
            img={
              <img src={logoOvo} alt="logo OVO" className="logo-wallet me-3" />
            }
            title="OVO"
          />
          <Method
            img={
              <img
                src={logoLinkAja}
                alt="logo Link Aja"
                className="logo-wallet me-3"
              />
            }
            title="Link Aja"
          />
          <Method
            img={
              <img
                src={logoShopeepay}
                alt="logo Shopee Pay"
                className="logo-wallet me-3"
              />
            }
            title="Shopee Pay"
          />
        </>
      )}

      <div
        className="border rounded-2 p-3 d-flex justify-content-between align-items-center"
        onClick={() => toggleSection("card")}
      >
        <div className="text-black fw-semibold fs-6">Kartu Kredit/Debit</div>
        <i
          className={`fa-solid fa-chevron-${
            expandedSection === "card" ? "up" : "down"
          } text-secondary fa-lg`}
        ></i>
      </div>
      {expandedSection === "card" && (
        <Method
          img={
            <div>
              <img
                src={logoMasterCard}
                alt="MasterCard"
                className="logo me-3"
              />
              <img src={logoVisa} alt="Visa" className="logo me-3" />
              <img src={logoJCB} alt="JCB" className="logo me-3" />
            </div>
          }
        />
      )}
      {button}
    </div>
  );
};

export default MethodWrapper;

import React from "react";
import { FaRandom, FaComments, FaBroadcastTower, FaInstagram, FaPersonBooth, FaBook, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Actions({ isInSidebar }) {
  return (
    <div
      className="nav-actions f-poppins text-light trans-c-03"
      style={
        isInSidebar
          ? {
              display: "flex",
              background: "var(--dark)",
              marginInline: "0px",
              borderRadius: "0px",
            }
          : {}
      }
    >
      <span>
        <a
          href="https://instagram.com/vibes.him"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={20} />
          <p>Creator's Instagram</p>
        </a>
      </span>
      <span>
        <Link to="/details/random" href="https://twitter.com/vibeswithsiba">
          <FaRandom size={20} />
          <p>Random</p>
        </Link>
      </span>
      {!isInSidebar && (
        <span>
          <a
            href="https://zorooo.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <FaBookOpen size={20} />
            <p>Manga</p>
          </a>
        </span>
      )}
    </div>
  );
}

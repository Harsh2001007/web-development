import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const notifier = () =>
  toast("Coming soon!", {
    duration: 5000,
    position: "top-right",
    style: {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      width: "500%",
    },
    icon: "‼️",
  });

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <Toaster />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  onClick={link.href == "#" ? notifier : null}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>{link.text}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  onClick={notifier}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

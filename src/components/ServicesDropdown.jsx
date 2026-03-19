import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ServicesDropdown() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  // ✅ Only last two are clickable
  const menu = [
    "Infertility Services",
    "Fetal Medicine Services",
    "Gynaecology Scans",
    { name: "Genetic Counselling", path: "/services/genetic-counselling" },
    { name: "Multispeciality OPD services", path: "/services/opd-services" },
  ];

  const subMenuItems = {
    "Infertility Services": [
      { name: "Fertility Testing", path: "/services/fertility-testing" },
      { name: "IUI", path: "/services/iui" },
      { name: "IVF", path: "/services/ivf" },
      {
        name: "Additional Fertility Services",
        children: [
          { name: "Egg Freezing", path: "/services/egg-freezing" },
          { name: "Sperm Banking", path: "/services/sperm-banking" },
          { name: "Nutritional Guidance", path: "/services/nutrition" },
        ],
      },
    ],
    "Fetal Medicine Services": [
      {
        name: "Obstetric Scan",
        children: [
          { name: "Nuchal Translucency Scan", path: "/services/nt-scan" },
          { name: "Anomaly Scan", path: "/services/anomaly-scan" },
          { name: "Fetal Growth Scan", path: "/services/growth-scan" },
          { name: "Fetal Doppler Scan", path: "/services/doppler-scan" },
          { name: "Fetal Echo Scan", path: "/services/fetal-echo" },
          { name: "Fetal Neurosonography", path: "/services/neurosonography" },
          { name: "Multiple Pregnancies Scan", path: "/services/multiple-pregnancy" },
        ],
      },
      {
        name: "Interventional Procedures",
        children: [
          { name: "Amniocentesis", path: "/services/amniocentesis" },
          { name: "Chorionic Villus Sampling", path: "/services/cvs" },
          { name: "Selective Fetal Reductions", path: "/services/fetal-reductions" },
          { name: "NIPT", path: "/services/nipt" },
        ],
      },
    ],
    "Gynaecology Scans": [
      { name: "Female Pelvic Scan", path: "/services/pelvic-scan" },
      { name: "Follicular Study Scan", path: "/services/follicular-study" },
    ],
  };

  return (
    <div
      className="flex items-start"
      onMouseLeave={() => {
        setActiveMenu(null);
        setActiveSubMenu(null);
        setSubMenuIndex(null);
      }}
    >
      {/* LAYER 1 */}
      <div className="bg-white rounded-2xl shadow-xl w-52 py-2 text-[15px] border border-gray-100 z-10 relative">
        {menu.map((item) => {
          const isObject = typeof item === "object";
          const name = isObject ? item.name : item;
          const path = isObject ? item.path : null;

          return (
            <div
              key={name}
              onMouseEnter={() => {
                setActiveMenu(name);
                setActiveSubMenu(null);
              }}
              className={`px-4 py-3 flex justify-between items-center cursor-pointer leading-tight
                ${
                  activeMenu === name
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {path ? (
                <Link to={path} className="flex items-center gap-2 w-full">
                  <span className="text-blue-500 font-bold">•</span>
                  {name}
                </Link>
              ) : (
                <span className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  {name}
                </span>
              )}

              {subMenuItems[name] && (
                <ChevronRight size={14} className="flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* LAYER 2 */}
      {activeMenu && subMenuItems[activeMenu] && (
        <div className="relative z-20">
          <div className="bg-white rounded-2xl shadow-xl w-52 py-2 text-[15px] border border-gray-100 ml-[-10px] animate-in fade-in slide-in-from-left-1 duration-150">
            {subMenuItems[activeMenu].map((item, index) => (
              <div
                key={item.name}
                onMouseEnter={() => {
                  setActiveSubMenu(item.name);
                  setSubMenuIndex(index);
                }}
                className={`px-4 py-3 flex justify-between items-center cursor-pointer leading-tight
                  ${
                    activeSubMenu === item.name
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
              >
                {item.path ? (
                  <Link to={item.path} className="flex-1 break-words mr-2">
                    <span className="text-blue-500 mr-2 font-bold">•</span>
                    {item.name}
                  </Link>
                ) : (
                  <span className="flex-1 break-words mr-2">
                    <span className="text-blue-500 mr-2 font-bold">•</span>
                    {item.name}
                  </span>
                )}
                {item.children && (
                  <ChevronRight size={14} className="flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* LAYER 3 */}
          {activeSubMenu &&
            subMenuItems[activeMenu]?.find((i) => i.name === activeSubMenu)
              ?.children && (
              <div
                className="absolute left-[calc(100%-12px)] bg-white rounded-2xl shadow-2xl w-52 py-2 text-[15px] border border-gray-100 z-30 animate-in fade-in slide-in-from-left-1 duration-150"
                style={{ top: `${subMenuIndex * 42}px` }}
              >
                {subMenuItems[activeMenu]
                  .find((i) => i.name === activeSubMenu)
                  .children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      className="px-4 py-3 flex items-start gap-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors leading-tight"
                    >
                      <span className="text-blue-500 font-bold">•</span>
                      <span className="break-words">{child.name}</span>
                    </Link>
                  ))}
              </div>
            )}
        </div>
      )}
    </div>
  );
}
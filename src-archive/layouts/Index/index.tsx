// TuiSidebar.tsx
import { Link, useLocation } from "react-router-dom";
import indexData from "@contents/tuilib/index.json";
import "./index.css";

const formatUrl = (path: string) => {
  return `/docs/tuilib/${path.replace(/^\//, "").replace(/\.md$/, "")}`.replace(/\/+/g, "/");
};

export default function TuiSidebar() {
  const location = useLocation();
  const section = indexData.sections[0];

  return (
    <aside className="tui-sidebar">
      <ul className="tui-sidebar-list">
        {section.items.map((item, index) => {
          const targetUrl = item.path ? formatUrl(item.path) : "";
          const isActive = location.pathname === targetUrl;

          if (!item.items) {
            return (
              <li key={index} className="tui-sidebar-item">
                <Link to={targetUrl} className={`tui-sidebar-link ${isActive ? "is-active" : ""}`}>
                  {item.title}
                </Link>
              </li>
            );
          }

          return (
            <li key={index} className="tui-sidebar-item has-children">
              <div className="tui-sidebar-group-title">
                {item.path ? (
                  <Link
                    to={targetUrl}
                    className={`tui-sidebar-link ${isActive ? "is-active" : ""}`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </div>

              <ul className="tui-sidebar-sub-list">
                {item.items.map((subItem, subIndex) => {
                  const subUrl = subItem.path ? formatUrl(subItem.path) : "";
                  const isSubActive = location.pathname === subUrl;

                  if (subItem.items) {
                    return (
                      <li key={subIndex} className="tui-sidebar-sub-item has-grand-children">
                        <div className="tui-sidebar-sub-group-title">
                          {subItem.path ? (
                            <Link
                              to={subUrl}
                              className={`tui-sidebar-link ${isSubActive ? "is-active" : ""}`}
                            >
                              {subItem.title}
                            </Link>
                          ) : (
                            subItem.title
                          )}
                        </div>

                        <ul className="tui-sidebar-grand-list">
                          {subItem.items.map((grandChild, gIndex) => {
                            const grandUrl = formatUrl(grandChild.path);
                            const isGrandActive = location.pathname === grandUrl;
                            return (
                              <li key={gIndex} className="tui-sidebar-grand-item">
                                <Link
                                  to={grandUrl}
                                  className={`tui-sidebar-link tui-sidebar-grand-link ${isGrandActive ? "is-active" : ""}`}
                                >
                                  {grandChild.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={subIndex} className="tui-sidebar-sub-item">
                      <Link
                        to={subUrl}
                        className={`tui-sidebar-link ${isSubActive ? "is-active" : ""}`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

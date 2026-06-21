import { Link, useLocation } from "react-router-dom";
import indexData from "@contents/tuilib/index.json";

const formatUrl = (path: string) => {
  return `/docs/tuilib/${path.replace(/^\//, "").replace(/\.md$/, "")}`.replace(/\/+/g, "/");
};

const formatTitle = (path: string) => {
  const fileName = path.split("/").pop()?.replace(/\.md$/, "") || "";
  return fileName
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function TuiSidebar() {
  const location = useLocation();
  const section = indexData.sections[0];

  return (
    <aside
      className="tui-sidebar"
      style={{ width: "260px", padding: "20px", borderRight: "1px solid #eee" }}
    >
      <h3 style={{ marginBottom: "15px", fontSize: "1.1rem" }}>Documentation</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {section.items.map((item, index) => {
          if (!item.items) {
            const targetUrl = formatUrl(item.path || "");
            const isActive = location.pathname === targetUrl;
            return (
              <li key={index} style={{ marginBottom: "10px" }}>
                <Link
                  to={targetUrl}
                  style={{
                    textDecoration: "none",
                    color: isActive ? "#007acc" : "#333",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          return (
            <li key={index} style={{ marginBottom: "15px" }}>
              <div style={{ fontWeight: "bold", color: "#666", marginBottom: "5px" }}>
                {item.path ? (
                  <Link to={formatUrl(item.path)} style={{ color: "#333", textDecoration: "none" }}>
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </div>

              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "15px",
                  margin: 0,
                  borderLeft: "1px solid #ddd",
                }}
              >
                {item.items.map((subPath, subIndex) => {
                  if (subPath.includes("*")) {
                    return (
                      <li
                        key={subIndex}
                        style={{
                          fontSize: "0.85rem",
                          color: "#999",
                          fontStyle: "italic",
                          padding: "3px 0",
                        }}
                      >
                        All reference items...
                      </li>
                    );
                  }

                  const subUrl = formatUrl(subPath);
                  const isSubActive = location.pathname === subUrl;

                  return (
                    <li key={subIndex} style={{ padding: "3px 0" }}>
                      <Link
                        to={subUrl}
                        style={{
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          color: isSubActive ? "#007acc" : "#555",
                          fontWeight: isSubActive ? "bold" : "normal",
                        }}
                      >
                        {formatTitle(subPath)}
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

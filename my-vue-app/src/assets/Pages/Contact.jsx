import Dropdown from "../Components/DropDwon/DropDwon";
import Custom from "../Components/DropDwon/Custom";
import { useTheme } from "../../ThemeContext";
import Num from "../Components/Countnumbers/Counter";
export default function Contact() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex">
          <div>
            <Dropdown
              title="Options 1"
              items={[
                {
                  index: "new",
                  label: "New",
                  className: "",
                },
                {
                  index: "update",
                  label: "Edit",
                  className: "",
                },
                {
                  index: "edit",
                  label: "Edit",
                  className: "text-danger",
                },
              ]}
            />
          </div>
          <div>
            <Custom
              title="DropDwon"
              items={[
                {
                  label: "New Item",
                },
                {
                  label: "Update",
                },
                {
                  label: "Edit",
                },
                {
                  label: "Delete",
                },
              ]}
            />
          </div>
        </div>
        <Num />
      </div>
    </>
  );
}

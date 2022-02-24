import MouseTrail, { MouseTrailProps } from "@pjsalita/react-mouse-trail";
import { useState } from "react";

const boxColors = [
  "#ffc09f",
  "#ffee93",
  "#fcf5c7",
  "#a0ced9",
  "#adf7b6",
  "#ffffff",
];

const App: React.FC = () => {
  const [color, setColor] = useState<string>("#000000");
  const [idleAnimation, setIdleAnimation] = useState<boolean>(true);
  const [idleAnimationCount, setIdleAnimationCount] = useState<number>(10);
  const [inverted, setInverted] = useState<boolean>(true);
  const [size, setSize] = useState(20);
  const [trailCount, setTrailCount] = useState<number>(20);

  const config: MouseTrailProps = {
    color,
    idleAnimation,
    idleAnimationCount,
    inverted,
    size,
    trailCount,
  };

  const renderBoxes = () => {
    const boxes = [];

    for (let i = 0; i < 6; i++) {
      boxes.push(
        <div className="box" key={i} style={{ background: boxColors[i] }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida
          dolor non ipsum maximus placerat. Morbi id tellus in enim tincidunt
          sollicitudin non a velit. Etiam pretium facilisis odio sit amet
          pulvinar.
        </div>
      );
    }

    return boxes;
  };

  return (
    <div style={{ margin: "50px 0" }}>
      <MouseTrail {...config} />

      <h1 style={{ textAlign: "center" }}>React Mouse Trail</h1>
      <div style={{ width: "80%", margin: "auto", overflow: "auto" }}>
        <table>
          <tbody>
            <tr>
              <td>color:</td>
              <td>
                <input
                  style={{ margin: "0 5px" }}
                  type="color"
                  value={color}
                  onChange={({ currentTarget }) =>
                    setColor(currentTarget.value)
                  }
                />
              </td>
            </tr>

            <tr>
              <td>idleAnimation:</td>
              <td>
                <button
                  style={{ margin: "0 5px" }}
                  onClick={() => setIdleAnimation((prev) => !prev)}
                >
                  {idleAnimation.toString()}
                </button>
              </td>
            </tr>

            <tr>
              <td>idleAnimationCount:</td>
              <td>
                <input
                  style={{
                    margin: "0 5px",
                    border: "1px solid #000",
                    color: "#000",
                    background: "#fff",
                  }}
                  type="number"
                  value={idleAnimationCount}
                  onChange={({ currentTarget }) =>
                    setIdleAnimationCount(parseInt(currentTarget.value))
                  }
                />
              </td>
            </tr>

            <tr>
              <td>inverted:</td>
              <td>
                <button
                  style={{ margin: "0 5px" }}
                  onClick={() => setInverted((prev) => !prev)}
                >
                  {inverted.toString()}
                </button>
              </td>
            </tr>

            <tr>
              <td>size:</td>
              <td>
                <button
                  style={{ margin: "0 5px" }}
                  onClick={() => setSize((prev) => prev - 5)}
                >
                  -5
                </button>
                <button
                  style={{ margin: "0 5px" }}
                  onClick={() => setSize((prev) => prev + 5)}
                >
                  +5
                </button>
              </td>
            </tr>

            <tr>
              <td>trailCount:</td>
              <td>
                <input
                  style={{
                    margin: "0 5px",
                    border: "1px solid #000",
                    color: "#000",
                    background: "#fff",
                  }}
                  type="number"
                  value={trailCount}
                  onChange={({ currentTarget }) =>
                    setTrailCount(parseInt(currentTarget.value))
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ border: "1px solid #000", padding: 5 }}>
          <code>
            const config = {`{`}
            {Object.entries(config).map(([key, value]) => (
              <div key={key} style={{ marginLeft: 20 }}>
                <p>
                  {key}:{" "}
                  {typeof value === "string" ? `"${value}"` : value.toString()},
                </p>
              </div>
            ))}
            {`}`}
            <p>{`<MouseTrail {...config} />`}</p>
          </code>
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {renderBoxes()}
      </div>
    </div>
  );
};

export default App;

import { render, screen } from "@testing-library/react";
import App from "./App";

//don't run test, I had no time to update, maybe I could test on rendering the icon or the proper texts on each screen
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

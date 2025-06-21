import { render, waitFor, screen } from "@testing-library/react";
import Login from ".";

vi.mock("@services/user", () => ({
  getMe: vi.fn(() => Promise.resolve({ name: "Mateus" })),
}));

describe("Login page", () => {
  beforeEach(() => {
    render(<Login />);
  });

  it("should render the title and display user name after fetch", () => {
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("should call getMe", async () => {
    await waitFor(() => {
      expect(screen.getByTestId("username")).toBeInTheDocument();
      expect(screen.getByTestId("username")).toHaveTextContent("Mateus");
    });
  });
});

import React from "react";
import { Button, Card,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import * as ReactDOM from "react-router-dom";

export function UpdateProfileCallout() {
  
  const [error, setError] = React.useState("");
  const { currentUser, logout } = useAuth();
  const history = ReactDOM.useHistory();


  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  if (!currentUser) return <div>Not logged in <div className="w100 text-center mt-2">
  <Button variant="link" onClick={handleLogout}>
    Log Out
  </Button>
</div></div>

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Settings</h2>
          <strong>Email:</strong> {currentUser.email}
          <Link
            to="/update-profile"
            className="btn btn-primary w-100 mt-2"
            style={{ color: "white", background: "#64931b" }}
          >
            Update Profile
          </Link>
        </Card.Body>
      </Card>

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="w100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}

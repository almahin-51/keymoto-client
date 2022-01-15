import React, { useEffect, useState } from "react";
import { Button, Form, Col, Row, Table, Spinner } from "react-bootstrap";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleOnSubmit = (e) => {
    const user = { email };
    if (email !== "") {
      setIsLoading(true);
    }
    fetch("https://stormy-everglades-36632.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          document.getElementById("makeAdmin").reset();
          swal("Done!", "Admin successfully Added.", "success");
        } else if (data.matchedCount > 0) {
          swal("Already Admin!", "This user already admin.", "error");
        }
        setIsLoading(false);
      });
    e.preventDefault();
  };

  useEffect(() => {
    fetch("https://stormy-everglades-36632.herokuapp.com/users/admin")
      .then((res) => res.json())
      .then((data) => {
        setAdmins(data);
        setIsLoading(false);
      });
  }, [admins]);

  const handleCancel = (id) => {
    setIsLoading(true);
    swal({
      title: "Are you sure?",
      text: "You want to Delete the Admin!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://stormy-everglades-36632.herokuapp.com/users/admin/${id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(true);
          });

        swal("Admin has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Row className="p-3">
        {isLoading && (
          <div className="sweet-loading text-center vh-100 py-5 my-5">
            <Spinner animation="border" />
          </div>
        )}
        <h2 className="fw-bold text-center mt-3 mb-4 text-red">Make Admin</h2>
        <Col xs md={6}>
          <Form id="makeAdmin" onSubmit={handleOnSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingNameCustom"
                type="email"
                onBlur={handleOnBlur}
                placeholder="Email"
                className="rounded-0"
                required
              />
              <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
            <Button type="submit" className="my-btn text-black">
              Make Admin
            </Button>
          </Form>
        </Col>
        <Col xs md={6}>
          <Table striped bordered hover size="sm" className="text-center p-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin._id}>
                  <td>{admin.displayName}</td>
                  <td>{admin.email}</td>
                  <td>{admin.role}</td>
                  <td
                    className="delete-btn"
                    style={{ color: "red" }}
                    onClick={() => handleCancel(admin._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default MakeAdmin;

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://stormy-everglades-36632.herokuapp.com/purchases?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products, user.email]);

  const handleCancel = (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to Delete it?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://stormy-everglades-36632.herokuapp.com/purchases/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {});
        swal("Delete Successfully", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h1 className="fw-bold text-center my-4 text-red">My Orders</h1>
      <Table
        responsive
        striped
        bordered
        hover
        size="sm"
        className="text-center"
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Bike Model Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.email}</td>
              <td>{product?.bike?.modelName}</td>
              <td>{product?.date}</td>
              <td className={product.status}>{product.status}</td>
              <td
                className="delete-btn"
                onClick={() => handleCancel(product._id)}
              >
                Cancel
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrder;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
function HeadTail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [state, setState] = useState([]);

  const onSubmit = (data) => {
    if (data.type) {
      let bool = false;
      let s = state.map((u) => {
        if (u[u.length - 1] !== data.type && !bool) {
          u.push(data.type);
          bool = true;
        }
        return u;
      });

      if (state.length === 0 || !bool) {
        if (data.type === "T") {
          s = [...state, ["", data.type]];
        } else {
          s = [...state, [data.type]];
        }
      }
      console.log("state", s);
      setState(s);
      reset();
    }
  };

  const renderTable = state.map((u, i) => {
    return (
      <tr key={i}>
        {u?.map((c, j) => {
          return (
            <td key={uuid()} colSpan="2">
              {c}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <>
      <div className="m-2">
        <Link to="/">Back to home</Link>
      </div>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" m-5 mb-1">
          <select
            className="form-control"
            {...register("type", { required: "This field is required" })}
          >
            <option value="">Select...</option>
            <option value="H">Head </option>
            <option value="T">Tail</option>
          </select>
        </div>
        <div className="ms-5 mb-2">
          {errors?.type && (
            <span className="text-danger">{errors?.type?.message}</span>
          )}
        </div>
        <input className="ms-5 btn btn-primary" type="submit" />
      </form>

      <table>
        <tbody>{renderTable}</tbody>
      </table>
    </>
  );
}

export default HeadTail;

import { useState } from "react";

import styles from "../styles/form.module.css";
import LinkCard from "./linkcard";
const endpoint =
  process.env.NODE_ENV === "production" ? `` : "http://localhost:3000";

const LinksForm = ({ data, showmsg, showmsgtype }) => {
  console.log(data);
  const [links, setlinks] = useState(data);

  const save = async (linkdata) => {
    console.log("links linkdata");
    console.log(linkdata);
    let operation = "insertpagelinks";
    if (linkdata.hasOwnProperty("id")) {
      operation = `updatepagelinks`;
    }

    let res = await fetch(`${endpoint}/api/${operation}`, {
      method: "POST",
      body: JSON.stringify([linkdata]),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    showmsg(operation + " success ");
    showmsgtype("success");

    console.log(res);
    setlinks(res.linkData);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={`${styles.Inner} col-10 col-sm-10 col-md-10 col-lg-8 col-xl-10 col-xxl-8 `}
        >
          {/* <form onSubmit={(e) => e.preventDefault()}> */}
          <h3>Link Data</h3>
          <button
            type="button"
            className="btn btn-primary btn-block"
            // onClick={handleSubmit(update)}
            onClick={() => {
              setlinks((pre) => {
                return [
                  ...pre,
                  {
                    linkUrl: "",
                    displayText: "",
                    pagedataid: data[0].pagedataid,
                  },
                ];
              });
              // append({ linkUrl: "", displayText: "" });
            }}
          >
            Add new
          </button>
          {links.length &&
            links.map((item, index) => {
              console.log(item);
              return (
                <LinkCard
                  // id={index}
                  item={item}
                  save={save}
                  // errors={errors}
                  // register={register}
                />
              );
            })}
          {/* {links.length &&
              links.map((ele) => {
                console.log(ele);
                return <LinkCard {...ele} />;
              })} */}
          {/* <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit(save)}
            // disabled={loading}
          > */}
          {/* {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )} */}
          {/* Save */}
          {/* </button> */}
          {/* </form> */}
        </div>
      </div>
    </>
  );
};
export default LinksForm;

/**
     const fieldName = `links[${index}]`;
                return (
                  <div class="card">
                    <div class="card-body">
                      <fieldset name={fieldName} key={fieldName}>
                        <div className="mb-3 small">
                          <label className="form-label">Name {index}</label>
                          <input
                            type="text"
                            className={
                              errors.handlerText
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            placeholder="Enter name"
                            // {...register("name")}
                            {...register(`${fieldName}.name`)}
                          />
                        </div>
                        <div className="mb-3 small">
                          <label className="form-label">Name {index}</label>
                          <input
                            type="text"
                            className={
                              errors.handlerText
                                ? "form-control is-invalid"
                                : "form-control"
                            }
                            placeholder="Enter link"
                            // {...register("name")}
                            {...register(`${fieldName}.link`)}
                          />
                        </div>
                      </fieldset>{" "}
                    </div>{" "}
                  </div>
                );
 */

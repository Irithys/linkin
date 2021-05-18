import { useForm } from "react-hook-form";

import styles from "../styles/form.module.css";

const FontForm = ({ data, update, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues: data });

  return (
    <>
      <div className={styles.Wrapper}>
        <div
          className={`${styles.Inner} col-10 col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8 `}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Font Data</h3>
            <div className="mb-3 ">
              <label className="form-label">Handler Font Size</label>
              <input
                type="number"
                className={
                  errors.handlerFontSize
                    ? "form-control is-invalid"
                    : "form-control"
                }
                placeholder="Enter handler font size"
                {...register("handlerFontSize", {
                  // max: { message: "Width must be below 100%", value: 100 },
                  min: { message: "Font Size must be above 1px", value: 1 },
                })}
              />
              {errors.handlerFontSize && (
                <div className="invalid-feedback">
                  {errors.handlerFontSize.message}
                </div>
              )}
            </div>{" "}
            <div className="mb-3 ">
              <label className="form-label">Font Url</label>
              <input
                type="text"
                className={
                  errors.fontUrl ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Avatar Url"
                {...register("fontUrl", {
                  pattern: {
                    message: "Should be a valid URL",
                    value:
                      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                  },
                })}
              />

              <div className="form-text">
                Ex -
                {
                  "https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                }{" "}
                <br></br>
                defaults to <br></br>
                {"https://fonts.googleapis.com/css2?family=Roboto&display=swap"}
              </div>
              {errors.fontUrl && (
                <div className="invalid-feedback">{errors.fontUrl.message}</div>
              )}
            </div>{" "}
            <div className="mb-3 ">
              <label className="form-label">Font family</label>
              <input
                type="text"
                className={
                  errors.fontFamily ? "form-control is-invalid" : "form-control"
                }
                placeholder="Enter Footer text"
                {...register("fontFamily")}
              />

              <div className="form-text">
                Ex - "Montserrat", sans-serif defaults to{" "}
                {"'Roboto', sans-serif"}
              </div>
            </div>{" "}
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={handleSubmit(update)}
              disabled={loading}
            >
              {loading && (
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default FontForm;
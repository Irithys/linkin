export default function LinkCard({ id, item, errors, register }) {
  console.log("dada - " + id);
  //   const fieldName = `links[${id}]`;
  return (
    <>
      <div class="card">
        <div class="card-body">
          <div className="mb-3 small">
            <label className="form-label">Name {id}</label>
            <input
              type="text"
              className={
                errors.handlerText ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter name"
              defaultValue={`${item.name}`}
              // {...register("name")}
              // {...register(`test.${index}.firstName`)}
              {...register(`links.${id}.name`)}
            />
          </div>
          <div className="mb-3 small">
            <label className="form-label">Name {id}</label>
            <input
              type="text"
              className={
                errors.handlerText ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter link"
              defaultValue={`${item.link}`}
              // {...register("name")}
              {...register(`links.${id}.link`)}
            />
          </div>
        </div>{" "}
      </div>
      );
      {/* <div class="card">
        <div class="card-body">
          <div className="mb-3 small">
            <label className="form-label">Name</label>
            <input
              type="text"
              className={
                errors.handlerText ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Handler name"
              {...register("name")}
            />
          </div>
          <div className="mb-3 small">
            <label className="form-label">Link</label>
            <input
              type="text"
              className={
                errors.handlerText ? "form-control is-invalid" : "form-control"
              }
              placeholder="Enter Handler name"
              {...register("link")}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}
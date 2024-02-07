import * as Yup from "yup";
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 3);
const paramsMessage = Yup.object().shape({
    theme: Yup.string().required("Theme is mandatory"),
    type: Yup.string().required("Type is mandatory")
    .test("select is required", function(value) {
        if (value === "Select type") {
            return this.createError({ message: "Select type is not allowed", path: this.path });
        }
        return true;
    }),
    language: Yup.string().required("Language is mandatory")
    .test("select is required", function(value) {
        if (value === "Select language") {
            return this.createError({ message: "Select type is not allowed", path: this.path });
        }
        return true;
    }),
});
export default paramsMessage;

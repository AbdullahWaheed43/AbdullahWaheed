export const checkoutValidation = (data) => {
    let errors = {};

    if (!data.phone) {
        errors.phone = "Phone Is Required."
    }
    if (!data.address) {
        errors.address = "Address Is Required."
    }

    return errors;

}
function validateProductFields(product) {
    const { productName, productOwnerName, Developers, scrumMasterName, startDate, methodology } = product;

    // Check that all required fields are present
    if (!productName || !productOwnerName || !Developers || !scrumMasterName || !startDate || !methodology) {
      return { success: false, message: 'Missing required fields' };
    }

    // Check that the start date is in the right format
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (!dateRegex.test(startDate)) {
      return { success: false, message: 'Start date must be in the format YYYY/MM/DD' };
    }

    // Check that the methodology is one of the allowed values
    const allowedMethodologies = ['Agile', 'Waterfall'];
    if (!allowedMethodologies.includes(methodology)) {
      return { success: false, message: `Methodology must be one of the following: ${allowedMethodologies.join(', ')}` };
    }

    // Check that the list of developers is not empty
    if (Developers.length === 0) {
      return { success: false, message: 'Must have at least one developer' };
    }

    // If all validation checks pass, return success: true
    return { success: true };
  }

  function updateProductIfMatch(product, productId, data) {
    console.log(typeof product.productId, typeof productId)
    if (product.productId === productId) {
      return {
        ...product,
        ...data,
      };
    }
    return product;
  }

  const generateNewProductId = (products) => {
    const productIds = products.map((product) => product.productId);
    const maxProductId = Math.max(...productIds);
    return maxProductId + 1;
  }

  module.exports = {
    validateProductFields,
    updateProductIfMatch,
    generateNewProductId,
  };

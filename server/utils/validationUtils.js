function validateProductFields(product) {
    if (!validateRequiredFields(product)) {
      return { success: false, message: 'Missing required fields' };
    }

    if (!validateStartDate(product.startDate)) {
      return { success: false, message: 'Start date must be in the format YYYY/MM/DD' };
    }

    if (!validateMethodology(product.methodology)) {
      const allowedMethodologies = ['Agile', 'Waterfall'];
      return { success: false, message: `Methodology must be one of the following: ${allowedMethodologies.join(', ')}` };
    }

    if (!validateDevelopers(product.Developers)) {
      return { success: false, message: 'Must have at least one developer' };
    }

    return { success: true };
  }

  function validateRequiredFields(product) {
    const { productName, productOwnerName, Developers, scrumMasterName, startDate, methodology } = product;
    return !!productName && !!productOwnerName && !!Developers && !!scrumMasterName && !!startDate && !!methodology;
  }

  function validateStartDate(startDate) {
    const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    return dateRegex.test(startDate);
  }

  function validateMethodology(methodology) {
    const allowedMethodologies = ['Agile', 'Waterfall'];
    return allowedMethodologies.includes(methodology);
  }

  function validateDevelopers(developers) {
    return developers.length > 0;
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

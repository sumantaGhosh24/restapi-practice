export const checkProductData = async (req, res, next) => {
  const errors = [];

  // validate input fields empty or not
  for (const key in req.body) {
    if (!req.body[key]) {
      errors.push(`Please Fill Product ${key}`);
    }
  }

  if (errors.length > 0) {
    return res.status(401).json({msg: errors});
  }

  next();
};

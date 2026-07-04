const getCurrentUser = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

export default getCurrentUser;

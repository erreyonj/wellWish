import Wish from "../../components/models/Wish"


module.exports = {
    createPost: async (req, res) => {
        try {
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
    
          await Wish.create({
            title: req.body.title,
            img: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,,
            user: req.user.id,
          });
          console.log("Post has been added!");
          res.redirect("/profile");
        } catch (err) {
          console.log(err);
        }
      },
}